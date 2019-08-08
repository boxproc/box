import { ApiResponse } from 'types';
import { LedgerTransactionItems } from './types';

export enum ActionTypeKeys {
    GET_LEDGER_TRANSACTIONS = 'ledger/transactions/GET_LEDGER_TRANSACTIONS',
    GET_LEDGER_TRANSACTIONS_FULFILLED = 'ledger/transactions/GET_LEDGER_TRANSACTIONS_FULFILLED',
    GET_LEDGER_TRANSACTIONS_REJECTED = 'ledger/transactions/GET_LEDGER_TRANSACTIONS_REJECTED',
  }

export interface GetLedgerTransactionsAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.GET_LEDGER_TRANSACTIONS;
}

export interface GetLedgerTransactionsFulfilledAction {
    readonly payload: LedgerTransactionItems;
    readonly type: ActionTypeKeys.GET_LEDGER_TRANSACTIONS_FULFILLED;
}

export interface GetLedgerTransactionsRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.GET_LEDGER_TRANSACTIONS_REJECTED;
}

export type LedgerTransactionsActionTypes =
  | GetLedgerTransactionsFulfilledAction;
