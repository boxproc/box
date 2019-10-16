import { systemMonitorPathNames } from 'consts';

import { apiClient } from 'services';

// import {
//   systemMonitorEndpoints,
//   systemMonitorInterfaces,
//   systemMonitorLastTransaction,
//   systemMonitorScheduler,
// } from './mock';

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

export const getSystemMonitorLastTransaction = () =>
  // throttleUtil.getDataAfter(systemMonitorLastTransaction, 500);
  apiClient.post(systemMonitorPathNames.GET_LAST_TRANSACTION);
