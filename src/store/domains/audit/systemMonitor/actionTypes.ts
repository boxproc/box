import { ILogData, TApiResponse } from 'types';
import {
  ItemInfoForLogDataRequest,
  SystemMonitorEndpointsData,
  SystemMonitorInterfacesData,
  SystemMonitorSchedulerData,
  SystemMonitorTransactionsData,
} from './types';

export enum ActionTypeKeys {
  GET_SYSTEM_MONITOR_INTERFACES = 'audit/systemMonitor/GET_SYSTEM_MONITOR_INTERFACES',
  GET_SYSTEM_MONITOR_INTERFACES_FULFILLED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_INTERFACES_FULFILLED',
  GET_SYSTEM_MONITOR_INTERFACES_REJECTED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_INTERFACES_REJECTED',

  GET_SYSTEM_MONITOR_ENDPOINTS = 'audit/systemMonitor/GET_SYSTEM_MONITOR_ENDPOINTS',
  GET_SYSTEM_MONITOR_ENDPOINTS_FULFILLED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_ENDPOINTS_FULFILLED',
  GET_SYSTEM_MONITOR_ENDPOINTS_REJECTED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_ENDPOINTS_REJECTED',

  GET_SYSTEM_MONITOR_SCHEDULER = 'audit/systemMonitor/GET_SYSTEM_MONITOR_SCHEDULER',
  GET_SYSTEM_MONITOR_SCHEDULER_FULFILLED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_SCHEDULER_FULFILLED',
  GET_SYSTEM_MONITOR_SCHEDULER_REJECTED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_SCHEDULER_REJECTED',

  GET_SYSTEM_MONITOR_LAST_TRANSACTIONS = 'audit/systemMonitor/GET_SYSTEM_MONITOR_LAST_TRANSACTIONS',
  GET_SYSTEM_MONITOR_LAST_TRANSACTIONS_FULFILLED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_LAST_TRANSACTIONS_FULFILLED',
  GET_SYSTEM_MONITOR_LAST_TRANSACTIONS_REJECTED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_SCHEDULER_REJECTED',

  GET_LOG_DATA = 'audit/systemMonitor/GET_INTERFACE_LOG_DATA',
  GET_LOG_DATA_FULFILLED = 'audit/systemMonitor/GET_INTERFACE_LOG_DATA_FULFILLED',
  GET_LOG_DATA_REJECTED = 'audit/systemMonitor/GET_INTERFACE_LOG_DATA_REJECTED',

  RESET_SYSTEM_MONITOR = 'audit/systemMonitor/RESET_SYSTEM_MONITOR',
}

export interface GetSystemMonitorInterfacesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_INTERFACES;
}

export interface GetSystemMonitorInterfacesFulfilledAction {
  readonly payload: SystemMonitorInterfacesData;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_INTERFACES_FULFILLED;
}

export interface GetSystemMonitorInterfacesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_INTERFACES_REJECTED;
}

export interface GetSystemMonitorEndpointsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_ENDPOINTS;
}

export interface GetSystemMonitorEndpointsFulfilledAction {
  readonly payload: SystemMonitorEndpointsData;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_ENDPOINTS_FULFILLED;
}

export interface GetSystemMonitorEndpointsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_ENDPOINTS_REJECTED;
}

export interface GetSystemMonitorSchedulerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_SCHEDULER;
}

export interface GetSystemMonitorSchedulerFulfilledAction {
  readonly payload: SystemMonitorSchedulerData;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_SCHEDULER_FULFILLED;
}

export interface GetSystemMonitorSchedulerRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_SCHEDULER_REJECTED;
}

export interface GetSystemMonitorLastTransactionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTIONS;
}

export interface GetSystemMonitorLastTransactionsFulfilledAction {
  readonly payload: SystemMonitorTransactionsData;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTIONS_FULFILLED;
}

export interface GetSystemMonitorLastTransactionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTIONS_REJECTED;
}

export interface GetLogDataAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LOG_DATA;
}

export interface GetLogDataFulfilledAction {
  readonly payload: ILogData;
  readonly type: ActionTypeKeys.GET_LOG_DATA_FULFILLED;
  readonly meta: ItemInfoForLogDataRequest;
}

export interface GetLogDataRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_LOG_DATA_REJECTED;
}

export interface ResetSystemMonitorAction {
  readonly type: ActionTypeKeys.RESET_SYSTEM_MONITOR;
}

export type SystemMonitorActionTypes =
  | GetSystemMonitorInterfacesFulfilledAction
  | GetSystemMonitorEndpointsFulfilledAction
  | GetSystemMonitorSchedulerFulfilledAction
  | GetSystemMonitorLastTransactionsFulfilledAction
  | GetLogDataFulfilledAction
  | ResetSystemMonitorAction;
