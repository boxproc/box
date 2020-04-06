import { apiClientService } from 'services';

// import {
//   logData,
//   systemMonitorEndpoints,
//   systemMonitorInterfaces,
//   systemMonitorLastTransactions,
//   systemMonitorScheduler,
// } from './mock';
import { ISysMonitorLogDataReq } from './types';

// import { throttleUtil } from 'utils';

/**
 * Get system monitor interfaces API
 */
export const getSysMonitorInterfaces = () =>
  // throttleUtil.getDataAfter(systemMonitorInterfaces, 500);
  apiClientService.post('ui/audit/system_monitor/get_interface_data');

/**
 * Get system monitor endpoints API
 */
export const getSysMonitorEndpoints = () =>
  // throttleUtil.getDataAfter(systemMonitorEndpoints, 500);
  apiClientService.post('ui/audit/system_monitor/get_endpoint_data');

/**
 * Get system monitor scheduler API
 */
export const getSysMonitorScheduler = () =>
  // throttleUtil.getDataAfter(systemMonitorScheduler, 500);
  apiClientService.post('ui/audit/system_monitor/get_scheduler_data');

/**
 * Get system monitor last transactions API
 */
export const getSysMonitorLastTransactions = () =>
  // throttleUtil.getDataAfter(systemMonitorLastTransactions, 500);
  apiClientService.post('ui/audit/system_monitor/get_transactions_data');

/**
 * Get system monitor logs API
 */
export const getLogData = (data: ISysMonitorLogDataReq) =>
  // return throttleUtil.getDataAfter(logData, 500);
  apiClientService.post(data.apiPathName, { data: data.id });
