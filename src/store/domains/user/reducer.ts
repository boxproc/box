import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UserActionTypes } from './actionTypes';
import { UserState } from './types';

export const userInitialState: ImmutableObject<UserState> = Immutable({
  isLoggedIn: false,
  isRememberedMe: false,
  loginInfo: {
    session_id: '',
    result_code: null,
    message: '',
    description: '',
  },
  userInfo: {
    userName: '',
    uiItems: null,
  },
});

const userReducer = (state = userInitialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
      return state
        .set('loginInfo', action.payload)
        .set('isLoggedIn', true);

    case ActionTypeKeys.SET_REMEMBER_ME:
      return state
        .set('isRememberedMe', action.payload);

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
