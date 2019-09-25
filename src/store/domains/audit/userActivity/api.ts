import { auditUserActivityPathNames } from 'consts';

import { AuditUserActivityFilterPrepared } from './types';

import { apiClient } from 'services';

export const getAuditUsers = (institutionId: string | number) =>
  apiClient.post(auditUserActivityPathNames.GET, {
    data: { institution_id: institutionId },
  });

export const filterAuditUserActivity = (data: Partial<AuditUserActivityFilterPrepared>) =>
  apiClient.post(auditUserActivityPathNames.GET, { data });
