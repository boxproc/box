import { auditPathNames } from 'consts';

import { apiClient } from 'services';

import { AuditApiCallsFilterPrepared } from './types';

// import { apiCallsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterAuditApiCalls = (data: Partial<AuditApiCallsFilterPrepared>) =>
  // throttleUtil.getDataAfter(apiCallsItems, 500);
  apiClient.post(auditPathNames.GET_API_CALLS, { data });

export const getDetailsAuditApiCalls = (data: { id: number }) =>
  // throttleUtil.getDataAfter(apiCallsItems, 500);
  apiClient.post(auditPathNames.GET_API_CALLS_DETAILS, { data });
