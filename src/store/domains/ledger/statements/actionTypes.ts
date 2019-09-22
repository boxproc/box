import { ApiResponse } from 'types';
import { LedgerStatementItems } from './types';

export enum ActionTypeKeys {
  FILTER_LEDGER_STATEMENTS = 'ledger/statements/FILTER_LEDGER_STATEMENTS',
  FILTER_LEDGER_STATEMENTS_FULFILLED = 'ledger/statements/FILTER_LEDGER_STATEMENTS_FULFILLED',
  FILTER_LEDGER_STATEMENTS_REJECTED = 'ledger/statements/FILTER_LEDGER_STATEMENTS_REJECTED',
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
  | FilterLedgerStatementsFulfilledAction;
