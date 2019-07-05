import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AuthActionTypes } from './actionTypes';
import { AuthState } from './types';

export const authInitialState: ImmutableObject<AuthState> = Immutable({
  isLoggedIn: false,
  isRememberedMe: false,
  authInfo: {
    session_id: '',
    result_code: null,
    message: '',
    description: '',
  },
});

const authReducer = (state = authInitialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
      return state
        .set('authInfo', action.payload)
        .set('isLoggedIn', true);

    case ActionTypeKeys.SET_REMEMBER_USER:
      return state
        .set('isRememberedMe', action.payload);

    case ActionTypeKeys.USER_LOGOUT_FULFILLED:
      return state
        .set('isLoggedIn', false);

    default: return state;
  }
};

export default authReducer;
