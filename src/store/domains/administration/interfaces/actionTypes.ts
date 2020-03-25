import { IResponseStatus, TApiResponse } from 'types';
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

  RESET_INTERFACES = 'administration/interfaces/RESET_INTERFACES',
}

export interface AddAdminInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE;
}

export interface AddAdminInterfaceFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE_FULFILLED;
}

export interface AddAdminInterfaceRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE_REJECTED;
}

export interface DeleteAdminInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE;
}

export interface DeleteAdminInterfaceFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE_FULFILLED;
  meta: { id: number };
}

export interface DeleteAdminInterfaceRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE_REJECTED;
}

export interface UpdateAdminInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE;
}

export interface UpdateAdminInterfaceFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE_FULFILLED;
}

export interface UpdateAdminInterfaceRejectedAction {
  readonly payload: TApiResponse;
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
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_INTERFACE_REJECTED;
}

export interface ResetInterfacesAction {
  readonly type: ActionTypeKeys.RESET_INTERFACES;
}

export type AdminInterfacesActionTypes =
  | AddAdminInterfaceFulfilledAction
  | DeleteAdminInterfaceFulfilledAction
  | FilterAdminInterfaceFulfilledAction
  | UpdateAdminInterfaceFulfilledAction
  | ResetInterfacesAction;
