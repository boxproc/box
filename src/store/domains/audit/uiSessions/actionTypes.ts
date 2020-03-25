import { AuditUiSessionsDataResp } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_AUDIT_UI_SESSIONS = 'audit/uiSessions/FILTER_AUDIT_UI_SESSIONS',
  FILTER_AUDIT_UI_SESSIONS_FULFILLED = 'audit/uiSessions/FILTER_AUDIT_UI_SESSIONS_FULFILLED',
  FILTER_AUDIT_UI_SESSIONS_REJECTED = 'audit/uiSessions/FILTER_AUDIT_UI_SESSIONS_REJECTED',

  RESET_UI_SESSIONS = 'audit/uiSessions/FILTER_AUDIT_UI_SESSIONS_REJECTED',
}

export interface FilterUiSessionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_AUDIT_UI_SESSIONS;
}

export interface FilterUiSessionsFulfilledAction {
  readonly payload: AuditUiSessionsDataResp;
  readonly type: ActionTypeKeys.FILTER_AUDIT_UI_SESSIONS_FULFILLED;
}

export interface FilterUiSessionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_AUDIT_UI_SESSIONS_REJECTED;
}

export interface ResetUiSessionsAction {
  readonly type: ActionTypeKeys.RESET_UI_SESSIONS;
}

export type AuditUiSessionsActionTypes =
  | FilterUiSessionsFulfilledAction
  | ResetUiSessionsAction;
