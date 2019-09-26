import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import {
  ActionTypeKeys,
  ActivateLedgerCardAction,
  FilterLedgerCardsAction,
} from './actionTypes';

import * as api from './api';

import { LedgerCardsFilterPrepared } from './types';
import { preparedFilterToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterLedgerCards = (params: Partial<LedgerCardsFilterPrepared>) =>
  FilterLedgerCardsAction;
export type HandleFilterLedgerCards = () => Thunk<void>;

export type ActivateLedgerCard = (panAlias: string) => ActivateLedgerCardAction;
export type HandleActivateLedgerCard = (panAlias: string) =>
  Thunk<void>;

export const filterLedgerCards: FilterLedgerCards = Filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_CARDS,
  payload: api.filterLedgerCards(Filter),
  meta: Filter,
});

export const activateLedgerCard: ActivateLedgerCard = panAlias => ({
  type: ActionTypeKeys.ACTIVATE_LEDGER_CARD,
  payload: api.activateLedgerCard(panAlias),
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
