import { ILimitAdjustmentResultResponse } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  LIMIT_ADJUSTMENT = 'limitAdjustment/LIMIT_ADJUSTMENT',
  LIMIT_ADJUSTMENT_FULFILLED = 'limitAdjustment/LIMIT_ADJUSTMENT_FULFILLED',
  LIMIT_ADJUSTMENT_REJECTED = 'limitAdjustment/LIMIT_ADJUSTMENT_REJECTED',
}

/** Limit adjustment action interfaces */

export interface IMakeLimitAdjustmentAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.LIMIT_ADJUSTMENT;
}

export interface IMakeLimitAdjustmentFulfilledAction {
  readonly payload: ILimitAdjustmentResultResponse;
  readonly type: ActionTypeKeys.LIMIT_ADJUSTMENT_FULFILLED;
}

export interface IMakeLimitAdjustmentRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.LIMIT_ADJUSTMENT_REJECTED;
}

export type TLimitAdjustmentAction =
  | IMakeLimitAdjustmentFulfilledAction;
