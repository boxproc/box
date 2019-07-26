import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, AdminUserActionTypes } from './actionType';
import { AdminUserState } from './types';

export const adminUserInitialState:
  seamlessImmutable.ImmutableObject<AdminUserState> = Immutable({
    users: Immutable([]),
    filterUsers: null,
  });

const adminUserReducer =
  (state = adminUserInitialState, action: AdminUserActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_USER_FULFILLED:
        return state
          .set('users', action.payload.users);

      default:
        return state;
    }
  };

export default adminUserReducer;
