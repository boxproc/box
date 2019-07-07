import { AdminSysPropsDataResp } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_SYS_PROPS = 'administration/systemProperties/GET_ADMIN_SYS_PROPS',
  GET_ADMIN_SYS_PROPS_FULFILLED = 'administration/systemProperties/GET_ADMIN_SYS_PROPS_FULFILLED',
  GET_ADMIN_SYS_PROPS_REJECTED = 'administration/systemProperties/GET_ADMIN_SYS_PROPS_REJECTED',

  DELETE_ADMIN_SYS_PROP = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP',
// tslint:disable-next-line: max-line-length
  DELETE_ADMIN_SYS_PROP_FULFILLED = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP_FULFILLED',
  DELETE_ADMIN_SYS_PROP_REJECTED = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP_REJECTED',
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

export interface DeleteAdminSysPropAction {
  readonly payload: any;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP;
}

export interface DeleteAdminSysPropFulfilledAction {
  readonly payload: any;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP_FULFILLED;
}

export interface DeleteAdminSysPropRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP_REJECTED;
}

export type AdminSysPropsActionTypes =
  | GetAdminSysPropsFulfilledAction
  | DeleteAdminSysPropFulfilledAction;
