import { apiClientService } from 'services';

import { AuditApiCallsFilterPrepared } from './types';

// import { apiCallsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterAuditApiCalls = (data: Partial<AuditApiCallsFilterPrepared>) =>
  // throttleUtil.getDataAfter(apiCallsItems, 500);
  apiClientService.post('ui/audit/api_calls/get', { data });

export const getDetailsAuditApiCalls = (data: { id: number }) =>
  // throttleUtil.getDataAfter(apiCallsItems, 500);
  apiClientService.post('ui/audit/api_calls/get_whole_description', { data });
