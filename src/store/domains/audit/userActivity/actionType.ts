import { AuditUserActivitiesDataResp, AuditUsersDataResp } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_AUDIT_USERS = 'audit/userActivity/GET_AUDIT_USERS',
  GET_AUDIT_USERS_FULFILLED = 'audit/userActivity/GET_AUDIT_USERS_FULFILLED',
  GET_AUDIT_USERS_REJECTED = 'audit/userActivity/GET_AUDIT_USERS_REJECTED',

  FILTER_AUDIT_USER_ACTIVITIES = 'audit/userActivity/FILTER_AUDIT_USER_ACTIVITIES',
  FILTER_AUDIT_USER_ACTIVITIES_FULFILLED =
  'audit/userActivity/FILTER_AUDIT_USER_ACTIVITIES_FULFILLED',
  FILTER_AUDIT_USER_ACTIVITIES_REJECTED =
  'audit/userActivity/FILTER_AUDIT_USER_ACTIVITIES_REJECTED',
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

export interface FilterUserActivitiesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITIES;
}

export interface FilterUserActivitiesFulfilledAction {
  readonly payload: AuditUserActivitiesDataResp;
  readonly type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITIES_FULFILLED;
}

export interface FilterUserActivitiesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITIES_REJECTED;
}

export type AuditUserActivityActionTypes =
  | GetAuditUsersFulfilledAction
  | FilterUserActivitiesFulfilledAction;
