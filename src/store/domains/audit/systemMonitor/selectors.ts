import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

import { schedulerStatusOptions, statusOptions } from 'consts';

export const selectDefaultSystemMonitorInterfaces = (state: StoreState) =>
  state.audit.systemMonitor.interfaces;

export const selectDefaultSystemMonitorEndpoints = (state: StoreState) =>
  state.audit.systemMonitor.endpoints;

export const selectDefaultSystemMonitorScheduler = (state: StoreState) =>
  state.audit.systemMonitor.scheduler;

export const selectDefaultSystemMonitorLastTransactions = (state: StoreState) =>
  state.audit.systemMonitor.lastTransactions;

export const selectActiveItemInfoForLogData = (state: StoreState) =>
  state.audit.systemMonitor.activeItemInfoForLogData;

export const selectSystemMonitorInterfaces = createSelector(
  selectDefaultSystemMonitorInterfaces,
  interfaces => {
    if (!interfaces) {
      return [];
    } else {
      return interfaces.interfaces_data.asMutable().map(item => {
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
      });
    }
  }
);

export const selectSystemMonitorInterfacesCounts = createSelector(
  selectDefaultSystemMonitorInterfaces,
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

export const selectSystemMonitorEndpoints = createSelector(
  selectDefaultSystemMonitorEndpoints,
  endpoints => {
    if (!endpoints) {
      return [];
    } else {
      return endpoints.endpoints_data.asMutable().map(item => {
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
      });
    }
  }
);

export const selectSystemMonitorEndpointsCounts = createSelector(
  selectDefaultSystemMonitorEndpoints,
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

export const selectSystemMonitorScheduler = createSelector(
  selectDefaultSystemMonitorScheduler,
  scheduler => {
    if (!scheduler) {
      return [];
    } else {
      return scheduler.scheduler_data.asMutable().map(item => {
        const status = schedulerStatusOptions.find(el => el.value === item.scheduler_status);

        return {
          institutionId: item.scheduler_institution_id,
          institutionName: item.scheduler_institution_name,
          name: item.scheduler_name,
          id: item.scheduler_id,
          status: status && status.label,
        };
      });
    }
  }
);

export const selectSystemMonitorSchedulerCounts = createSelector(
  selectDefaultSystemMonitorScheduler,
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

export const selectSystemMonitorLastTransactions = createSelector(
  selectDefaultSystemMonitorLastTransactions,
  transactions => {
    if (!transactions) {
      return [];
    } else {
      return transactions.asMutable().map(transaction => {
        return {
          institutionName: transaction && transaction.institution_name,
          institutionId: transaction && transaction.institution_id,
          transactionDatetime: transaction && transaction.transaction_datetime,
        };
      });
    }
  });
