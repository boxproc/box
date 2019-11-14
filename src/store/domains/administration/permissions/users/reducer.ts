import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, AdminUserActionTypes } from './actionTypes';
import { AdminUserState } from './types';

export const adminUserInitialState:
  seamlessImmutable.ImmutableObject<AdminUserState> = Immutable({
    users: Immutable([]),
    adminAccessUsers: Immutable([]),
  });

const adminUserReducer =
  (state = adminUserInitialState, action: AdminUserActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_USERS_FULFILLED:
        return state
          .set('users', action.payload.users);

      case ActionTypeKeys.GET_ADMIN_ACCESS_USERS_FULFILLED:
        return state
          .set('adminAccessUsers', action.payload.users);

      case ActionTypeKeys.RESET_USERS:
        return state = adminUserInitialState;

      default:
        return state;
    }
  };

export default adminUserReducer;
