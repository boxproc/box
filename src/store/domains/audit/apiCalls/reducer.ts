import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AuditApiCallsActionTypes } from './actionTypes';
import { AuditApiCallsState } from './types';

export const auditApiCallsInitialState:
  seamlessImmutable.ImmutableObject<AuditApiCallsState> = Immutable({
    apiCalls: Immutable([]),
    apiCallDetails: null,
  });

const auditApiCallsReducer = (
  state = auditApiCallsInitialState,
  action: AuditApiCallsActionTypes
) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_AUDIT_API_CALLS_FULFILLED:
      return state
        .set('apiCalls', action.payload.api_calls);

    case ActionTypeKeys.GET_DETAILS_AUDIT_API_CALLS_FULFILLED:
      return state
        .set('apiCallDetails', action.payload.api_calls[0]);

    default:
      return state;
  }
};

export default auditApiCallsReducer;
