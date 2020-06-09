import { push } from 'connected-react-router';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, uiItemsConst } from 'consts';

import { activeItemIdSelector, openModal, setIsOpenFilter } from 'store';
import { ILedgerId } from './../customers';

import {
  ActionTypeKeys,
  IFilterStatementsAction,
  IFilterStatementsByIdAction,
  IGetAccountStatementsAction,
  IGetStatementAprsAction,
  IGetStatementTransAction
} from './actionTypes';

import * as api from './api';

import {
  currentStatementForReportSelector,
  currentStatementTransactionSelector,
  statementReportFileNameSelector,
} from './selectors';

import {
  IStatementsFilterToSend,
  IStatementTransReq,
} from './types';

import {
  prepareFilterToSend,
  prepareStatementAprsForReport,
  prepareStatementTransactionsForReport,
} from './utils';

import { Thunk } from 'types';
import { cookiesUtil, downloadUtil, errorDecoratorUtil, storageUtil } from 'utils';

/**
 * Filter statements action
 */

export type TFilterStatements = (data: Partial<IStatementsFilterToSend>) => IFilterStatementsAction;
export type THandleFilterStatements = () => Thunk<void>;

export const filterStatements: TFilterStatements = filter => ({
  type: ActionTypeKeys.FILTER_STATEMENTS,
  payload: api.filterStatements(filter),
});

export const handleFilterStatements: THandleFilterStatements = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterStatements(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Get statement transactions action
 */

export type TGetStatementTransactions = (data: IStatementTransReq) => IGetStatementTransAction;
export type THandleGetStatementTransactions = () => Thunk<void>;

export const getStatementTransactions: TGetStatementTransactions = data => ({
  type: ActionTypeKeys.GET_STATEMENT_TRANSACTIONS,
  payload: api.getStatementTransactions(data),
});

export const handleGetStatementTransactions: THandleGetStatementTransactions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const data = currentStatementTransactionSelector(state);

        await dispatch(getStatementTransactions(data));
      },
      dispatch
    );
  };

/**
 * Filter statements by ID action
 */

export type TFilterStatementsById = (id: ILedgerId) => IFilterStatementsByIdAction;
export type THandleFilterStatementsById = (id: ILedgerId) => Thunk<void>;

export const filterStatementsById: TFilterStatementsById = data => ({
  type: ActionTypeKeys.FILTER_STATEMENTS_BY_ID,
  payload: api.filterStatementsById(data),
});

export const handleFilterByIdStatements: THandleFilterStatementsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.STATEMENTS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.STATEMENTS}`));
        await dispatch(filterStatementsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

/**
 * Get account statements action
 */

export type TGetAccountStatements = (accountId: number) => IGetAccountStatementsAction;
export type THandleGetAccountStatements = (accountId: number) => Thunk<void>;

export const getAccountStatements: TGetAccountStatements = accountId => ({
  type: ActionTypeKeys.GET_ACCOUNT_STATEMENTS,
  payload: api.getAccountStatements(accountId),
});

export const handleGetAccountStatements: THandleGetAccountStatements = accountId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAccountStatements(accountId));
      },
      dispatch
    );
  };

/**
 * Get statement APRs action
 */

export type TGetStatementAprs = (statementId: number) => IGetStatementAprsAction;
export type THandleGetStatementAprs = (statementId: number, openModalName?: string) =>
  Thunk<void>;

export const getAccountStatementAprs: TGetStatementAprs = statementId => ({
  type: ActionTypeKeys.GET_STATEMENT_APRS,
  payload: api.getAccountStatementAprs(statementId),
});

export const handleGetStatementAprs: THandleGetStatementAprs = (statementId, openModalName) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAccountStatementAprs(statementId));

        if (openModalName) {
          dispatch(openModal({ name: openModalName }));
        }
      },
      dispatch
    );
  };

/**
 * Download statement action
 */

export type THandleDownloadStatement = () => Thunk<void>;

export const handleDownloadStatement: THandleDownloadStatement = () =>
    async (dispatch, getState) => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          const state = getState();
          const statementId = activeItemIdSelector(state);

          const currentTransaction = currentStatementTransactionSelector(state);

          const data: Array<any> = [];

          const loadedData = await Promise.all([
            dispatch(getStatementTransactions(currentTransaction)),
            dispatch(getAccountStatementAprs(statementId)),
          ]) as Array<any>;

          loadedData.forEach(item => data.push(item.value));

          const transactions = data.find(el => el.transactions).transactions;
          const pendingTransactions = data.find(el => el.transactions).pending_transactions;
          const aprs = data.find(el => el.statement_aprs).statement_aprs;

          downloadUtil.downloadStatementPDF({
            fileName: statementReportFileNameSelector(state),
            statement: currentStatementForReportSelector(state),
            tables: [
              {
                id: 'transactions',
                title: 'Pending transactions',
                items: prepareStatementTransactionsForReport(pendingTransactions),
              },
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

/**
 * Reset statements action
 */

export type TResetStatements = () => void;

export const resetStatements: TResetStatements = () => ({
  type: ActionTypeKeys.FILTER_STATEMENTS,
});
