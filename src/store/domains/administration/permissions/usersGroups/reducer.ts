import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, AdminUsersGroupActionTypes } from './actionTypes';
import { IUsersGroupState } from './types';

export const usersGroupInitialState:
  seamlessImmutable.ImmutableObject<IUsersGroupState> = Immutable({
    allActiveUsers: Immutable([]),
    groupPermissions: Immutable([]),
    uiItems: Immutable([]),
    userGroupMembers: Immutable([]),
    usersGroups: Immutable([]),
  });

const usersGroupReducer = (state = usersGroupInitialState, action: AdminUsersGroupActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.GET_USERS_GROUPS_FULFILLED:
      return state.set('usersGroups', action.payload.users_group);

    case ActionTypeKeys.GET_USERS_GROUP_MEMBERS_FULFILLED:
      return state.set('userGroupMembers', action.payload.user_group_members);

    case ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS_FULFILLED:
      return state.set('groupPermissions', action.payload.group_permissions);

    case ActionTypeKeys.GET_ACTIVE_USERS_FULFILLED:
      return state.set('allActiveUsers', action.payload.active_users);

    case ActionTypeKeys.GET_USERS_GROUP_UI_ITEMS_FULFILLED:
      return state.set('uiItems', action.payload.ui_items);

    case ActionTypeKeys.RESET_USERS_GROUPS:
      return state = usersGroupInitialState;

    default:
      return state;
  }
};

export default usersGroupReducer;
