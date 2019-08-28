import { cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  FilterLedgerTransactionsAction,
  SetLedgerTransactionIdAction,
} from './actionTypes';

import * as api from './api';

import { LedgerTransactionsFilterParams, LedgerTransactionsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { apiClient } from 'services';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type SetLedgerTransactionId = (id: number) => SetLedgerTransactionIdAction;
export type HandleSetLedgerTransactionId = (id: number) => void;

export type FilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterParamsPrepared>) =>
  FilterLedgerTransactionsAction;
export type HandleFilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterParams>) =>
  Thunk<void>;

export const setLedgerTransactionId: SetLedgerTransactionId = id => ({
  type: ActionTypeKeys.SET_LEDGER_TRANSACTION_ID,
  payload: id,
});

export const filterLedgerTransactions: FilterLedgerTransactions = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS,
  payload: api.filterLedgerTransactions(filterParams),
  meta: filterParams,
});

export const handleSetLedgerTransactionId: HandleSetLedgerTransactionId = id =>
  setLedgerTransactionId(id);

export const handleFilterLedgerTransactions: HandleFilterLedgerTransactions = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterLedgerTransactions(preparedValues));
      },
      dispatch
    );
  };
