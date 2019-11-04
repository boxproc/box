import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, SystemMonitorActionTypes } from './actionTypes';
import { SystemMonitorState } from './types';

export const systemMonitorInitialState:
  seamlessImmutable.ImmutableObject<SystemMonitorState> = Immutable({
    interfaces: null,
    endpoints: null,
    scheduler: null,
    lastTransactions: null,
  });

const auditSystemMonitorReducer = (
  state = systemMonitorInitialState,
  action: SystemMonitorActionTypes
) => {
  switch (action.type) {
    case ActionTypeKeys.GET_SYSTEM_MONITOR_INTERFACES_FULFILLED:
      return state.set('interfaces', action.payload.system_monitor_interfaces);

    case ActionTypeKeys.GET_SYSTEM_MONITOR_ENDPOINTS_FULFILLED:
      return state.set('endpoints', action.payload.system_monitor_endpoints);

    case ActionTypeKeys.GET_SYSTEM_MONITOR_SCHEDULER_FULFILLED:
      return state.set('scheduler', action.payload.system_monitor_scheduler_jobs);

    case ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTIONS_FULFILLED:
      return state.set('lastTransactions', action.payload.transactions);

    case ActionTypeKeys.RESET_SYSTEM_MONITOR:
      return state = systemMonitorInitialState;

    default:
      return state;
  }
};

export default auditSystemMonitorReducer;
