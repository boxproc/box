import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { IUsersActivityState } from './types';

import { ActionTypeKeys, TUsersActivityAction } from './actionTypes';

export const usersActivityInitialState:
  seamlessImmutable.ImmutableObject<IUsersActivityState> = Immutable({
    usersActivity: Immutable([]),
    filteredUsers: Immutable([]),
  });

const usersActivityReducer = (state = usersActivityInitialState, action: TUsersActivityAction) => {
  switch (action.type) {
    case ActionTypeKeys.GET_USERS_FULFILLED:
      return state.set('usersActivity', action.payload.users_activity);

    case ActionTypeKeys.FILTER_USERS_ACTIVITY_FULFILLED:
      return state.set('filteredUsers', action.payload.users_activity);

    case ActionTypeKeys.FILTER_USERS_ACTIVITY_BY_ID_FULFILLED:
      return state.set('filteredUsers', action.payload.users_activity);

    case ActionTypeKeys.RESET_USERS_ACTIVITY:
      return state = usersActivityInitialState;

    default:
      return state;
  }
};

export default usersActivityReducer;
