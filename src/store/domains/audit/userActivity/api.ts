import { AuditUserActivityFilterPrepared, UserId } from './types';

import { apiClientService } from 'services';

export const getAuditUsers = (institutionId: string | number) =>
  apiClientService.post('ui/audit/users_activity/get', {
    data: { institution_id: institutionId },
  });

export const filterAuditUserActivityById = (data: UserId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClientService.post('ui/audit/users_activity/get', { data });

export const filterAuditUserActivity = (data: Partial<AuditUserActivityFilterPrepared>) =>
  apiClientService.post('ui/audit/users_activity/get', { data });
