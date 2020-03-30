import { apiClientService } from 'services';

import { ILimitAdjReq } from './types';

/**
 * Limit adjustment API
 */
export const makeLimitAdjustment = (data: Partial<ILimitAdjReq>) =>
  apiClientService.post('ui/ledger/accounts/limit_adjustment', { data });
