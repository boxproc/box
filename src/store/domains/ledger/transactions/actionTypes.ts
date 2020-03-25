import { IResponseStatus, TApiResponse } from 'types';
import { LedgerTransactionItems } from './types';

export enum ActionTypeKeys {
  FILTER_LEDGER_TRANSACTIONS = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS',
  FILTER_LEDGER_TRANSACTIONS_FULFILLED = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_FULFILLED',
  FILTER_LEDGER_TRANSACTIONS_REJECTED = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_REJECTED',

  FILTER_LEDGER_TRANSACTIONS_BY_ID = 'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_BY_ID',
  FILTER_LEDGER_TRANSACTIONS_BY_ID_FULFILLED =
  'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_BY_ID_FULFILLED',
  FILTER_LEDGER_TRANSACTIONS_BY_ID_REJECTED =
  'ledger/transactions/FILTER_LEDGER_TRANSACTIONS_BY_ID_REJECTED',

  CONVERT_TRANSACTION_TO_LOAN = 'ledger/transactions/CONVERT_TRANSACTION_TO_LOAN',
  CONVERT_TRANSACTION_TO_LOAN_FULFILLED =
  'ledger/transactions/CONVERT_TRANSACTION_TO_LOAN_FULFILLED',
  CONVERT_TRANSACTION_TO_LOAN_REJECTED =
  'ledger/transactions/CONVERT_TRANSACTION_TO_LOAN_REJECTED',

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
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_REJECTED;
}

export interface ResetTransactionsAction {
  readonly type: ActionTypeKeys.RESET_TRANSACTIONS;
}

export interface FilterLedgerTransactionsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_BY_ID;
}

export interface FilterLedgerTransactionsByIdFulfilledAction {
  readonly payload: LedgerTransactionItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_BY_ID_FULFILLED;
}

export interface FilterLedgerTransactionsByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_BY_ID_REJECTED;
}

export interface ConvertTransactionToLoanAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN;
}

export interface ConvertTransactionToLoanFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN_FULFILLED;
}

export interface ConvertTransactionToLoanRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN_REJECTED;
}

export type LedgerTransactionsActionTypes =
  | FilterLedgerTransactionsFulfilledAction
  | FilterLedgerTransactionsByIdFulfilledAction
  | ConvertTransactionToLoanFulfilledAction
  | ResetTransactionsAction;
