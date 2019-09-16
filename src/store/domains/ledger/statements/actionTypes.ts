import { ApiResponse } from 'types';
import { LedgerStatementId, LedgerStatementItems } from './types';

export enum ActionTypeKeys {
  SET_LEDGER_STATEMENT_ID = 'ledger/statements/SET_LEDGER_STATEMENT_ID',

  FILTER_LEDGER_STATEMENTS = 'ledger/statements/FILTER_LEDGER_STATEMENTS',
  FILTER_LEDGER_STATEMENTS_FULFILLED = 'ledger/statements/FILTER_LEDGER_STATEMENTS_FULFILLED',
  FILTER_LEDGER_STATEMENTS_REJECTED = 'ledger/statements/FILTER_LEDGER_STATEMENTS_REJECTED',
}

export interface SetLedgerStatementIdAction {
  readonly payload: LedgerStatementId;
  readonly type: ActionTypeKeys.SET_LEDGER_STATEMENT_ID;
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

export type LedgerStatementsActionTypes =
  | FilterLedgerStatementsFulfilledAction
  | SetLedgerStatementIdAction;
