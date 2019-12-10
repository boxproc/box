import { lenderManualTransactionPathNames } from 'consts';

import { apiClient } from 'services';

import { LedgerLimitAdjustmentRequest } from './types';

export const makeLedgerLimitAdjustment = (data: Partial<LedgerLimitAdjustmentRequest>) =>
  apiClient.post(lenderManualTransactionPathNames.LIMIT_ADJUSTMENT, { data });
