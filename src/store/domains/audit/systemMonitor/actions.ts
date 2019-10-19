import {
  ActionTypeKeys,
  GetSystemMonitorEndpointsAction,
  GetSystemMonitorInterfacesAction,
  GetSystemMonitorLastTransactionsAction,
  GetSystemMonitorSchedulerAction,
} from './actionTypes';
import * as api from './api';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type HandleGetSystemMonitorData = (refreshedTables?: Array<string>) => Thunk<void>;

export type GetSystemMonitorInterfaces = () => GetSystemMonitorInterfacesAction;
export type GetSystemMonitorEndpoints = () => GetSystemMonitorEndpointsAction;
export type GetSystemMonitorScheduler = () => GetSystemMonitorSchedulerAction;
export type GetSystemMonitorLastTransactions = () => GetSystemMonitorLastTransactionsAction;

export type ResetSystemMonitor = () => void;

export const getSystemMonitorInterfaces: GetSystemMonitorInterfaces = () => ({
  type: ActionTypeKeys.GET_SYSTEM_MONITOR_INTERFACES,
  payload: api.getSystemMonitorInterfaces(),
});

export const getSystemMonitorEndpoints: GetSystemMonitorEndpoints = () => ({
  type: ActionTypeKeys.GET_SYSTEM_MONITOR_ENDPOINTS,
  payload: api.getSystemMonitorEndpoints(),
});

export const getSystemMonitorScheduler: GetSystemMonitorScheduler = () => ({
  type: ActionTypeKeys.GET_SYSTEM_MONITOR_SCHEDULER,
  payload: api.getSystemMonitorScheduler(),
});

export const getSystemMonitorLastTransactions: GetSystemMonitorLastTransactions = () => ({
  type: ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTIONS,
  payload: api.getSystemMonitorLastTransactions(),
});

export const resetSystemMonitor: ResetSystemMonitor = () => ({
  type: ActionTypeKeys.RESET_SYSTEM_MONITOR,
});

const actions = [
  {
    name: 'interfaces',
    action: getSystemMonitorInterfaces,
  },
  {
    name: 'endpoints',
    action: getSystemMonitorEndpoints,
  },
  {
    name: 'schedulerJobs',
    action: getSystemMonitorScheduler,
  },
  {
    name: 'lastTransactions',
    action: getSystemMonitorLastTransactions,
  },
];

export const handleGetSystemMonitorData: HandleGetSystemMonitorData = refreshedTables =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!refreshedTables) {
          await Promise.all(
            actions.map(action => dispatch(action.action()))
          );
        } else if (refreshedTables.length === 1) {
          await dispatch(actions.find(action => action.name === refreshedTables[0]).action());
        } else if (refreshedTables.length > 1) {
          await Promise.all(
            refreshedTables
              .map(name => dispatch(actions.find(action => action.name === name).action()))
          );
        }
      },
      dispatch
    );
  };
