import { auditUserActivitiesPathNames } from 'consts';

import { AuditUserActivitiesFilterPrepared } from './types';

import { apiClient } from 'services';

export const getAuditUsers = (institutionId: string | number) =>
  apiClient.post(auditUserActivitiesPathNames.GET, {
    data: { institution_id: institutionId },
  });

export const filterAuditUserActivities = (data: Partial<AuditUserActivitiesFilterPrepared>) =>
  apiClient.post(auditUserActivitiesPathNames.GET, { data });
