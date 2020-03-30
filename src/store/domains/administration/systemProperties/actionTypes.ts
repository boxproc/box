import { ISysPropsData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  DELETE_SYS_PROP = 'systemProperties/DELETE_SYS_PROP',
  DELETE_SYS_PROP_FULFILLED = 'systemProperties/DELETE_SYS_PROP_FULFILLED',
  DELETE_SYS_PROP_REJECTED = 'systemProperties/DELETE_SYS_PROP_REJECTED',

  ADD_SYS_PROP = 'systemProperties/ADD_SYS_PROP',
  ADD_SYS_PROP_FULFILLED = 'systemProperties/ADD_SYS_PROP_FULFILLED',
  ADD_SYS_PROP_REJECTED = 'systemProperties/ADD_SYS_PROP_REJECTED',

  UPDATE_SYS_PROP = 'systemProperties/UPDATE_SYS_PROP',
  UPDATE_SYS_PROP_FULFILLED = 'systemProperties/UPDATE_SYS_PROP_FULFILLED',
  UPDATE_SYS_PROP_REJECTED = 'systemProperties/UPDATE_SYS_PROP_REJECTED',

  FILTER_SYS_PROPS = 'systemProperties/FILTER_SYS_PROPS',
  FILTER_SYS_PROPS_FULFILLED = 'systemProperties/FILTER_SYS_PROPS_FULFILLED',
  FILTER_SYS_PROPS_REJECTED = 'systemProperties/FILTER_SYS_PROPS_REJECTED',

  RESET_SYSTEM_PROPERTIES = 'systemProperties/RESET_SYSTEM_PROPERTIES',
}

/** Delete system property action interfaces */

export interface IDeleteSysPropAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_SYS_PROP;
}

export interface IDeleteSysPropFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_SYS_PROP_FULFILLED;
  readonly meta: number | string;
}

export interface IDeleteSysPropRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_SYS_PROP_REJECTED;
}

/** Add system property action interfaces */

export interface IAddSysPropAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_SYS_PROP;
}

export interface IAddSysPropFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_SYS_PROP_FULFILLED;
}

export interface IAddSysPropRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_SYS_PROP_REJECTED;
}

/** Update system property action interfaces */

export interface IUpdateSysPropAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_SYS_PROP;
}

export interface IUpdateSysPropFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_SYS_PROP_FULFILLED;
}

export interface IUpdateSysPropRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_SYS_PROP_REJECTED;
}

/** Filter system properties action interfaces */

export interface IFilterSysPropsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_SYS_PROPS;
}

export interface IFilterSysPropsFulfilledAction {
  readonly payload: ISysPropsData;
  readonly type: ActionTypeKeys.FILTER_SYS_PROPS_FULFILLED;
}

export interface IFilterSysPropsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_SYS_PROPS_REJECTED;
}

/** Reset system properties action interfaces */

export interface IResetSystemPropertiesAction {
  readonly type: ActionTypeKeys.RESET_SYSTEM_PROPERTIES;
}

export type TSysPropsActionTypes =
  | IAddSysPropFulfilledAction
  | IDeleteSysPropFulfilledAction
  | IUpdateSysPropFulfilledAction
  | IFilterSysPropsFulfilledAction
  | IResetSystemPropertiesAction;
