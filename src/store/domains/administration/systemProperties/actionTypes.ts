import {
  AdminSysPropDataResp,
  AdminSysPropNameDataResp,
  AdminSysPropsDataResp,
  AdminSysPropsItemResp,
} from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_SYS_PROPS = 'administration/systemProperties/GET_ADMIN_SYS_PROPS',
  GET_ADMIN_SYS_PROPS_FULFILLED = 'administration/systemProperties/GET_ADMIN_SYS_PROPS_FULFILLED',
  GET_ADMIN_SYS_PROPS_REJECTED = 'administration/systemProperties/GET_ADMIN_SYS_PROPS_REJECTED',

  ADD_ADMIN_SYS_PROP = 'administration/systemProperties/ADD_ADMIN_SYS_PROP',
  ADD_ADMIN_SYS_PROP_FULFILLED = 'administration/systemProperties/ADD_ADMIN_SYS_PROP_FULFILLED',
  ADD_ADMIN_SYS_PROP_REJECTED = 'administration/systemProperties/ADD_ADMIN_SYS_PROP_REJECTED',

  DELETE_ADMIN_SYS_PROP = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP',
  DELETE_ADMIN_SYS_PROP_FULFILLED =
    'administration/systemProperties/DELETE_ADMIN_SYS_PROP_FULFILLED',
  DELETE_ADMIN_SYS_PROP_REJECTED = 'administration/systemProperties/DELETE_ADMIN_SYS_PROP_REJECTED',

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

  SET_FILTER_ADMIN_SYS_PROPS =
   'administration/systemProperties/SET_FILTER_ADMIN_SYS_PROPS',
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
  readonly payload: AdminSysPropNameDataResp;
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

export interface FilterAdminSysPropsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS;
}

export interface FilterAdminSysPropsFulfilledAction {
  readonly payload: AdminSysPropsDataResp;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_FULFILLED;
}

export interface FilterAdminSysPropsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_REJECTED;
}

export interface SetFilterAdminSysPropsAction {
  readonly payload: AdminSysPropsItemResp;
  readonly type: ActionTypeKeys.SET_FILTER_ADMIN_SYS_PROPS;
}

export type AdminSysPropsActionTypes =
  | GetAdminSysPropsFulfilledAction
  | AddAdminSysPropFulfilledAction
  | DeleteAdminSysPropFulfilledAction
  | UpdateAdminSysPropsFulfilledAction
  | FilterAdminSysPropsFulfilledAction
  | SetFilterAdminSysPropsAction;
