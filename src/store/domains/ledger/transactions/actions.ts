import { cookiesNames } from 'consts';
import {
    ActionTypeKeys,
    GetLedgerTransactionsAction,
} from './actionTypes';

import * as api from './api';

import { apiClient } from 'services';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetLedgerTransactions = () => GetLedgerTransactionsAction;
export type HandleGetLedgerTransactions = VoidPromiseThunk;

export const getLedgerTransactions: GetLedgerTransactions = () => ({
  type: ActionTypeKeys.GET_LEDGER_TRANSACTIONS,
  payload: api.getLedgerTransactions(),
});

export const handleGetLedgerTransactions: HandleGetLedgerTransactions = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        await dispatch(getLedgerTransactions());
      },
      dispatch
    );
  };
