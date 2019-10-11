import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import {
  ActionTypeKeys,
  FilterLedgerStatementsAction,
  GetLedgerStatementTransactionsAction
} from './actionTypes';
import * as api from './api';
import { LedgerStatementsFilterPrepared, LedgerStatementTransactionsItemsRequest } from './types';
import { preparedFilterToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';
import { selectLedgerCurrentStatementTransaction } from './selectors';

export type FilterLedgerStatements = (params: Partial<LedgerStatementsFilterPrepared>) =>
  FilterLedgerStatementsAction;
export type HandleFilterLedgerStatements = () => Thunk<void>;

export type GetLedgerStatementTransactions = (data: LedgerStatementTransactionsItemsRequest) =>
GetLedgerStatementTransactionsAction;
export type HandleGetLedgerStatementTransactions = () => Thunk<void>;

export type ResetStatements = () => void;

export const filterLedgerStatements: FilterLedgerStatements = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS,
  payload: api.filterLedgerStatements(filter),
});

export const getLedgerStatementTransactions: GetLedgerStatementTransactions = data => ({
  type: ActionTypeKeys.GET_LEDGER_STATEMENT_TRANSACTIONS,
  payload: api.getLedgerStatementTransactions(data),
});

export const resetStatements: ResetStatements = () => ({
  type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS,
});

export const handleFilterLedgerStatements: HandleFilterLedgerStatements = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerStatements(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleGetLedgerStatementTransactions: HandleGetLedgerStatementTransactions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const values = selectLedgerCurrentStatementTransaction(state);

        await dispatch(getLedgerStatementTransactions(values));
      },
      dispatch
    );
  };
