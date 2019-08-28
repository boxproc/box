import { ApiResponse } from 'types';
import { LedgerTransactionItems } from './types';

export enum ActionTypeKeys {
  SET_LEDGER_TRANSACTION_ID = 'ledger/transactions/SET_LEDGER_TRANSACTION_ID',

  FILTER_LEDGER_TRANSACTIONS = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS',
  FILTER_LEDGER_TRANSACTIONS_FULFILLED = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_FULFILLED',
  FILTER_LEDGER_TRANSACTIONS_REJECTED = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_REJECTED',
}

export interface SetLedgerTransactionIdAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_LEDGER_TRANSACTION_ID;
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

export type LedgerTransactionsActionTypes =
  | FilterLedgerTransactionsFulfilledAction
  | SetLedgerTransactionIdAction;
