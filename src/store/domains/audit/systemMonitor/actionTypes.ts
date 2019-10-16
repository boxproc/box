import { ApiResponse } from 'types';
import {
  SystemMonitorEndpointsData,
  SystemMonitorInterfacesData,
  SystemMonitorSchedulerData,
  SystemMonitorTransactionData,
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

  GET_SYSTEM_MONITOR_LAST_TRANSACTION = 'audit/systemMonitor/GET_SYSTEM_MONITOR_LAST_TRANSACTION',
  GET_SYSTEM_MONITOR_LAST_TRANSACTION_FULFILLED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_LAST_TRANSACTION_FULFILLED',
  GET_SYSTEM_MONITOR_LAST_TRANSACTION_REJECTED =
  'audit/systemMonitor/GET_SYSTEM_MONITOR_SCHEDULER_REJECTED',

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
  readonly payload: ApiResponse;
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
  readonly payload: ApiResponse;
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
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_SCHEDULER_REJECTED;
}

export interface GetSystemMonitorLastTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTION;
}

export interface GetSystemMonitorLastTransactionFulfilledAction {
  readonly payload: SystemMonitorTransactionData;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTION_FULFILLED;
}

export interface GetSystemMonitorLastTransactionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_SYSTEM_MONITOR_LAST_TRANSACTION_REJECTED;
}

export interface ResetSystemMonitorAction {
  readonly type: ActionTypeKeys.RESET_SYSTEM_MONITOR;
}

export type SystemMonitorActionTypes =
  | GetSystemMonitorInterfacesFulfilledAction
  | GetSystemMonitorEndpointsFulfilledAction
  | GetSystemMonitorSchedulerFulfilledAction
  | GetSystemMonitorLastTransactionFulfilledAction
  | ResetSystemMonitorAction;
