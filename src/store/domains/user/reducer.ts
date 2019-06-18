import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UserActionTypes } from './actionTypes';
import { UserState } from './types';

export const userInitialState: ImmutableObject<UserState> = Immutable({
  isLoggedIn: false,
  userInfo: {
    sessionId: null,
    resultCode: null,
    errorDescription: '',
    id: null,
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
  },
});

const userReducer = (state = userInitialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
      return state
        .set('isLoggedIn', true);

    case ActionTypeKeys.GET_USER_INFO_FULFILLED:
      return state
        .set('userInfo', action.payload);

    case ActionTypeKeys.USER_LOGOUT_FULFILLED:
      return state
        .set('isLoggedIn', false);

    default: return state;
  }
};

export default userReducer;
