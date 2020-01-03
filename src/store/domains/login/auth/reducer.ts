import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AuthActionTypes } from './actionTypes';
import { AuthState } from './types';

export const authInitialState: ImmutableObject<AuthState> = Immutable({
  loginData: null,
  data2fa: null,
  currentRegisterStep: null,
});

const authReducer = (state = authInitialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
    case ActionTypeKeys.CHANGE_ADMIN_PROFILE_FULFILLED:
    case ActionTypeKeys.USER_ENTER_AUTH_KEY_FULFILLED:
      return state
        .set('loginData', action.payload);

    case ActionTypeKeys.USER_LOGOUT_FULFILLED:
      return state = authInitialState;

    case ActionTypeKeys.USER_GET_AUTH_KEY_FULFILLED:
      return state
        .set('data2fa', action.payload.two_factor_authentication)
        .set('currentRegisterStep', 2);

    case ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP:
      return state
        .set('data2fa', null)
        .set('currentRegisterStep', action.payload);

    default: return state;
  }
};

export default authReducer;
