import { apiClientService } from 'services';

import { LedgerLimitAdjustmentRequest } from './types';

export const makeLedgerLimitAdjustment = (data: Partial<LedgerLimitAdjustmentRequest>) =>
  apiClientService.post('ui/ledger/accounts/limit_adjustment', { data });
