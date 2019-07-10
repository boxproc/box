import { AdminSysPropDataResp, AdminSysPropsDataResp } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_SYS_PROPS = 'administration/systemProperties/GET_ADMIN_SYS_PROPS',
  GET_ADMIN_SYS_PROPS_FULFILLED = 'administration/systemProperties/GET_ADMIN_SYS_PROPS_FULFILLED',
  GET_ADMIN_SYS_PROPS_REJECTED = 'administration/systemProperties/GET_ADMIN_SYS_PROPS_REJECTED',

  ADD_ADMIN_SYS_PROP = 'administration/systemProperties/ADD_ADMIN_SYS_PROP',
  ADD_ADMIN_SYS_PROP_FULFILLED = 'administration/systemProperties/ADD_ADMIN_SYS_PROP_FULFILLED',
  ADD_ADMIN_SYS_PROP_REJECTED = 'administration/systemProperties/ADD_ADMIN_SYS_PROP_REJECTED',

  DELETE_ADMIN_SYS_PROP = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP',
// tslint:disable-next-line: max-line-length
  DELETE_ADMIN_SYS_PROP_FULFILLED = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP_FULFILLED',
  DELETE_ADMIN_SYS_PROP_REJECTED = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP_REJECTED',

  UPDATE_ADMIN_SYS_PROPS = 'administration/systemProperties/UPDATE_ADMIN_SYS_PROPS',
  // tslint:disable-next-line: max-line-length
  UPDATE_ADMIN_SYS_PROPS_FULFILLED = 'administration/systemProperties/UPDATE_ADMIN_SYS_PROPS_FULFILLED',
// tslint:disable-next-line: max-line-length
  UPDATE_ADMIN_SYS_PROPS_REJECTED = 'administration/systemProperties/UPDATE_ADMIN_SYS_PROPS_REJECTED',
}

export interface GetAdminSysPropsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_SYS_PROPS;
}

export interface GetAdminSysPropsFulfilledAction {
  readonly payload: AdminSysPropsDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_SYS_PROPS_FULFILLED;
}

export interface GetAdminSysPropsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_SYS_PROPS_REJECTED;
}

export interface AddAdminSysPropAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_SYS_PROP;
}

export interface AddAdminSysPropFulfilledAction {
  readonly payload: AdminSysPropDataResp;
  readonly type: ActionTypeKeys.ADD_ADMIN_SYS_PROP_FULFILLED;
}

export interface AddAdminSysPropRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_SYS_PROP_REJECTED;
}

export interface DeleteAdminSysPropAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP;
}

export interface DeleteAdminSysPropFulfilledAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP_FULFILLED;
}

export interface DeleteAdminSysPropRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP_REJECTED;
}

export interface UpdateAdminSysPropsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS;
}

export interface UpdateAdminSysPropsFulfilledAction {
  readonly payload: AdminSysPropDataResp;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_FULFILLED;
}

export interface UpdateAdminSysPropsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_REJECTED;
}

export type AdminSysPropsActionTypes =
  | GetAdminSysPropsFulfilledAction
  | AddAdminSysPropFulfilledAction
  | DeleteAdminSysPropFulfilledAction
  | UpdateAdminSysPropsFulfilledAction;
