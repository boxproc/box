import { apiUrls } from 'consts';
import { apiClient } from 'services';

import { LedgerLimitAdjustmentRequest } from './types';

export const makeLedgerLimitAdjustment = (data: Partial<LedgerLimitAdjustmentRequest>) =>
  apiClient.post(apiUrls.manualTransaction.LIMIT_ADJUSTMENT, { data });
