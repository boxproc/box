import { auditApiClassPathNames } from 'consts';

import { apiClient } from 'services';

import { AuditApiCallsFilterParamsPrepared } from './types';

// import { apiCallsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterAuditApiCalls = (data: Partial<AuditApiCallsFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(apiCallsItems, 500);
  apiClient.post(auditApiClassPathNames.GET, { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClient.post(auditApiClassPathNames.GET, {
    data: {
      institution_id: id,
    },
  });
