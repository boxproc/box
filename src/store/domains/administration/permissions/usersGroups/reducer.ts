import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, TUsersGroupActionTypes } from './actionTypes';
import { IUsersGroupsState } from './types';

export const usersGroupsInitialState:
  seamlessImmutable.ImmutableObject<IUsersGroupsState> = Immutable({
    groups: Immutable([]),
    members: Immutable([]),
    permissions: Immutable([]),
    uiItems: Immutable([]),
    users: Immutable([]),
  });

const usersGroupsReducer = (state = usersGroupsInitialState, action: TUsersGroupActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.GET_USERS_GROUPS_FULFILLED:
      return state.set('groups', action.payload.users_group);

    case ActionTypeKeys.GET_USERS_GROUP_MEMBERS_FULFILLED:
      return state.set('members', action.payload.user_group_members);

    case ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS_FULFILLED:
      return state.set('permissions', action.payload.group_permissions);

    case ActionTypeKeys.GET_USERS_GROUP_USERS_FULFILLED:
      return state.set('users', action.payload.active_users);

    case ActionTypeKeys.GET_USERS_GROUP_UI_ITEMS_FULFILLED:
      return state.set('uiItems', action.payload.ui_items);

    case ActionTypeKeys.RESET_USERS_GROUPS:
      return state = usersGroupsInitialState;

    default:
      return state;
  }
};

export default usersGroupsReducer;
