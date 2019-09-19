import { ApiCallsItems, AuditApiCallId } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_AUDIT_API_CALLS = 'audit/apiCalls/FILTER_AUDIT_API_CALLS',
  FILTER_AUDIT_API_CALLS_FULFILLED = 'audit/apiCalls/FILTER_AUDIT_API_CALLS_FULFILLED',
  FILTER_AUDIT_API_CALLS_REJECTED = 'audit/apiCalls/FILTER_AUDIT_API_CALLS_REJECTED',

  SET_AUDIT_API_CALL_ID = 'ledger/statements/SET_AUDIT_API_CALL_ID',
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

export interface SetAuditApiCallIdAction {
  readonly payload: AuditApiCallId;
  readonly type: ActionTypeKeys.SET_AUDIT_API_CALL_ID;
}

export type AuditApiCallsActionTypes =
  | FilterAuditApiCallsFulfilledAction
  | SetAuditApiCallIdAction;
