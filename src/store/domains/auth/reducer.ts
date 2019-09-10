import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AuthActionTypes } from './actionTypes';
import { AuthState } from './types';

export const authInitialState: ImmutableObject<AuthState> = Immutable({
  firstName: null,
  lastName: null,
  lastActivity: null,
  status: null,
  currentRegisterStep: null,
  code: null,
  dataUrl: null,
});

const authReducer = (state = authInitialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
    // case ActionTypeKeys.USER_ENTER_AUTH_KEY_FULFILLED:
      // cookiesUtil.set(cookiesNames.SESSION_ID, action.payload.session_id); // for demo
      return state
        .set('firstName', action.payload.first_name)
        .set('lastName', action.payload.last_name)
        .set('lastActivity', action.payload.last_activity)
        .set('status', action.payload.status);

    case ActionTypeKeys.USER_ENTER_AUTH_KEY_FULFILLED:
      // cookiesUtil.set(cookiesNames.SESSION_ID, action.payload.session_id); // for demo
      return state
        .set('firstName', action.payload.first_name)
        .set('lastName', action.payload.last_name)
        .set('lastActivity', action.payload.last_activity)
        .set('status', action.payload.status);

    case ActionTypeKeys.USER_GET_AUTH_KEY_FULFILLED:
      return state
        .set('code', action.payload.two_factor_authentication.secret_key)
        .set('dataUrl', action.payload.two_factor_authentication.data_url)
        .set('currentRegisterStep', 2);

    case ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP:
      const step = action.payload;
      return state
        .set('dataUrl', null)
        .set('code', null)
        .set('currentRegisterStep', step);

    default: return state;
  }
};

export default authReducer;
