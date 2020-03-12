import { AuditUserActivityFilterPrepared, UserId } from './types';

import { apiClient } from 'services';

export const getAuditUsers = (institutionId: string | number) =>
  apiClient.post('ui/audit/users_activity/get', {
    data: { institution_id: institutionId },
  });

export const filterAuditUserActivityById = (data: UserId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post('ui/audit/users_activity/get', { data });

export const filterAuditUserActivity = (data: Partial<AuditUserActivityFilterPrepared>) =>
  apiClient.post('ui/audit/users_activity/get', { data });
