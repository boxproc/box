import { ApiResponse } from 'types';
import { LedgerTransactionItems } from './types';

export enum ActionTypeKeys {
  FILTER_LEDGER_TRANSACTIONS = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS',
  FILTER_LEDGER_TRANSACTIONS_FULFILLED = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_FULFILLED',
  FILTER_LEDGER_TRANSACTIONS_REJECTED = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_REJECTED',

  RESET_TRANSACTIONS = 'ledger/transactions/RESET_TRANSACTIONS',
}

export interface FilterLedgerTransactionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS;
}

export interface FilterLedgerTransactionsFulfilledAction {
  readonly payload: LedgerTransactionItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_FULFILLED;
}

export interface FilterLedgerTransactionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_REJECTED;
}

export interface ResetTransactionsAction {
  readonly type: ActionTypeKeys.RESET_TRANSACTIONS;
}

export type LedgerTransactionsActionTypes =
  | FilterLedgerTransactionsFulfilledAction
  | ResetTransactionsAction;
