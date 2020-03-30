import { IManualTransactionResultResponse } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  MAKE_TRANSACTION = 'manualTransaction/MAKE_TRANSACTION',
  MAKE_TRANSACTION_FULFILLED = 'manualTransaction/MAKE_TRANSACTION_FULFILLED',
  MAKE_TRANSACTION_REJECTED = 'manualTransaction/MAKE_TRANSACTION_REJECTED',
}

/**
 * Make manual transaction action interfaces
 */

export interface IMakeTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.MAKE_TRANSACTION;
}

export interface IMakeTransactionFulfilledAction {
  readonly payload: IManualTransactionResultResponse;
  readonly type: ActionTypeKeys.MAKE_TRANSACTION_FULFILLED;
}

export interface IMakeTransactionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.MAKE_TRANSACTION_REJECTED;
}

export type TManualTransactionActionTypes =
  | IMakeTransactionFulfilledAction;
