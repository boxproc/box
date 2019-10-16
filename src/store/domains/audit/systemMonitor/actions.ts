import {
  ActionTypeKeys,
  GetSystemMonitorEndpointsAction,
  GetSystemMonitorInterfacesAction,
  GetSystemMonitorLastTransactionAction,
  GetSystemMonitorSchedulerAction,
} from './actionTypes';
import * as api from './api';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type HandleGetSystemMonitorData = () => Thunk<void>;

export type GetSystemMonitorInterfaces = () => GetSystemMonitorInterfacesAction;
export type GetSystemMonitorEndpoints = () => GetSystemMonitorEndpointsAction;
export type GetSystemMonitorScheduler = () => GetSystemMonitorSchedulerAction;
export type GetSystemMonitorLastTransaction = () => GetSystemMonitorLastTransactionAction;

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

export const getSystemMonitorLastTransaction: GetSystemMonitorLastTransaction = () => ({
  type: ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTION,
  payload: api.getSystemMonitorLastTransaction(),
});

export const resetSystemMonitor: ResetSystemMonitor = () => ({
  type: ActionTypeKeys.RESET_SYSTEM_MONITOR,
});

export const handleGetSystemMonitorData: HandleGetSystemMonitorData = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await Promise.all([
          dispatch(getSystemMonitorInterfaces()),
          dispatch(getSystemMonitorEndpoints()),
          dispatch(getSystemMonitorScheduler()),
          dispatch(getSystemMonitorLastTransaction()),
        ]);
      },
      dispatch
    );
  };
