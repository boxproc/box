import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { AuditUserActivitiesState } from './types';

import { ActionTypeKeys, AuditUserActivityActionTypes } from './actionType';

export const auditUserActivityInitialState:
  seamlessImmutable.ImmutableObject<AuditUserActivitiesState> = Immutable({
    users_activity: Immutable([]),
    filtered_users: Immutable([]),

  });
const auditUserActivitiesReducer =
  (state = auditUserActivityInitialState, action: AuditUserActivityActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_AUDIT_USERS_FULFILLED:
        return state
          .set('users_activity', action.payload.users_activity);

      case ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITIES_FULFILLED:
        return state
          .set('filtered_users', action.payload.users_activity);
      default:
        return state;
    }
  };

export default auditUserActivitiesReducer;
