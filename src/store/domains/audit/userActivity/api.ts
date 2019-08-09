import { apiClient } from 'services';
import { AuditUserActivitiesFilterPrepared } from './types';

export const getAuditUsers = (institutionId: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/audit/users_activity/get', {
    data: {institution_id: institutionId },
  });

export const filterAuditUserActivities = (data: Partial<AuditUserActivitiesFilterPrepared>) =>
  // throttleUtil.getDataAfter(LedgerAccountsFilteredItems, 500);
  apiClient.post('/ui/audit/users_activity/get', { data });
