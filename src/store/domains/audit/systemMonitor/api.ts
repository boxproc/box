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
  apiClient.post('ui/audit/system_monitor/get_interface_data');

export const getSystemMonitorEndpoints = () =>
  // throttleUtil.getDataAfter(systemMonitorEndpoints, 500);
  apiClient.post('ui/audit/system_monitor/get_endpoint_data');

export const getSystemMonitorScheduler = () =>
  // throttleUtil.getDataAfter(systemMonitorScheduler, 500);
  apiClient.post('ui/audit/system_monitor/get_scheduler_data');

export const getSystemMonitorLastTransactions = () =>
  // throttleUtil.getDataAfter(systemMonitorLastTransactions, 500);
  apiClient.post('ui/audit/system_monitor/get_transactions_data');

export const getLogData = (data: LogDataRequest) =>
  // return throttleUtil.getDataAfter(logData, 500);
  apiClient.post(data.apiPathName, { data: data.id });
