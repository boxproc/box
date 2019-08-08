import { ApiResponse } from 'types';
import { AuditUserActivitiesDataResp } from './types';

export enum ActionTypeKeys {
    GET_AUDIT_USER_ACTIVITY = 'audit/userActivity/GET_AUDIT_USER_ACTIVITY',
    GET_AUDIT_USER_ACTIVITY_FULFILLED =
    'audit/userActivity/GET_AUDIT_USER_ACTIVITY_FULFILLED',
    GET_AUDIT_USER_ACTIVITY_REJECTED = 'audit/userActivity/GET_AUDIT_USER_ACTIVITY_REJECTED',
}

export interface GetAuditUserActivityAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.GET_AUDIT_USER_ACTIVITY;
  }

export interface GetAuditUserActivityFulfilledAction {
    readonly payload: AuditUserActivitiesDataResp;
    readonly type: ActionTypeKeys.GET_AUDIT_USER_ACTIVITY_FULFILLED;
  }

export interface GetAuditUserActivityRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.GET_AUDIT_USER_ACTIVITY_REJECTED;
}
export type AuditUserActivityActionTypes =
|GetAuditUserActivityFulfilledAction;
