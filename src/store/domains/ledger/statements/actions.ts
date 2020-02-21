import { push } from 'connected-react-router';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, uiItemsConst } from 'consts';

import { openModal } from 'store/domains/modals';
import { selectActiveItemId, setIsOpenFilter } from 'store/domains/utils';
import { Thunk } from 'types';
import { cookiesUtil, downloadUtil, errorDecoratorUtil, storageUtil } from 'utils';
import { LedgerId } from '../customers';
import {
  ActionTypeKeys,
  FilterLedgerStatementsAction,
  FilterLedgerStatementsByIdAction,
  GetLedgerAccountStatementsAction,
  GetLedgerStatementAprsAction,
  GetLedgerStatementTransactionsAction
} from './actionTypes';
import * as api from './api';
import {
  selectLedgerCurrentStatementForReport,
  selectLedgerCurrentStatementTransaction,
  selectLedgerStatementReportFileName,
} from './selectors';
import { LedgerStatementsFilterPrepared, LedgerStatementTransactionsItemsRequest } from './types';
import {
  preparedFilterToSend,
  prepareStatementAprsForReport,
  prepareStatementTransactionsForReport,
} from './utils';

export type FilterLedgerStatements = (data: Partial<LedgerStatementsFilterPrepared>) =>
  FilterLedgerStatementsAction;
export type HandleFilterLedgerStatements = () => Thunk<void>;

export type GetLedgerStatementTransactions = (data: LedgerStatementTransactionsItemsRequest) =>
  GetLedgerStatementTransactionsAction;
export type HandleGetLedgerStatementTransactions = () => Thunk<void>;

export type FilterLedgerStatementsById = (id: LedgerId) => FilterLedgerStatementsByIdAction;
export type HandleFilterLedgerStatementsById = (id: LedgerId) => Thunk<void>;

export type GetLedgerAccountStatements = (accountId: number) => GetLedgerAccountStatementsAction;
export type HandleGetLedgerAccountStatements = (accountId: number) => Thunk<void>;

export type GetLedgerStatementAprs = (statementId: number) => GetLedgerStatementAprsAction;

export type HandleGetLedgerStatementAprs = (statementId: number, openModalName?: string) =>
  Thunk<void>;

export type HandleGenerateStatementTransactionsAprs = () => Thunk<void>;

export type HandleDownloadLedgerStatement = (
  statementId: number,
  formatFunction: () => void
) => Thunk<void>;

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

export const getLedgerAccountStatements: GetLedgerAccountStatements = accountId => ({
  type: ActionTypeKeys.GET_LEDGER_ACCOUNT_STATEMENTS,
  payload: api.getLedgerAccountStatements(accountId),
});

export const getLedgerAccountStatementAprs: GetLedgerStatementAprs = statementId => ({
  type: ActionTypeKeys.GET_LEDGER_STATEMENT_APRS,
  payload: api.getLedgerAccountStatementAprs(statementId),
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
        const preparedData = preparedFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterLedgerStatements(preparedData));
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
        const data = selectLedgerCurrentStatementTransaction(state);

        await dispatch(getLedgerStatementTransactions(data));
      },
      dispatch
    );
  };

export const handleFilterByIdLedgerStatements: HandleFilterLedgerStatementsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.LEDGER_STATEMENTS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.LEDGER_STATEMENTS}`));
        await dispatch(filterLedgerStatementsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

export const handleGetLedgerAccountStatements: HandleGetLedgerAccountStatements = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getLedgerAccountStatements(accountId));
      },
      dispatch
    );
  };

export const handleGetLedgerStatementAprs:
  HandleGetLedgerStatementAprs = (statementId, openModalName) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await dispatch(getLedgerAccountStatementAprs(statementId));

          if (openModalName) {
            dispatch(openModal({ name: openModalName }));
          }
        },
        dispatch
      );
    };

export const handleGenerateStatementTransactionsAprs:
  HandleGenerateStatementTransactionsAprs = () =>
    async (dispatch, getState) => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          const state = getState();
          const statementId = selectActiveItemId(state);

          const currentTransaction = selectLedgerCurrentStatementTransaction(state);

          const data: Array<any> = [];

          const loadedData = await Promise.all([
            dispatch(getLedgerStatementTransactions(currentTransaction)),
            dispatch(getLedgerAccountStatementAprs(statementId)),
          ]) as Array<any>;

          loadedData.forEach(item => data.push(item.value));

          const transactions = data.find(el => el.transactions).transactions;
          const aprs = data.find(el => el.statement_aprs).statement_aprs;

          downloadUtil.downloadStatementPDF({
            fileName: selectLedgerStatementReportFileName(state),
            statement: selectLedgerCurrentStatementForReport(state),
            tables: [
              {
                id: 'transactions',
                title: 'Transactions',
                items: prepareStatementTransactionsForReport(transactions),
              },
              {
                id: 'accruedInterest',
                title: 'Accrued interest',
                items: prepareStatementAprsForReport(aprs),
              },
            ],
          });
        },
        dispatch
      );
    };
