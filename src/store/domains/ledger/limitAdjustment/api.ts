import { apiClient } from 'services';

import { LedgerLimitAdjustmentRequest } from './types';

export const makeLedgerLimitAdjustment = (data: Partial<LedgerLimitAdjustmentRequest>) =>
  apiClient.post('ui/ledger/accounts/limit_adjustment', { data });
