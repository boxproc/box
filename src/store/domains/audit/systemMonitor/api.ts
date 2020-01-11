import { systemMonitorURLs } from 'consts';

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
  apiClient.post(systemMonitorURLs.GET_INTERFACES);

export const getSystemMonitorEndpoints = () =>
  // throttleUtil.getDataAfter(systemMonitorEndpoints, 500);
  apiClient.post(systemMonitorURLs.GET_ENDPOINTS);

export const getSystemMonitorScheduler = () =>
  // throttleUtil.getDataAfter(systemMonitorScheduler, 500);
  apiClient.post(systemMonitorURLs.GET_SCHEDULER_JOBS);

export const getSystemMonitorLastTransactions = () =>
  // throttleUtil.getDataAfter(systemMonitorLastTransactions, 500);
  apiClient.post(systemMonitorURLs.GET_LAST_TRANSACTIONS);

export const getLogData = (data: LogDataRequest) =>
  // return throttleUtil.getDataAfter(logData, 500);
  apiClient.post(data.apiPathName, { data: data.id });
