import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import {
  ActionTypeKeys,
  ActivateLedgerCardAction,
  ChangeLedgerCardStatusAction,
  FilterLedgerCardsAction,
} from './actionTypes';

import * as api from './api';

import { LedgerCardIds, LedgerCardIdsPrepared, LedgerCardsFilterPrepared } from './types';
import { preparedFilterToSend, prepareLedgerCartIds } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterLedgerCards = (params: Partial<LedgerCardsFilterPrepared>) =>
  FilterLedgerCardsAction;
export type HandleFilterLedgerCards = () => Thunk<void>;

export type ActivateLedgerCard = (panAlias: string) => ActivateLedgerCardAction;
export type HandleActivateLedgerCard = (panAlias: string) => Thunk<void>;

export type ChangeLedgerCardStatus = (ids: LedgerCardIdsPrepared) => ChangeLedgerCardStatusAction;
export type HandleChangeLedgerCardStatus = (ids: LedgerCardIds) => Thunk<void>;

export type ResetCards = () => void;

export const filterLedgerCards: FilterLedgerCards = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_CARDS,
  payload: api.filterLedgerCards(filter),
});

export const activateLedgerCard: ActivateLedgerCard = panAlias => ({
  type: ActionTypeKeys.ACTIVATE_LEDGER_CARD,
  payload: api.activateLedgerCard(panAlias),
});

export const changeLedgerCardStatus: ChangeLedgerCardStatus = ids => ({
  type: ActionTypeKeys.CHANGE_LEDGER_CARD_STATUS,
  payload: api.changeLedgerCardStatus(ids),
});

export const resetCards: ResetCards = () => ({
  type: ActionTypeKeys.RESET_CARDS,
});

export const handleFilterLedgerCards: HandleFilterLedgerCards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerCards(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleActivateLedgerCard: HandleActivateLedgerCard = panAlias =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(activateLedgerCard(panAlias));
      },
      dispatch
    );
  };

export const handleChangeLedgerCardStatus: HandleChangeLedgerCardStatus = ids =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const prepared = prepareLedgerCartIds(ids);

        await dispatch(changeLedgerCardStatus(prepared));
        await dispatch(handleFilterLedgerCards());
      },
      dispatch
    );
  };
