import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, uiItemConsts } from 'consts';

import {
  ActionTypeKeys,
  FilterLedgerStatementsAction,
  FilterLedgerStatementsByIdAction,
  GetLedgerStatementTransactionsAction
} from './actionTypes';
import * as api from './api';
import { LedgerStatementsFilterPrepared, LedgerStatementTransactionsItemsRequest } from './types';
import { preparedFilterToSend } from './utils';

import { push } from 'connected-react-router';
import { Thunk } from 'types';
import { cookiesUtil, errorDecoratorUtil } from 'utils';
import { LedgerId } from '../customers';
import { selectLedgerCurrentStatementTransaction } from './selectors';

export type FilterLedgerStatements = (params: Partial<LedgerStatementsFilterPrepared>) =>
  FilterLedgerStatementsAction;
export type HandleFilterLedgerStatements = () => Thunk<void>;

export type GetLedgerStatementTransactions = (data: LedgerStatementTransactionsItemsRequest) =>
  GetLedgerStatementTransactionsAction;
export type HandleGetLedgerStatementTransactions = () => Thunk<void>;

export type FilterLedgerStatementsById = (id: LedgerId) =>
  FilterLedgerStatementsByIdAction;
export type HandleFilterLedgerStatementsById = (id: LedgerId) => Thunk<void>;

export type ResetStatements = () => void;

export const filterLedgerStatements: FilterLedgerStatements = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS,
  payload: api.filterLedgerStatements(filter),
});

export const getLedgerStatementTransactions: GetLedgerStatementTransactions = data => ({
  type: ActionTypeKeys.GET_LEDGER_STATEMENT_TRANSACTIONS,
  payload: api.getLedgerStatementTransactions(data),
});

export const filterLedgerStatementsById: FilterLedgerStatementsById = data => ({
  type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS_BY_ID,
  payload: api.filterLedgerStatementsById(data),
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

export const handleFilterByIdLedgerStatements: HandleFilterLedgerStatementsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(filterLedgerStatementsById(id));
        cookiesUtil.remove(basePath + uiItemConsts.LEDGER_STATEMENTS);
        await dispatch(push(basePath + uiItemConsts.LEDGER_STATEMENTS));
      },
      dispatch
    );
  };
