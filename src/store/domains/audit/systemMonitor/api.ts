import { systemMonitorPathNames } from 'consts';

import { apiClient } from 'services';

// import {
//   logData,
//   systemMonitorEndpoints,
//   systemMonitorInterfaces,
//   systemMonitorLastTransactions,
//   systemMonitorScheduler,
// } from './mock';
import { LogDataRequest } from './types';

// import { throttleUtil } from 'utils';

export const getSystemMonitorInterfaces = () =>
  // throttleUtil.getDataAfter(systemMonitorInterfaces, 500);
  apiClient.post(systemMonitorPathNames.GET_INTERFACES);

export const getSystemMonitorEndpoints = () =>
  // throttleUtil.getDataAfter(systemMonitorEndpoints, 500);
  apiClient.post(systemMonitorPathNames.GET_ENDPOINTS);

export const getSystemMonitorScheduler = () =>
  // throttleUtil.getDataAfter(systemMonitorScheduler, 500);
  apiClient.post(systemMonitorPathNames.GET_SCHEDULER_JOBS);

export const getSystemMonitorLastTransactions = () =>
  // throttleUtil.getDataAfter(systemMonitorLastTransactions, 500);
  apiClient.post(systemMonitorPathNames.GET_LAST_TRANSACTIONS);

export const getLogData = (data: LogDataRequest) => {
  console.log('---data', data);
  // return throttleUtil.getDataAfter(logData, 500);
  return apiClient.post(data.apiPathName, { data: data.id });
};
