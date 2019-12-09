import { ImmutableArray } from 'seamless-immutable';

import { SelectValues } from 'types';

export interface LedgerLimitAdjustmentRequest {
  transaction_type_id: number | string;
  account_id: number;
  balance_limit: number;
  balance_limit_shared: number;
  description: string;
  transaction_datetime: string | number;
}

export interface LedgerLimitAdjustmentFromData {
  transactionType: SelectValues;
  balanceLimit: number;
  accountId: string;
  balanceLimitShared: number;
  description: string;
  transactionDatetime: SelectValues;
}

export interface LedgerLimitAdjustmentResult {
  transaction_id: number;
  balance_limit: number;
  balance_limit_shared: number;
}

export interface LedgerLimitAdjustmentResultPrepared {
  transactionId: number;
  balanceLimit: number;
  balanceLimitShared: number;
}

export interface LedgerLimitAdjustmentResultResponse {
  transaction_result: Array<LedgerLimitAdjustmentResult>;
}

export interface LedgerLimitAdjustmentState {
  transactionResult: ImmutableArray<LedgerLimitAdjustmentResult>;
}
