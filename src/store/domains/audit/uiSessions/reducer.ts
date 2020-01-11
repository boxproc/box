import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { AuditUiSessionsState } from './types';

import { ActionTypeKeys, AuditUiSessionsActionTypes } from './actionTypes';

export const auditUiSessionsInitialState:
  seamlessImmutable.ImmutableObject<AuditUiSessionsState> = Immutable({
    uiSessions: Immutable([]),
  });
const auditUiSessionsReducer =
  (state = auditUiSessionsInitialState, action: AuditUiSessionsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_AUDIT_UI_SESSIONS_FULFILLED:
        return state.set('uiSessions', action.payload.ui_sessions);

      case ActionTypeKeys.RESET_UI_SESSIONS:
        return state = auditUiSessionsInitialState;

      default:
        return state;
    }
  };

export default auditUiSessionsReducer;
