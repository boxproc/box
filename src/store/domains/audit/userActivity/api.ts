import { auditPathNames } from 'consts';

import { AuditUserActivityFilterPrepared, UserId } from './types';

import { apiClient } from 'services';

export const getAuditUsers = (institutionId: string | number) =>
  apiClient.post(auditPathNames.GET_USER_ACTIVITY, {
    data: { institution_id: institutionId },
  });

export const filterAuditUserActivityById = (data: UserId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(auditPathNames.GET_USER_ACTIVITY, { data });

export const filterAuditUserActivity = (data: Partial<AuditUserActivityFilterPrepared>) =>
  apiClient.post(auditPathNames.GET_USER_ACTIVITY, { data });
