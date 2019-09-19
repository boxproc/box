import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AuditApiCallsActionTypes } from './actionTypes';
import { AuditApiCallsState } from './types';

export const auditApiCallsInitialState:
  seamlessImmutable.ImmutableObject<AuditApiCallsState> = Immutable({
    apiCalls: Immutable([]),
    currentStatementId: null,
  });

const auditApiCallsReducer = (
  state = auditApiCallsInitialState,
  action: AuditApiCallsActionTypes
) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_AUDIT_API_CALLS_FULFILLED:
      return state
        .set('apiCalls', action.payload.api_calls);

    case ActionTypeKeys.SET_AUDIT_API_CALL_ID:
      return state
        .set('currentStatementId', action.payload.id);

    default:
      return state;
  }
};

export default auditApiCallsReducer;
