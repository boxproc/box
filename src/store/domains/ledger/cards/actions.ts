import { getFormValues } from 'redux-form';

import { cookiesNames, formNames } from 'consts';

import {
  ActionTypeKeys,
  FilterLedgerCardsAction,
  GetLedgerCardsAction,
} from './actionTypes';

import * as api from './api';

import { LedgerCardsFilterParams, LedgerCardsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetLedgerCards = () => GetLedgerCardsAction;
export type HandleGetLedgerCards = VoidPromiseThunk;

export type FilterLedgerCards = (params: Partial<LedgerCardsFilterParamsPrepared>) =>
FilterLedgerCardsAction;
export type HandleFilterLedgerCards = (params: Partial<LedgerCardsFilterParams>) =>
  Thunk<void>;

export const getLedgerCards: GetLedgerCards = () => ({
  type: ActionTypeKeys.GET_LEDGER_CARDS,
  payload: api.getLedgerCards(),
});

export const filterLedgerCards: FilterLedgerCards = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_CARDS,
  payload: api.filterLedgerCards(filterParams),
  meta: filterParams,
});

export const handleGetLedgerCards: HandleGetLedgerCards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const formValues = getFormValues(formNames.LEDGER_CARDS_FILTER);
        const state = getState();

        if (formValues(state)) {
          const preparedValues = preparedFilterParamsToSend(formValues(state));
          await dispatch(filterLedgerCards(preparedValues));
        } else {
          await dispatch(getLedgerCards());
        }
      },
      dispatch
    );
  };

export const handleFilterLedgerCards: HandleFilterLedgerCards = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterLedgerCards(preparedValues));
      },
      dispatch
    );
  };
