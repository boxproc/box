import { AuditUserActivitiesFilterPrepared } from './types';

import { apiClient } from 'services';

export const getAuditUsers = (institutionId: string | number) =>
  apiClient.post('/ui/audit/users_activity/get', {
    data: { institution_id: institutionId },
  });

export const filterAuditUserActivities = (data: Partial<AuditUserActivitiesFilterPrepared>) =>
  apiClient.post('/ui/audit/users_activity/get', { data });
