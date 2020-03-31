import { createSelector } from 'reselect';
import { IStoreState } from 'store';

import { schedulerStatusOptions, statusOptions } from 'consts';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';

export const defaultSysMonitorInterfacesSelector = (state: IStoreState) =>
  state.audit.systemMonitor.interfaces;

export const defaultSysMonitorEndpointsSelector = (state: IStoreState) =>
  state.audit.systemMonitor.endpoints;

export const defaultSysMonitorSchedulerSelector = (state: IStoreState) =>
  state.audit.systemMonitor.scheduler;

export const defaultSysMonitorLastTransactionsSelector = (state: IStoreState) =>
  state.audit.systemMonitor.lastTransactions;

export const activeSysMonitorItemLogDataSelector = (state: IStoreState) =>
  state.audit.systemMonitor.activeItemInfoForLogData;

export const sysMonitorInterfacesSelector = createSelector(
  defaultSysMonitorInterfacesSelector,
  interfaces => interfaces && interfaces.interfaces_data.map(item => {
    const status = statusOptions.find(el => el.value === item.interface_status);

    return {
      institutionId: item.interface_institution_id,
      institutionName: item.interface_institution_name,
      name: item.interface_name,
      id: item.interface_id,
      status: status && status.label,
      lastMessageDatetime: item.interface_last_message_datetime,
      lastFaultDatetime: item.interface_last_fault_datetime,
    };
  })
);

export const sysMonitorInterfacesCountsSelector = createSelector(
  defaultSysMonitorInterfacesSelector,
  interfaces => {
    if (!interfaces) {
      return null;
    }

    return {
      countActive: interfaces.total_active_interfaces || 0,
      countFaulty: interfaces.total_faulty_interfaces || 0,
    };
  }
);

export const sysMonitorEndpointsSelector = createSelector(
  defaultSysMonitorEndpointsSelector,
  endpoints => endpoints && endpoints.endpoints_data.map(item => {
    const status = statusOptions.find(el => el.value === item.endpoint_status);

    return {
      institutionId: item.endpoint_institution_id,
      institutionName: item.endpoint_institution_name,
      name: item.endpoint_name,
      id: item.endpoint_id,
      status: status && status.label,
      lastMessageDatetime: item.endpoint_last_message_datetime,
      lastFaultDatetime: item.endpoint_last_fault_datetime,
    };
  })
);

export const sysMonitorEndpointsCountsSelector = createSelector(
  defaultSysMonitorEndpointsSelector,
  endpoints => {
    if (!endpoints) {
      return null;
    }

    return {
      countActive: endpoints.total_active_endpoints || 0,
      countFaulty: endpoints.total_faulty_endpoints || 0,
    };
  }
);

export const sysMonitorSchedulerSelector = createSelector(
  defaultSysMonitorSchedulerSelector,
  scheduler => scheduler && scheduler.scheduler_data.map(item => {
    const status = schedulerStatusOptions.find(el => el.value === item.scheduler_status);

    return {
      institutionId: item.scheduler_institution_id,
      institutionName: item.scheduler_institution_name,
      name: item.scheduler_name,
      id: item.scheduler_id,
      status: status && status.label,
    };
  })
);

export const sysMonitorSchedulerCountsSelector = createSelector(
  defaultSysMonitorSchedulerSelector,
  scheduler => {
    if (!scheduler) {
      return null;
    }

    return {
      countActive: scheduler.total_active_scheduler_jobs || 0,
      countFaulty: scheduler.total_faulty_scheduler_jobs || 0,
    };
  }
);

export const sysMonitorLastTransactionsSelector = createSelector(
  defaultSysMonitorLastTransactionsSelector,
  transactions => transactions && transactions.map(transaction => {
    return {
      institutionName: transaction && transaction.institution_name,
      institutionId: transaction && transaction.institution_id,
      transactionDatetime: transaction && transaction.transaction_datetime,
    };
  })
);

/**
 * System monitor loading selectors
 */

export const isSysMonitorInterfacesLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_SYS_MONITOR_INTERFACES,
]);

export const isSysMonitorEndpointsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_SYS_MONITOR_ENDPOINTS,
]);

export const isSysMonitorSchedulerLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_SYS_MONITOR_SCHEDULER,
]);

export const isSysMonitorLastTransactionsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_SYS_MONITOR_LAST_TRANSACTIONS,
]);

export const isSysMonitorLoadingLogDataSelector = createLoadingSelector([
  ActionTypeKeys.GET_LOG_DATA,
]);
