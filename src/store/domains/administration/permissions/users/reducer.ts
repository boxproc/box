import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, AdminUserActionTypes } from './actionType';
import { AdminUserState } from './types';

export const adminUserInitialState:
  seamlessImmutable.ImmutableObject<AdminUserState> = Immutable({
    users: Immutable([]),
    currentUserId: null,
  });

const adminUserReducer =
  (state = adminUserInitialState, action: AdminUserActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_USER_FULFILLED:
      case ActionTypeKeys.FILTER_USERS_FULFILLED:
        return state
          .set('users', action.payload.users);

      case ActionTypeKeys.SET_ADMIN_USER_ID:
        return state
          .set('currentUserId', action.payload);

      default:
        return state;
    }
  };

export default adminUserReducer;
