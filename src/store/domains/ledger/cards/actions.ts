import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import {
  ActionTypeKeys,
  ActivateLedgerCardAction,
  FilterLedgerCardsAction,
} from './actionTypes';

import * as api from './api';

import { LedgerCardsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterLedgerCards = (params: Partial<LedgerCardsFilterParamsPrepared>) =>
  FilterLedgerCardsAction;
export type HandleFilterLedgerCards = () => Thunk<void>;

export type ActivateLedgerCard = (panAlias: string) => ActivateLedgerCardAction;
export type HandleActivateLedgerCard = (panAlias: string) =>
  Thunk<void>;

export const filterLedgerCards: FilterLedgerCards = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_CARDS,
  payload: api.filterLedgerCards(filterParams),
  meta: filterParams,
});

export const activateLedgerCard: ActivateLedgerCard = panAlias => ({
  type: ActionTypeKeys.ACTIVATE_LEDGER_CARD,
  payload: api.activateLedgerCard(panAlias),
});

export const handleFilterLedgerCards: HandleFilterLedgerCards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.LEDGER_CARDS_FILTER);
        const state = getState();
        const preparedValues = preparedFilterParamsToSend(formValues(state));

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
