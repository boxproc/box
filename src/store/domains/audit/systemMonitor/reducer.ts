import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, TSysMonitorAction } from './actionTypes';
import { ISysMonitorState } from './types';

export const systemMonitorInitialState:
  seamlessImmutable.ImmutableObject<ISysMonitorState> = Immutable({
    interfaces: null,
    endpoints: null,
    scheduler: null,
    lastTransactions: null,
    activeItemInfoForLogData: null,
  });

const sysMonitorReducer = (state = systemMonitorInitialState, action: TSysMonitorAction) => {
  switch (action.type) {
    case ActionTypeKeys.GET_SYS_MONITOR_INTERFACES_FULFILLED:
      return state.set('interfaces', action.payload.system_monitor_interfaces);

    case ActionTypeKeys.GET_SYS_MONITOR_ENDPOINTS_FULFILLED:
      return state.set('endpoints', action.payload.system_monitor_endpoints);

    case ActionTypeKeys.GET_SYS_MONITOR_SCHEDULER_FULFILLED:
      return state.set('scheduler', action.payload.system_monitor_scheduler_jobs);

    case ActionTypeKeys.GET_SYS_MONITOR_LAST_TRANSACTIONS_FULFILLED:
      return state.set('lastTransactions', action.payload.transactions);

    case ActionTypeKeys.GET_LOG_DATA_FULFILLED:
      return state.set('activeItemInfoForLogData', action.meta);

    case ActionTypeKeys.RESET_SYS_MONITOR:
      return state = systemMonitorInitialState;

    default:
      return state;
  }
};

export default sysMonitorReducer;
