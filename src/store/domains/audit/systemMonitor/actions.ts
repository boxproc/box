import { modalNamesConst, systemMonitorTablesConst } from 'consts';

import { openModal } from 'store';
import {
  ActionTypeKeys,
  GetLogDataAction,
  GetSysMonitorEndpointsAction,
  GetSysMonitorInterfacesAction,
  GetSysMonitorLastTransactionsAction,
  GetSysMonitorSchedulerAction,
} from './actionTypes';
import * as api from './api';
import { ISysMonitorLogData, ISysMonitorLogDataReq } from './types';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';
import { activeSysMonitorItemLogDataSelector } from './selectors';

export type HandleGetSysMonitorData = (refreshedTables?: Array<string>) => Thunk<void>;

export type GetSysMonitorInterfaces = () => GetSysMonitorInterfacesAction;
export type GetSysMonitorEndpoints = () => GetSysMonitorEndpointsAction;
export type GetSysMonitorScheduler = () => GetSysMonitorSchedulerAction;
export type GetSysMonitorLastTransactions = () => GetSysMonitorLastTransactionsAction;

export type GetLogData = (
  data: {
    requestData: ISysMonitorLogDataReq,
    itemData: ISysMonitorLogData
  }
) =>
  GetLogDataAction;
export type HandleGetLogData = (data: ISysMonitorLogData) => Thunk<void>;
export type HandleRefreshLogData = () => Thunk<void>;

export type ResetSysMonitor = () => void;

export const getSysMonitorInterfaces: GetSysMonitorInterfaces = () => ({
  type: ActionTypeKeys.GET_SYS_MONITOR_INTERFACES,
  payload: api.getSysMonitorInterfaces(),
});

export const getSysMonitorEndpoints: GetSysMonitorEndpoints = () => ({
  type: ActionTypeKeys.GET_SYS_MONITOR_ENDPOINTS,
  payload: api.getSysMonitorEndpoints(),
});

export const getSysMonitorScheduler: GetSysMonitorScheduler = () => ({
  type: ActionTypeKeys.GET_SYS_MONITOR_SCHEDULER,
  payload: api.getSysMonitorScheduler(),
});

export const getSysMonitorLastTransactions: GetSysMonitorLastTransactions = () => ({
  type: ActionTypeKeys.GET_SYS_MONITOR_LAST_TRANSACTIONS,
  payload: api.getSysMonitorLastTransactions(),
});

export const getLogData: GetLogData = data => ({
  type: ActionTypeKeys.GET_LOG_DATA,
  payload: api.getLogData(data.requestData),
  meta: data.itemData,
});

export const resetSysMonitor: ResetSysMonitor = () => ({
  type: ActionTypeKeys.RESET_SYS_MONITOR,
});

const tablesConfig = [
  {
    name: systemMonitorTablesConst.INTERFACES,
    action: getSysMonitorInterfaces,
    apiLogPathName: 'ui/administration/interfaces/log_file',
    idName: 'interface_id',
  },
  {
    name: systemMonitorTablesConst.ENDPOINTS,
    action: getSysMonitorEndpoints,
    apiLogPathName: 'ui/administration/endpoints/log_file',
    idName: 'endpoint_id',
  },
  {
    name: systemMonitorTablesConst.SCHEDULER_JOBS,
    action: getSysMonitorScheduler,
    apiLogPathName: 'ui/administration/scheduler/log_file',
    idName: 'scheduler_id',
  },
  {
    name: systemMonitorTablesConst.LAST_TRANSACTIONS,
    action: getSysMonitorLastTransactions,
  },
];

export const handleGetSysMonitorData: HandleGetSysMonitorData = refreshedTables =>
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
          requestData: {
            id: id ? { [idName]: id } : {},
            apiPathName,
          },
          itemData: data,
        })) as any;

        if (res) {
          dispatch(openModal({
            name: modalNamesConst.LOG,
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

export const handleRefreshLogData: HandleRefreshLogData = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const itemData = activeSysMonitorItemLogDataSelector(state);

        await dispatch(handleGetLogData(itemData));
      },
      dispatch
    );
  };
