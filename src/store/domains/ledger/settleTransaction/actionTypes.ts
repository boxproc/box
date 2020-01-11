import { SettleTransactionData } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  RETRIEVE_TRANSACTION = 'ledger/settleTransaction/RETRIEVE_TRANSACTION',
  RETRIEVE_TRANSACTION_FULFILLED =
  'ledger/settleTransaction/RETRIEVE_TRANSACTION_FULFILLED',
  RETRIEVE_TRANSACTION_REJECTED =
  'ledger/settleTransaction/RETRIEVE_TRANSACTION_REJECTED',

  SETTLE_TRANSACTION = 'ledger/settleTransaction/SETTLE_TRANSACTION',
  SETTLE_TRANSACTION_FULFILLED =
  'ledger/settleTransaction/SETTLE_TRANSACTION_FULFILLED',
  SETTLE_TRANSACTION_REJECTED =
  'ledger/settleTransaction/SETTLE_TRANSACTION_REJECTED',

  RESET_RETRIEVED_TRANSACTION = 'administration/settleTransaction/RESET_RETRIEVED_TRANSACTION',
}

export interface RetrieveTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.RETRIEVE_TRANSACTION;
}

export interface RetrieveTransactionFulfilledAction {
  readonly payload: SettleTransactionData;
  readonly type: ActionTypeKeys.RETRIEVE_TRANSACTION_FULFILLED;
}

export interface RetrieveTransactionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.RETRIEVE_TRANSACTION_REJECTED;
}

export interface SettleTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.SETTLE_TRANSACTION;
}

export interface SettleTransactionFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.SETTLE_TRANSACTION_FULFILLED;
}

export interface SettleTransactionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.SETTLE_TRANSACTION_REJECTED;
}

export interface ResetRetrievedTransactionAction {
  readonly type: ActionTypeKeys.RESET_RETRIEVED_TRANSACTION;
}

export type LedgerSettleTransactionActionTypes =
  | RetrieveTransactionFulfilledAction
  | SettleTransactionFulfilledAction
  | ResetRetrievedTransactionAction;
