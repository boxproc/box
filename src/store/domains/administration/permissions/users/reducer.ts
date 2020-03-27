import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, TUserActionTypes } from './actionTypes';
import { IUsersState } from './types';

export const usersInitialState: seamlessImmutable.ImmutableObject<IUsersState> = Immutable({
  users: Immutable([]),
  usernames: Immutable([]),
});

const usersReducer = (state = usersInitialState, action: TUserActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_USERS_FULFILLED:
      return state.set('users', action.payload.users);

    case ActionTypeKeys.GET_USERNAMES_FULFILLED:
      return state.set('usernames', action.payload.users);

    case ActionTypeKeys.RESET_USERS:
      return state = usersInitialState;

    default:
      return state;
  }
};

export default usersReducer;
