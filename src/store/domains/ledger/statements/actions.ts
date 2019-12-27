import { push } from 'connected-react-router';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, uiItemConsts } from 'consts';

import { openModal } from 'store/domains/modals';
import { selectActiveItemId, setIsOpenFilter } from 'store/domains/utils';
import { Thunk } from 'types';
import { cookiesUtil, downloadUtil, errorDecoratorUtil } from 'utils';
import { LedgerId } from '../customers';
import {
  ActionTypeKeys,
  FilterLedgerStatementsAction,
  FilterLedgerStatementsByIdAction,
  GetLedgerAccountStatementsAction,
  GetLedgerStatementAprsAction,
  GetLedgerStatementFeesAction,
  GetLedgerStatementRewardsAction,
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
  prepareStatementFeesForReport,
  prepareStatementRewardsForReport,
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
export type GetLedgerStatementFees = (statementId: number) => GetLedgerStatementFeesAction;
export type GetLedgerStatementRewards = (statementId: number) =>
  GetLedgerStatementRewardsAction;

export type HandleGetLedgerStatementAprsFeesRewards = (
  statementId: number,
  openModalName?: string
) => Thunk<void>;

export type HandleGenerateStatementTransactionsAprsFeesRewards = () => Thunk<void>;

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

export const getLedgerAccountStatementFees: GetLedgerStatementFees = statementId => ({
  type: ActionTypeKeys.GET_LEDGER_STATEMENT_FEES,
  payload: api.getLedgerAccountStatementFees(statementId),
});

export const getLedgerAccountStatementRewards: GetLedgerStatementRewards = statementId => ({
  type: ActionTypeKeys.GET_LEDGER_STATEMENT_REWARDS,
  payload: api.getLedgerAccountStatementRewards(statementId),
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
        cookiesUtil.remove(`${basePath}${uiItemConsts.LEDGER_STATEMENTS}`);
        dispatch(push(`${basePath}${uiItemConsts.LEDGER_STATEMENTS}`));
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

export const handleGetLedgerStatementAprsFeesRewards:
  HandleGetLedgerStatementAprsFeesRewards = (statementId, openModalName) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await Promise.all([
            dispatch(getLedgerAccountStatementAprs(statementId)),
            dispatch(getLedgerAccountStatementFees(statementId)),
            dispatch(getLedgerAccountStatementRewards(statementId)),
          ]);

          if (openModalName) {
            dispatch(openModal({ name: openModalName }));
          }
        },
        dispatch
      );
    };

export const handleGenerateStatementTransactionsAprsFeesRewards:
  HandleGenerateStatementTransactionsAprsFeesRewards = () =>
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
            dispatch(getLedgerAccountStatementFees(statementId)),
            dispatch(getLedgerAccountStatementRewards(statementId)),
          ]) as Array<any>;

          loadedData.forEach(item => data.push(item.value));

          const transactions = data.find(el => el.transactions).transactions;
          const aprs = data.find(el => el.statement_aprs).statement_aprs;
          const fees = data.find(el => el.statement_fees).statement_fees;
          const rewards = data.find(el => el.statement_rewards).statement_rewards;

          if (transactions.length) {
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
                {
                  id: 'fees',
                  title: 'Fees',
                  items: prepareStatementFeesForReport(fees),
                },
                {
                  id: 'rewards',
                  title: 'Rewards',
                  items: prepareStatementRewardsForReport(rewards),
                },
              ],
            });
          }
        },
        dispatch
      );
    };
