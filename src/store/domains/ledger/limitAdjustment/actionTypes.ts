import { LedgerLimitAdjustmentResultResponse } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  LEDGER_LIMIT_ADJUSTMENT = 'ledger/limitAdjustment/LEDGER_LIMIT_ADJUSTMENT',
  LEDGER_LIMIT_ADJUSTMENT_FULFILLED = 'ledger/limitAdjustment/LEDGER_LIMIT_ADJUSTMENT_FULFILLED',
  LEDGER_LIMIT_ADJUSTMENT_REJECTED = 'ledger/limitAdjustment/LEDGER_LIMIT_ADJUSTMENT_REJECTED',
}

export interface MakeLedgerLimitAdjustmentAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.LEDGER_LIMIT_ADJUSTMENT;
}

export interface MakeLedgerLimitAdjustmentFulfilledAction {
  readonly payload: LedgerLimitAdjustmentResultResponse;
  readonly type: ActionTypeKeys.LEDGER_LIMIT_ADJUSTMENT_FULFILLED;
}

export interface MakeLedgerLimitAdjustmentRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.LEDGER_LIMIT_ADJUSTMENT_REJECTED;
}

export type LedgerLimitAdjustmentActionTypes =
  | MakeLedgerLimitAdjustmentFulfilledAction;
