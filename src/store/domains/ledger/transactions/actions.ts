import { getFormValues } from 'redux-form';

import { cookiesNames, formNames } from 'consts';

import {
  ActionTypeKeys,
  FilterLedgerTransactionsAction,
  GetLedgerTransactionsAction,
  SetLedgerTransactionIdAction,
} from './actionTypes';

import * as api from './api';

import { LedgerTransactionsFilterParams, LedgerTransactionsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetLedgerTransactions = () => GetLedgerTransactionsAction;
export type HandleGetLedgerTransactions = VoidPromiseThunk;

export type SetLedgerTransactionId = (id: number) => SetLedgerTransactionIdAction;
export type HandleSetLedgerTransactionId = (id: number) => void;

export type FilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterParamsPrepared>) =>
  FilterLedgerTransactionsAction;
export type HandleFilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterParams>) =>
  Thunk<void>;

export const getLedgerTransactions: GetLedgerTransactions = () => ({
  type: ActionTypeKeys.GET_LEDGER_TRANSACTIONS,
  payload: api.getLedgerTransactions(),
});
export const setLedgerTransactionId: SetLedgerTransactionId = id => ({
  type: ActionTypeKeys.SET_LEDGER_TRANSACTION_ID,
  payload: id,
});

export const filterLedgerTransactions: FilterLedgerTransactions = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS,
  payload: api.filterLedgerTransactions(filterParams),
  meta: filterParams,
});

export const handleGetLedgerTransactions: HandleGetLedgerTransactions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const formValues = getFormValues(formNames.LEDGER_TRANSACTIONS_FILTER);
        const state = getState();

        if (formValues(state)) {
          const preparedValues = preparedFilterParamsToSend(formValues(state));
          await dispatch(filterLedgerTransactions(preparedValues));
        } else {
          await dispatch(getLedgerTransactions());
        }
      },
      dispatch
    );
  };

export const handleSetLedgerTransactionId: HandleSetLedgerTransactionId = id =>
  setLedgerTransactionId(id);

export const handleFilterLedgerTransactions: HandleFilterLedgerTransactions = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterLedgerTransactions(preparedValues));
      },
      dispatch
    );
  };
