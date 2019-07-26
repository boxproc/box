import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, AdminUsersGroupActionTypes } from './actionType';
import { AdminUsersGroupState } from './types';

export const adminUsersGroupInitialState:
  seamlessImmutable.ImmutableObject<AdminUsersGroupState> = Immutable({
    users_group: Immutable([]),
  });

const adminUsersGroupReducer =
  (state = adminUsersGroupInitialState, action: AdminUsersGroupActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_USERS_GROUP_FULFILLED:
        return state
          .set('users_group', action.payload.users_group);

      default:
        return state;
    }
  };

export default adminUsersGroupReducer;
