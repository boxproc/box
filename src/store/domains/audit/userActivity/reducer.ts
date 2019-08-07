import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { AuditUserActivitiesState } from './types';

import { ActionTypeKeys, AuditUserActivityActionTypes } from './actionType';

export const auditUserActivityInitialState:
  seamlessImmutable.ImmutableObject<AuditUserActivitiesState> = Immutable({
    users_activity: Immutable([]),
  });
const auditUserActivities =
  (state = auditUserActivityInitialState, action: AuditUserActivityActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_AUDIT_USER_ACTIVITY_FULFILLED:
        return state
          .set('users_activity', action.payload.users_activity);
      default:
        return state;
    }
  };

export default auditUserActivities;
