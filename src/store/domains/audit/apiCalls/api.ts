import { apiClientService } from 'services';

import { IApiCallsFilterToSend } from './types';
// import { apiCallsMock } from './mock';
// import { throttleUtil } from 'utils';

/**
 * Filter API calls API
 */
export const filterApiCalls = (data: Partial<IApiCallsFilterToSend>) =>
  // throttleUtil.getDataAfter(apiCallsMock, 500);
  apiClientService.post('ui/audit/api_calls', { data });

/**
 * Get API call details API
 */
export const getDetailsApiCalls = (data: { id: number }) =>
  // throttleUtil.getDataAfter(apiCallsMock, 500);
  apiClientService.post('ui/audit/api_calls/get', { data });
