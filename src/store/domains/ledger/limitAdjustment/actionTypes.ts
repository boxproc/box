import { LedgerLimitAdjustmentResultResponse } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  MAKE_LEDGER_LIMIT_ADJUSTMENT_TRANSACTION = 'ledger/limitAdjustment/MAKE_LEDGER_TRANSACTION',
  MAKE_LEDGER_LIMIT_ADJUSTMENT_TRANSACTION_FULFILLED =
  'ledger/limitAdjustment/MAKE_LEDGER_TRANSACTION_FULFILLED',
  MAKE_LEDGER_LIMIT_ADJUSTMENT_TRANSACTION_REJECTED =
  'ledger/limitAdjustment/MAKE_LEDGER_TRANSACTION_REJECTED',
}

export interface MakeLedgerLimitAdjustmentTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.MAKE_LEDGER_LIMIT_ADJUSTMENT_TRANSACTION;
}

export interface MakeLedgerLimitAdjustmentTransactionFulfilledAction {
  readonly payload: LedgerLimitAdjustmentResultResponse;
  readonly type: ActionTypeKeys.MAKE_LEDGER_LIMIT_ADJUSTMENT_TRANSACTION_FULFILLED;
}

export interface MakeLedgerLimitAdjustmentTransactionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.MAKE_LEDGER_LIMIT_ADJUSTMENT_TRANSACTION_REJECTED;
}

export type LedgerLimitAdjustmentTransactionActionTypes =
  | MakeLedgerLimitAdjustmentTransactionFulfilledAction;
