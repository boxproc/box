import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { AuditUserActivitiesState } from './types';

import { ActionTypeKeys, AuditUserActivityActionTypes } from './actionType';

export const auditUserActivityInitialState:
  seamlessImmutable.ImmutableObject<AuditUserActivitiesState> = Immutable({
    usersActivity: Immutable([]),
    filteredUsers: Immutable([]),
  });
const auditUserActivitiesReducer =
  (state = auditUserActivityInitialState, action: AuditUserActivityActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_AUDIT_USERS_FULFILLED:
        return state
          .set('usersActivity', action.payload.users_activity);

      case ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITY_FULFILLED:
        return state
          .set('filteredUsers', action.payload.users_activity);

      default:
        return state;
    }
  };

export default auditUserActivitiesReducer;
