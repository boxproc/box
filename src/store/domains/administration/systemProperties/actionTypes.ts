import { AdminSysPropsDataResp } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  DELETE_ADMIN_SYS_PROP = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP',
  DELETE_ADMIN_SYS_PROP_FULFILLED =
    'administration/systemProperties/DELETE_ADMIN_SYS_PROP_FULFILLED',
  DELETE_ADMIN_SYS_PROP_REJECTED = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP_REJECTED',

  ADD_ADMIN_SYS_PROP = 'administration/systemProperties/ADD_ADMIN_SYS_PROP',
  ADD_ADMIN_SYS_PROP_FULFILLED = 'administration/systemProperties/ADD_ADMIN_SYS_PROP_FULFILLED',
  ADD_ADMIN_SYS_PROP_REJECTED = 'administration/systemProperties/ADD_ADMIN_SYS_PROP_REJECTED',

  UPDATE_ADMIN_SYS_PROPS = 'administration/systemProperties/UPDATE_ADMIN_SYS_PROPS',
  UPDATE_ADMIN_SYS_PROPS_FULFILLED =
    'administration/systemProperties/UPDATE_ADMIN_SYS_PROPS_FULFILLED',
  UPDATE_ADMIN_SYS_PROPS_REJECTED =
    'administration/systemProperties/UPDATE_ADMIN_SYS_PROPS_REJECTED',

  FILTER_ADMIN_SYS_PROPS = 'administration/systemProperties/FILTER_ADMIN_SYS_PROPS',
  FILTER_ADMIN_SYS_PROPS_FULFILLED =
    'administration/systemProperties/FILTER_ADMIN_SYS_PROPS_FULFILLED',
  FILTER_ADMIN_SYS_PROPS_REJECTED =
    'administration/systemProperties/FILTER_ADMIN_SYS_PROPS_REJECTED',

  RESET_SYSTEM_PROPERTIES = 'administration/systemProperties/RESET_SYSTEM_PROPERTIES',
}

export interface DeleteAdminSysPropAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP;
}

export interface DeleteAdminSysPropFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP_FULFILLED;
  readonly meta: number | string;
}

export interface DeleteAdminSysPropRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP_REJECTED;
}

export interface AddAdminSysPropAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_SYS_PROP;
}

export interface AddAdminSysPropFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_ADMIN_SYS_PROP_FULFILLED;
}

export interface AddAdminSysPropRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_SYS_PROP_REJECTED;
}

export interface UpdateAdminSysPropsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS;
}

export interface UpdateAdminSysPropsFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_FULFILLED;
}

export interface UpdateAdminSysPropsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_REJECTED;
}

export interface FilterAdminSysPropsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS;
}

export interface FilterAdminSysPropsFulfilledAction {
  readonly payload: AdminSysPropsDataResp;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_FULFILLED;
}

export interface FilterAdminSysPropsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_REJECTED;
}

export interface ResetSystemPropertiesAction {
  readonly type: ActionTypeKeys.RESET_SYSTEM_PROPERTIES;
}

export type AdminSysPropsActionTypes =
  | AddAdminSysPropFulfilledAction
  | DeleteAdminSysPropFulfilledAction
  | UpdateAdminSysPropsFulfilledAction
  | FilterAdminSysPropsFulfilledAction
  | ResetSystemPropertiesAction;
