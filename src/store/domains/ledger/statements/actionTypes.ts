import { ApiResponse } from 'types';
import {
  LedgerAccountStatementItems,
  LedgerStatementAprItems,
  LedgerStatementFeeItems,
  LedgerStatementItems,
  LedgerStatementRewardItems,
  LedgerStatementTransactionsItems,
} from './types';

export enum ActionTypeKeys {
  FILTER_LEDGER_STATEMENTS = 'ledger/statements/FILTER_LEDGER_STATEMENTS',
  FILTER_LEDGER_STATEMENTS_FULFILLED = 'ledger/statements/FILTER_LEDGER_STATEMENTS_FULFILLED',
  FILTER_LEDGER_STATEMENTS_REJECTED = 'ledger/statements/FILTER_LEDGER_STATEMENTS_REJECTED',

  GET_LEDGER_STATEMENT_TRANSACTIONS = 'ledger/statements/GET_LEDGER_STATEMENT_TRANSACTIONS',
  GET_LEDGER_STATEMENT_TRANSACTIONS_FULFILLED =
  'ledger/statements/GET_LEDGER_STATEMENT_TRANSACTIONS_FULFILLED',
  GET_LEDGER_STATEMENT_TRANSACTIONS_REJECTED =
  'ledger/statements/GET_LEDGER_STATEMENT_TRANSACTIONS_REJECTED',

  FILTER_LEDGER_STATEMENTS_BY_ID = 'ledger/statements/FILTER_LEDGER_STATEMENTS_BY_ID',
  FILTER_LEDGER_STATEMENTS_BY_ID_FULFILLED =
  'ledger/statements/FILTER_LEDGER_STATEMENTS_BY_ID_FULFILLED',
  FILTER_LEDGER_STATEMENTS_BY_ID_REJECTED =
  'ledger/statements/FILTER_LEDGER_STATEMENTS_BY_ID_REJECTED',

  GET_LEDGER_ACCOUNT_STATEMENTS = 'ledger/statements/GET_LEDGER_ACCOUNT_STATEMENTS',
  GET_LEDGER_ACCOUNT_STATEMENTS_FULFILLED =
  'ledger/statements/GET_LEDGER_ACCOUNT_STATEMENTS_FULFILLED',
  GET_LEDGER_ACCOUNT_STATEMENTS_REJECTED =
  'ledger/statements/GET_LEDGER_ACCOUNT_STATEMENTS_REJECTED',

  GET_LEDGER_STATEMENT_APRS = 'ledger/statements/GET_LEDGER_STATEMENT_APRS',
  GET_LEDGER_STATEMENT_APRS_FULFILLED = 'ledger/statements/GET_LEDGER_STATEMENT_APRS_FULFILLED',
  GET_LEDGER_STATEMENT_APRS_REJECTED = 'ledger/statements/GET_LEDGER_STATEMENT_APRS_REJECTED',

  GET_LEDGER_STATEMENT_FEES = 'ledger/statements/GET_LEDGER_STATEMENT_FEES',
  GET_LEDGER_STATEMENT_FEES_FULFILLED = 'ledger/statements/GET_LEDGER_STATEMENT_FEES_FULFILLED',
  GET_LEDGER_STATEMENT_FEES_REJECTED = 'ledger/statements/GET_LEDGER_STATEMENT_FEES_REJECTED',

  GET_LEDGER_STATEMENT_REWARDS = 'ledger/statements/GET_LEDGER_STATEMENT_REWARDS',
  GET_LEDGER_STATEMENT_REWARDS_FULFILLED =
  'ledger/statements/GET_LEDGER_STATEMENT_REWARDS_FULFILLED',
  GET_LEDGER_STATEMENT_REWARDS_REJECTED = 'ledger/statements/GET_LEDGER_STATEMENT_REWARDS_REJECTED',

  RESET_STATEMENTS = 'ledger/statements/RESET_STATEMENTS',
}

export interface FilterLedgerStatementsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS;
}

export interface FilterLedgerStatementsFulfilledAction {
  readonly payload: LedgerStatementItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS_FULFILLED;
}

export interface FilterLedgerStatementsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS_REJECTED;
}
export interface GetLedgerStatementTransactionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_TRANSACTIONS;
}

export interface GetLedgerStatementTransactionsFulfilledAction {
  readonly payload: LedgerStatementTransactionsItems;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_TRANSACTIONS_FULFILLED;
}

export interface GetLedgerStatementTransactionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_TRANSACTIONS_REJECTED;
}
export interface FilterLedgerStatementsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS_BY_ID;
}

export interface FilterLedgerStatementsByIdFulfilledAction {
  readonly payload: LedgerStatementItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS_BY_ID_FULFILLED;
}

export interface FilterLedgerStatementsByIdRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS_BY_ID_REJECTED;
}

export interface GetLedgerAccountStatementsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_STATEMENTS;
}

export interface GetLedgerAccountStatementsFulfilledAction {
  readonly payload: LedgerAccountStatementItems;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_STATEMENTS_FULFILLED;
}

export interface GetLedgerAccountStatementsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_STATEMENTS_REJECTED;
}

export interface GetLedgerStatementAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_APRS;
}

export interface GetLedgerStatementAprsFulfilledAction {
  readonly payload: LedgerStatementAprItems;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_APRS_FULFILLED;
}

export interface GetLedgerStatementAprsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_APRS_REJECTED;
}

export interface GetLedgerStatementFeesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_FEES;
}

export interface GetLedgerStatementFeesFulfilledAction {
  readonly payload: LedgerStatementFeeItems;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_FEES_FULFILLED;
}

export interface GetLedgerStatementFeesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_FEES_REJECTED;
}

export interface GetLedgerStatementRewardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_REWARDS;
}

export interface GetLedgerStatementRewardsFulfilledAction {
  readonly payload: LedgerStatementRewardItems;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_REWARDS_FULFILLED;
}

export interface GetLedgerStatementRewardsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_STATEMENT_REWARDS_REJECTED;
}

export interface ResetStatementsAction {
  readonly type: ActionTypeKeys.RESET_STATEMENTS;
}

export type LedgerStatementsActionTypes =
  | FilterLedgerStatementsFulfilledAction
  | GetLedgerStatementTransactionsFulfilledAction
  | FilterLedgerStatementsByIdFulfilledAction
  | GetLedgerAccountStatementsFulfilledAction
  | GetLedgerStatementTransactionsAction
  | GetLedgerStatementAprsFulfilledAction
  | GetLedgerStatementFeesFulfilledAction
  | GetLedgerStatementRewardsFulfilledAction
  | ResetStatementsAction;
