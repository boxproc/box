import { logDataPathNames, modalNamesConst, systemMonitorTables } from 'consts';

import { openModal } from 'store/domains/modals';
import {
  ActionTypeKeys,
  GetLogDataAction,
  GetSystemMonitorEndpointsAction,
  GetSystemMonitorInterfacesAction,
  GetSystemMonitorLastTransactionsAction,
  GetSystemMonitorSchedulerAction,
} from './actionTypes';
import * as api from './api';
import { LogDataRequest } from './types';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type HandleGetSystemMonitorData = (refreshedTables?: Array<string>) => Thunk<void>;

export type GetSystemMonitorInterfaces = () => GetSystemMonitorInterfacesAction;
export type GetSystemMonitorEndpoints = () => GetSystemMonitorEndpointsAction;
export type GetSystemMonitorScheduler = () => GetSystemMonitorSchedulerAction;
export type GetSystemMonitorLastTransactions = () => GetSystemMonitorLastTransactionsAction;

export type GetLogData = (data: LogDataRequest) => GetLogDataAction;
export type HandleGetLogData = (data: {
  name: string;
  id?: number;
  title?: string;
}) => Thunk<void>;

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

export const getLogData: GetLogData = data => ({
  type: ActionTypeKeys.GET_LOG_DATA,
  payload: api.getLogData(data),
});

export const resetSystemMonitor: ResetSystemMonitor = () => ({
  type: ActionTypeKeys.RESET_SYSTEM_MONITOR,
});

const tablesConfig = [
  {
    name: systemMonitorTables.INTERFACES,
    action: getSystemMonitorInterfaces,
    apiLogPathName: logDataPathNames.GET_INTERFACE_LOG_DATA,
    idName: 'interface_id',
  },
  {
    name: systemMonitorTables.ENDPOINTS,
    action: getSystemMonitorEndpoints,
    apiLogPathName: logDataPathNames.GET_ENDPOINT_LOG_DATA,
    idName: 'endpoint_id',
  },
  {
    name: systemMonitorTables.SCHEDULER_JOBS,
    action: getSystemMonitorScheduler,
    apiLogPathName: logDataPathNames.GET_SCHEDULER_LOG_DATA,
    idName: 'scheduler_id',
  },
  {
    name: systemMonitorTables.LAST_TRANSACTIONS,
    action: getSystemMonitorLastTransactions,
  },
];

export const handleGetSystemMonitorData: HandleGetSystemMonitorData = refreshedTables =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!refreshedTables) {
          await Promise.all(
            tablesConfig.map(el => dispatch(el.action()))
          );
        } else if (refreshedTables.length === 1) {
          await dispatch(tablesConfig.find(el => el.name === refreshedTables[0]).action());
        } else if (refreshedTables.length > 1) {
          await Promise.all(
            refreshedTables
              .map(name => dispatch(tablesConfig.find(el => el.name === name).action()))
          );
        }
      },
      dispatch
    );
  };

export const handleGetLogData: HandleGetLogData = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const { name, id, title } = data;
        const current = tablesConfig.find(el => el.name === name);

        const apiPathName = current && current.apiLogPathName;
        const idName = current && current.idName;

        const res = await dispatch(getLogData({
          id: id ? { [idName]: id } : {},
          apiPathName,
        })) as any;

        if (res) {
          dispatch(openModal({
            name: modalNamesConst.LOG_MODAL,
            payload: {
              title,
              logLocation: res.value.log_file_path,
              logData: res.value.log_file,
            },
          }));
        }
      },
      dispatch
    );
  };
