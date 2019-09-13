import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AuthActionTypes } from './actionTypes';
import { AuthState } from './types';

export const authInitialState: ImmutableObject<AuthState> = Immutable({
  sessionId: null,
  firstName: null,
  lastName: null,
  username: null,
  lastActivity: null,
  status: null,
  currentRegisterStep: null,
  code: null,
  dataUrl: null,
  requires2faFlag: null,
});

const authReducer = (state = authInitialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
    case ActionTypeKeys.CHANGE_ADMIN_PROFILE_FULFILLED:
      return state
        .set('sessionId', action.payload.session_id)
        .set('firstName', action.payload.first_name)
        .set('lastName', action.payload.last_name)
        .set('username', action.payload.username)
        .set('lastActivity', action.payload.last_activity)
        .set('status', action.payload.status)
        .set('requires2faFlag', action.payload.requires_2fa_flag);

    case ActionTypeKeys.USER_ENTER_AUTH_KEY_FULFILLED:
      return state
        .set('sessionId', action.payload.session_id)
        .set('firstName', action.payload.first_name)
        .set('lastName', action.payload.last_name)
        .set('lastActivity', action.payload.last_activity)
        .set('status', action.payload.status);

    case ActionTypeKeys.USER_LOGOUT_FULFILLED:
      return state
        .set('sessionId', null)
        .set('firstName', null)
        .set('lastName', null)
        .set('username', null)
        .set('lastActivity', null)
        .set('status', null)
        .set('requires2faFlag', null);

    case ActionTypeKeys.USER_GET_AUTH_KEY_FULFILLED:
      return state
        .set('code', action.payload.two_factor_authentication.secret_key)
        .set('dataUrl', action.payload.two_factor_authentication.data_url)
        .set('currentRegisterStep', 2);

    case ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP:
      return state
        .set('code', null)
        .set('dataUrl', null)
        .set('currentRegisterStep', action.payload);

    default: return state;
  }
};

export default authReducer;
