import { lenderManualTransactionURLs } from 'consts';

import { apiClient } from 'services';

import { LedgerLimitAdjustmentRequest } from './types';

export const makeLedgerLimitAdjustment = (data: Partial<LedgerLimitAdjustmentRequest>) =>
  apiClient.post(lenderManualTransactionURLs.LIMIT_ADJUSTMENT, { data });
