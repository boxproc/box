import {
  IResponseStatus,
  TApiResponse,
} from 'types';
import {
  IDirectDebitPaymentHistoryData,
  ISettleTransactionDataReq,
  ISettleTransactionResp,
  ITransactionsData,
} from './types';

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

  /** Settle transaction action types keys */

  RETRIEVE_TRANSACTION = 'settleTransaction/RETRIEVE_TRANSACTION',
  RETRIEVE_TRANSACTION_FULFILLED = 'settleTransaction/RETRIEVE_TRANSACTION_FULFILLED',
  RETRIEVE_TRANSACTION_REJECTED = 'settleTransaction/RETRIEVE_TRANSACTION_REJECTED',

  SETTLE_TRANSACTION = 'settleTransaction/SETTLE_TRANSACTION',
  SETTLE_TRANSACTION_FULFILLED = 'settleTransaction/SETTLE_TRANSACTION_FULFILLED',
  SETTLE_TRANSACTION_REJECTED = 'settleTransaction/SETTLE_TRANSACTION_REJECTED',

  RESET_RETRIEVED_TRANSACTION = 'settleTransaction/RESET_RETRIEVED_TRANSACTION',

  /** Direct debit payment action types keys */
  GET_DIRECT_DEBIT_PAYMENT = 'transactions/GET_DIRECT_DEBIT_PAYMENT',
  GET_DIRECT_DEBIT_PAYMENT_FULFILLED = 'transactions/GET_DIRECT_DEBIT_PAYMENT_FULFILLED',
  GET_DIRECT_DEBIT_PAYMENT_REJECTED = 'transactions/GET_DIRECT_DEBIT_PAYMENT_REJECTED',
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

/** Retrieve transaction action interfaces */

export interface IRetrieveTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.RETRIEVE_TRANSACTION;
}

export interface IRetrieveTransactionFulfilledAction {
  readonly payload: ISettleTransactionDataReq;
  readonly type: ActionTypeKeys.RETRIEVE_TRANSACTION_FULFILLED;
}

export interface IRetrieveTransactionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.RETRIEVE_TRANSACTION_REJECTED;
}

/** Settle transaction action interfaces */

export interface ISettleTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.SETTLE_TRANSACTION;
}

export interface ISettleTransactionFulfilledAction {
  readonly payload: ISettleTransactionResp;
  readonly type: ActionTypeKeys.SETTLE_TRANSACTION_FULFILLED;
}

export interface ISettleTransactionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.SETTLE_TRANSACTION_REJECTED;
}

/** Reset retrieved transaction action interfaces */

export interface IResetRetrievedTransactionAction {
  readonly type: ActionTypeKeys.RESET_RETRIEVED_TRANSACTION;
}

/** Get direct debit payment action interfaces */

export interface IGetDirectDebitPaymentAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_PAYMENT;
}

export interface IGetDirectDebitPaymentFulfilledAction {
  readonly payload: IDirectDebitPaymentHistoryData;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_PAYMENT_FULFILLED;
}

export interface IGetDirectDebitPaymentRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_PAYMENT_REJECTED;
}

export type TTransactionsAction =
  | IFilterTransactionsFulfilledAction
  | IFilterTransactionsByIdFulfilledAction
  | IConvertTrToLoanFulfilledAction
  | IResetTransactionsAction
  | IRetrieveTransactionFulfilledAction
  | ISettleTransactionFulfilledAction
  | IGetDirectDebitPaymentFulfilledAction
  | IResetRetrievedTransactionAction;
