import { ILogData, TApiResponse } from 'types';
import {
  ISysMonitorEndpointsData,
  ISysMonitorInterfacesData,
  ISysMonitorLogData,
  ISysMonitorSchedulerData,
  ISysMonitorTransactionsData,
} from './types';

export enum ActionTypeKeys {
  GET_SYS_MONITOR_INTERFACES = 'systemMonitor/GET_SYS_MONITOR_INTERFACES',
  GET_SYS_MONITOR_INTERFACES_FULFILLED = 'systemMonitor/GET_SYS_MONITOR_INTERFACES_FULFILLED',
  GET_SYS_MONITOR_INTERFACES_REJECTED = 'systemMonitor/GET_SYS_MONITOR_INTERFACES_REJECTED',

  GET_SYS_MONITOR_ENDPOINTS = 'systemMonitor/GET_SYS_MONITOR_ENDPOINTS',
  GET_SYS_MONITOR_ENDPOINTS_FULFILLED = 'systemMonitor/GET_SYS_MONITOR_ENDPOINTS_FULFILLED',
  GET_SYS_MONITOR_ENDPOINTS_REJECTED = 'systemMonitor/GET_SYS_MONITOR_ENDPOINTS_REJECTED',

  GET_SYS_MONITOR_SCHEDULER = 'systemMonitor/GET_SYS_MONITOR_SCHEDULER',
  GET_SYS_MONITOR_SCHEDULER_FULFILLED = 'systemMonitor/GET_SYS_MONITOR_SCHEDULER_FULFILLED',
  GET_SYS_MONITOR_SCHEDULER_REJECTED = 'systemMonitor/GET_SYS_MONITOR_SCHEDULER_REJECTED',

  GET_SYS_MONITOR_LAST_TRANSACTIONS = 'systemMonitor/GET_SYS_MONITOR_LAST_TRANSACTIONS',
  GET_SYS_MONITOR_LAST_TRANSACTIONS_FULFILLED =
  'systemMonitor/GET_SYS_MONITOR_LAST_TRANSACTIONS_FULFILLED',
  GET_SYS_MONITOR_LAST_TRANSACTIONS_REJECTED =
  'systemMonitor/GET_SYS_MONITOR_SCHEDULER_REJECTED',

  GET_LOG_DATA = 'systemMonitor/GET_INTERFACE_LOG_DATA',
  GET_LOG_DATA_FULFILLED = 'systemMonitor/GET_INTERFACE_LOG_DATA_FULFILLED',
  GET_LOG_DATA_REJECTED = 'systemMonitor/GET_INTERFACE_LOG_DATA_REJECTED',

  RESET_SYS_MONITOR = 'systemMonitor/RESET_SYS_MONITOR',
}

export interface GetSysMonitorInterfacesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_INTERFACES;
}

export interface GetSysMonitorInterfacesFulfilledAction {
  readonly payload: ISysMonitorInterfacesData;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_INTERFACES_FULFILLED;
}

export interface GetSysMonitorInterfacesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_INTERFACES_REJECTED;
}

export interface GetSysMonitorEndpointsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_ENDPOINTS;
}

export interface GetSysMonitorEndpointsFulfilledAction {
  readonly payload: ISysMonitorEndpointsData;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_ENDPOINTS_FULFILLED;
}

export interface GetSysMonitorEndpointsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_ENDPOINTS_REJECTED;
}

export interface GetSysMonitorSchedulerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_SCHEDULER;
}

export interface GetSysMonitorSchedulerFulfilledAction {
  readonly payload: ISysMonitorSchedulerData;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_SCHEDULER_FULFILLED;
}

export interface GetSysMonitorSchedulerRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_SCHEDULER_REJECTED;
}

export interface GetSysMonitorLastTransactionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_LAST_TRANSACTIONS;
}

export interface GetSysMonitorLastTransactionsFulfilledAction {
  readonly payload: ISysMonitorTransactionsData;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_LAST_TRANSACTIONS_FULFILLED;
}

export interface GetSysMonitorLastTransactionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SYS_MONITOR_LAST_TRANSACTIONS_REJECTED;
}

export interface GetLogDataAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LOG_DATA;
}

export interface GetLogDataFulfilledAction {
  readonly payload: ILogData;
  readonly type: ActionTypeKeys.GET_LOG_DATA_FULFILLED;
  readonly meta: ISysMonitorLogData;
}

export interface GetLogDataRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_LOG_DATA_REJECTED;
}

export interface ResetSysMonitorAction {
  readonly type: ActionTypeKeys.RESET_SYS_MONITOR;
}

export type TSysMonitorAction =
  | GetSysMonitorInterfacesFulfilledAction
  | GetSysMonitorEndpointsFulfilledAction
  | GetSysMonitorSchedulerFulfilledAction
  | GetSysMonitorLastTransactionsFulfilledAction
  | GetLogDataFulfilledAction
  | ResetSysMonitorAction;
