import { ApiResponse } from 'types';
import { LedgerStatementItems, LedgerStatementTransactionsItems } from './types';

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

export interface ResetStatementsAction {
  readonly type: ActionTypeKeys.RESET_STATEMENTS;
}

export type LedgerStatementsActionTypes =
  | FilterLedgerStatementsFulfilledAction
  | GetLedgerStatementTransactionsFulfilledAction
  | FilterLedgerStatementsByIdFulfilledAction
  | ResetStatementsAction;
