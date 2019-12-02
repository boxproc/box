import { push } from 'connected-react-router';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemConsts } from 'consts';

import { openModal } from 'store/domains/modals';
import { setIsOpenFilter } from 'store/domains/utils';
import { Thunk } from 'types';
import { cookiesUtil, errorDecoratorUtil } from 'utils';
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
import { selectLedgerCurrentStatementTransaction } from './selectors';
import { LedgerStatementsFilterPrepared, LedgerStatementTransactionsItemsRequest } from './types';
import { preparedFilterToSend } from './utils';

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
export type HandleGetLedgerStatementAprsFeesRewards = (statementId: number) => Thunk<void>;

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
        await dispatch(filterLedgerStatementsById(id));
        cookiesUtil.remove(`${basePath}${uiItemConsts.LEDGER_STATEMENTS}`);
        dispatch(push(`${basePath}${uiItemConsts.LEDGER_STATEMENTS}`));
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
  HandleGetLedgerStatementAprsFeesRewards = (statementId) =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          await Promise.all([
            dispatch(getLedgerAccountStatementAprs(statementId)),
            dispatch(getLedgerAccountStatementFees(statementId)),
            dispatch(getLedgerAccountStatementRewards(statementId)),
          ]);

          dispatch(openModal({ name: modalNamesConst.STATEMENT_APRS_FEES_REWARDS }));
        },
        dispatch
      );
    };
