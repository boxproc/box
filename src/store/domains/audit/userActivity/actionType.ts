import { AuditUserActivityDataResp, AuditUsersDataResp } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_AUDIT_USERS = 'audit/userActivity/GET_AUDIT_USERS',
  GET_AUDIT_USERS_FULFILLED = 'audit/userActivity/GET_AUDIT_USERS_FULFILLED',
  GET_AUDIT_USERS_REJECTED = 'audit/userActivity/GET_AUDIT_USERS_REJECTED',

  FILTER_AUDIT_USER_ACTIVITY = 'audit/userActivity/FILTER_AUDIT_USER_ACTIVITY',
  FILTER_AUDIT_USER_ACTIVITY_FULFILLED = 'audit/userActivity/FILTER_AUDIT_USER_ACTIVITY_FULFILLED',
  FILTER_AUDIT_USER_ACTIVITY_REJECTED = 'audit/userActivity/FILTER_AUDIT_USER_ACTIVITY_REJECTED',

  FILTER_AUDIT_USER_ACTIVITY_BY_ID = 'audit/userActivity/FILTER_AUDIT_USER_ACTIVITY_BY_ID',
  FILTER_AUDIT_USER_ACTIVITY_BY_ID_FULFILLED =
  'audit/userActivity/FILTER_AUDIT_USER_ACTIVITY_BY_ID_FULFILLED',
  FILTER_AUDIT_USER_ACTIVITY_BY_ID_REJECTED =
  'audit/userActivity/FILTER_AUDIT_USER_ACTIVITY_BY_ID_REJECTED',

  RESET_USER_ACTIVITY = 'audit/userActivity/FILTER_AUDIT_USER_ACTIVITY_REJECTED',
}

export interface GetAuditUsersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_AUDIT_USERS;
}

export interface GetAuditUsersFulfilledAction {
  readonly payload: AuditUsersDataResp;
  readonly type: ActionTypeKeys.GET_AUDIT_USERS_FULFILLED;
}

export interface GetAuditUserActivityRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_AUDIT_USERS_FULFILLED;
}

export interface FilterUserActivityAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITY;
}

export interface FilterUserActivityFulfilledAction {
  readonly payload: AuditUserActivityDataResp;
  readonly type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITY_FULFILLED;
}

export interface FilterUserActivityRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITY_REJECTED;
}

export interface ResetUSerActivityAction {
  readonly type: ActionTypeKeys.RESET_USER_ACTIVITY;
}

export type AuditUserActivityActionTypes =
  | GetAuditUsersFulfilledAction
  | FilterUserActivityFulfilledAction
  | ResetUSerActivityAction;
