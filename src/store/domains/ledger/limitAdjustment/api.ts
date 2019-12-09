import { lenderManualTransactionPathNames } from 'consts';

import { apiClient } from 'services';

import { LedgerLimitAdjustmentRequest } from './types';

export const makeLedgerLimitAdjustmentTransaction = (data: Partial<LedgerLimitAdjustmentRequest>) =>
  apiClient.post(lenderManualTransactionPathNames.MAKE_LIMIT_ADJUSTMENT_TRANSACTION, { data });
