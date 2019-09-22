import { ApiCallsItems, AuditApiCallId } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_AUDIT_API_CALLS = 'audit/apiCalls/FILTER_AUDIT_API_CALLS',
  FILTER_AUDIT_API_CALLS_FULFILLED = 'audit/apiCalls/FILTER_AUDIT_API_CALLS_FULFILLED',
  FILTER_AUDIT_API_CALLS_REJECTED = 'audit/apiCalls/FILTER_AUDIT_API_CALLS_REJECTED',

  GET_DETAILS_AUDIT_API_CALLS = 'audit/apiCalls/GET_DETAILS_AUDIT_API_CALLS',
  GET_DETAILS_AUDIT_API_CALLS_FULFILLED = 'audit/apiCalls/GET_DETAILS_AUDIT_API_CALLS_FULFILLED',
  GET_DETAILS_AUDIT_API_CALLS_REJECTED = 'audit/apiCalls/GET_DETAILS_AUDIT_API_CALLS_REJECTED',
}

export interface FilterAuditApiCallsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_AUDIT_API_CALLS;
}

export interface FilterAuditApiCallsFulfilledAction {
  readonly payload: ApiCallsItems;
  readonly type: ActionTypeKeys.FILTER_AUDIT_API_CALLS_FULFILLED;
}

export interface FilterAuditApiCallsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_AUDIT_API_CALLS_REJECTED;
}

export interface GetDetailsAuditApiCallsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DETAILS_AUDIT_API_CALLS;
}

export interface GetDetailsAuditApiCallsFulfilledAction {
  readonly payload: {api_calls: Array<AuditApiCallId>};
  readonly type: ActionTypeKeys.GET_DETAILS_AUDIT_API_CALLS_FULFILLED;
}

export interface GetDetailsAuditApiCallsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DETAILS_AUDIT_API_CALLS_REJECTED;
}

export type AuditApiCallsActionTypes =
  | FilterAuditApiCallsFulfilledAction
  | GetDetailsAuditApiCallsFulfilledAction;
