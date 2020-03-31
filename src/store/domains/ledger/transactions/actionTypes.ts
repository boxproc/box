import { IResponseStatus, TApiResponse } from 'types';
import { ITransactionsData } from './types';

export enum ActionTypeKeys {
  FILTER_TRANSACTIONS = 'transactions/FILTER_TRANSACTIONS',
  FILTER_TRANSACTIONS_FULFILLED = 'transactions/FILTER_TRANSACTIONS_FULFILLED',
  FILTER_TRANSACTIONS_REJECTED = 'transactions/FILTER_TRANSACTIONS_REJECTED',

  FILTER_TRANSACTIONS_BY_ID = 'transactions/FILTER_TRANSACTIONS_BY_ID',
  FILTER_TRANSACTIONS_BY_ID_FULFILLED = 'transactions/FILTER_TRANSACTIONS_BY_ID_FULFILLED',
  FILTER_TRANSACTIONS_BY_ID_REJECTED = 'transactions/FILTER_TRANSACTIONS_BY_ID_REJECTED',

  CONVERT_TRANSACTION_TO_LOAN = 'transactions/CONVERT_TRANSACTION_TO_LOAN',
  CONVERT_TRANSACTION_TO_LOAN_FULFILLED = 'transactions/CONVERT_TRANSACTION_TO_LOAN_FULFILLED',
  CONVERT_TRANSACTION_TO_LOAN_REJECTED = 'transactions/CONVERT_TRANSACTION_TO_LOAN_REJECTED',

  RESET_TRANSACTIONS = 'transactions/RESET_TRANSACTIONS',
}

/** Filter transactions action interfaces */

export interface IFilterTransactionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_TRANSACTIONS;
}

export interface IFilterTransactionsFulfilledAction {
  readonly payload: ITransactionsData;
  readonly type: ActionTypeKeys.FILTER_TRANSACTIONS_FULFILLED;
}

export interface IFilterTransactionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_TRANSACTIONS_REJECTED;
}

/** Reset transactions action interfaces */

export interface IResetTransactionsAction {
  readonly type: ActionTypeKeys.RESET_TRANSACTIONS;
}

/** Filter transactions by ID action interfaces */

export interface IFilterTransactionsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_TRANSACTIONS_BY_ID;
}

export interface IFilterTransactionsByIdFulfilledAction {
  readonly payload: ITransactionsData;
  readonly type: ActionTypeKeys.FILTER_TRANSACTIONS_BY_ID_FULFILLED;
}

export interface IFilterTransactionsByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_TRANSACTIONS_BY_ID_REJECTED;
}

/** Convert transaction to loan action interfaces */

export interface IConvertTrToLoanAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN;
}

export interface IConvertTrToLoanFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN_FULFILLED;
}

export interface IConvertTrToLoanRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN_REJECTED;
}

export type TTransactionsAction =
  | IFilterTransactionsFulfilledAction
  | IFilterTransactionsByIdFulfilledAction
  | IConvertTrToLoanFulfilledAction
  | IResetTransactionsAction;
