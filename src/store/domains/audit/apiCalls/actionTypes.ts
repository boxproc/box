import { ApiCallsEndpointItems, ApiCallsItems } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_AUDIT_API_CALLS = 'audit/apiCalls/FILTER_AUDIT_API_CALLS',
  FILTER_AUDIT_API_CALLS_FULFILLED = 'audit/apiCalls/FILTER_AUDIT_API_CALLS_FULFILLED',
  FILTER_AUDIT_API_CALLS_REJECTED = 'audit/apiCalls/FILTER_AUDIT_API_CALLS_REJECTED',

  GET_ENDPOINTS_BY_INSTITUTION_ID = 'audit/apiCalls/GET_ENDPOINTS_BY_INSTITUTION_ID',
  GET_ENDPOINTS_BY_INSTITUTION_ID_FULFILLED =
  'audit/apiCalls/GET_ENDPOINTS_BY_INSTITUTION_ID_FULFILLED',
  GET_ENDPOINTS_BY_INSTITUTION_ID_REJECTED =
  'audit/apiCalls/GET_ENDPOINTS_BY_INSTITUTION_ID_REJECTED',
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

export interface GetEndpointsByInstitutionIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID;
}

export interface GetEndpointsByInstitutionIdFulfilledAction {
  readonly payload: ApiCallsEndpointItems;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID_FULFILLED;
}

export interface GetEndpointsByInstitutionIdRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID_REJECTED;
}

export type AuditApiCallsActionTypes =
  | FilterAuditApiCallsFulfilledAction
  | GetEndpointsByInstitutionIdFulfilledAction;
