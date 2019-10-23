import { ApiResponse, LogData, ResponseStatusType } from 'types';
import { AdminInterfaceItems } from './types';

export enum ActionTypeKeys {
  ADD_ADMIN_INTERFACE = 'administration/interfaces/ADD_ADMIN_INTERFACE',
  ADD_ADMIN_INTERFACE_FULFILLED = 'administration/interfaces/ADD_ADMIN_INTERFACE_FULFILLED',
  ADD_ADMIN_INTERFACE_REJECTED = 'administration/interfaces/ADD_ADMIN_INTERFACE_REJECTED',

  DELETE_ADMIN_INTERFACE = 'administration/interfaces/DELETE_ADMIN_INTERFACE',
  DELETE_ADMIN_INTERFACE_FULFILLED = 'administration/interfaces/DELETE_ADMIN_INTERFACE_FULFILLED',
  DELETE_ADMIN_INTERFACE_REJECTED = 'administration/interfaces/DELETE_ADMIN_INTERFACE_REJECTED',

  UPDATE_ADMIN_INTERFACE = 'administration/interfaces/UPDATE_ADMIN_INTERFACE',
  UPDATE_ADMIN_INTERFACE_FULFILLED = 'administration/interfaces/UPDATE_ADMIN_INTERFACE_FULFILLED',
  UPDATE_ADMIN_INTERFACE_REJECTED = 'administration/interfaces/UPDATE_ADMIN_INTERFACE_REJECTED',

  FILTER_ADMIN_INTERFACE = 'administration/interfaces/FILTER_ADMIN_INTERFACE',
  FILTER_ADMIN_INTERFACE_FULFILLED = 'administration/interfaces/FILTER_ADMIN_INTERFACE_FULFILLED',
  FILTER_ADMIN_INTERFACE_REJECTED = 'administration/interfaces/FILTER_ADMIN_INTERFACE_REJECTED',

  GET_INTERFACE_LOG_DATA = 'administration/interfaces/GET_INTERFACE_LOG_DATA',
  GET_INTERFACE_LOG_DATA_FULFILLED = 'administration/interfaces/GET_INTERFACE_LOG_DATA_FULFILLED',
  GET_INTERFACE_LOG_DATA_REJECTED = 'administration/interfaces/GET_INTERFACE_LOG_DATA_REJECTED',

  RESET_INTERFACES = 'administration/interfaces/RESET_INTERFACES',
}

export interface AddAdminInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE;
}

export interface AddAdminInterfaceFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE_FULFILLED;
}

export interface AddAdminInterfaceRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE_REJECTED;
}

export interface DeleteAdminInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE;
}

export interface DeleteAdminInterfaceFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE_FULFILLED;
  meta: { id: number };
}

export interface DeleteAdminInterfaceRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE_REJECTED;
}

export interface UpdateAdminInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE;
}

export interface UpdateAdminInterfaceFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE_FULFILLED;
}

export interface UpdateAdminInterfaceRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE_REJECTED;
}

export interface FilterAdminInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ADMIN_INTERFACE;
}

export interface FilterAdminInterfaceFulfilledAction {
  readonly payload: AdminInterfaceItems;
  readonly type: ActionTypeKeys.FILTER_ADMIN_INTERFACE_FULFILLED;
}

export interface FilterAdminInterfaceRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_INTERFACE_REJECTED;
}

export interface GetInterfaceLogDataAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_INTERFACE_LOG_DATA;
}

export interface GetInterfaceLogDataFulfilledAction {
  readonly payload: LogData;
  readonly type: ActionTypeKeys.GET_INTERFACE_LOG_DATA_FULFILLED;
}

export interface GetInterfaceLogDataRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_INTERFACE_LOG_DATA_REJECTED;
}

export interface ResetInterfacesAction {
  readonly type: ActionTypeKeys.RESET_INTERFACES;
}

export type AdminInterfacesActionTypes =
  | AddAdminInterfaceFulfilledAction
  | DeleteAdminInterfaceFulfilledAction
  | FilterAdminInterfaceFulfilledAction
  | UpdateAdminInterfaceFulfilledAction
  | GetInterfaceLogDataFulfilledAction
  | ResetInterfacesAction;
