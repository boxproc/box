import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, AdminUsersGroupActionTypes } from './actionType';
import { AdminUsersGroupState } from './types';

export const adminUsersGroupInitialState:
  seamlessImmutable.ImmutableObject<AdminUsersGroupState> = Immutable({
    usersGroups: Immutable([]),
    userGroupMembers: Immutable([]),
    allActiveUsers: Immutable([]),
  });

const adminUsersGroupReducer =
  (state = adminUsersGroupInitialState, action: AdminUsersGroupActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_USERS_GROUP_FULFILLED:
        return state
          .set('usersGroups', action.payload.users_group);

      case ActionTypeKeys.GET_ADMIN_USER_GROUP_MEMBERS_FULFILLED:
        return state
          .set('userGroupMembers', action.payload.user_group_members);

      case ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBER_FULFILLED:
        return state
          .set(
            'userGroupMembers',
            state.userGroupMembers.filter(el => el.id !== action.meta)
          );

      case ActionTypeKeys.GET_ADMIN_ACTIVE_USERS_FULFILLED:
        return state
          .set('allActiveUsers', action.payload.active_users);

      default:
        return state;
    }
  };

export default adminUsersGroupReducer;
