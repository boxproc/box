import { ISettleTransactionData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  RETRIEVE_TRANSACTION = 'settleTransaction/RETRIEVE_TRANSACTION',
  RETRIEVE_TRANSACTION_FULFILLED = 'settleTransaction/RETRIEVE_TRANSACTION_FULFILLED',
  RETRIEVE_TRANSACTION_REJECTED = 'settleTransaction/RETRIEVE_TRANSACTION_REJECTED',

  SETTLE_TRANSACTION = 'settleTransaction/SETTLE_TRANSACTION',
  SETTLE_TRANSACTION_FULFILLED = 'settleTransaction/SETTLE_TRANSACTION_FULFILLED',
  SETTLE_TRANSACTION_REJECTED = 'settleTransaction/SETTLE_TRANSACTION_REJECTED',

  RESET_RETRIEVED_TRANSACTION = 'settleTransaction/RESET_RETRIEVED_TRANSACTION',
}

/** Retrieve transaction action interfaces */

export interface IRetrieveTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.RETRIEVE_TRANSACTION;
}

export interface IRetrieveTransactionFulfilledAction {
  readonly payload: ISettleTransactionData;
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
  readonly payload: IResponseStatus;
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

export type TSettleTransactionAction =
  | IRetrieveTransactionFulfilledAction
  | ISettleTransactionFulfilledAction
  | IResetRetrievedTransactionAction;
