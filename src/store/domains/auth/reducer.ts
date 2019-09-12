import Immutable, { ImmutableObject } from 'seamless-immutable';

import { cookiesExpires, cookiesNames, statusTypes, yesNoTypes } from 'consts';

import { ActionTypeKeys, AuthActionTypes } from './actionTypes';
import { AuthState } from './types';

import { cookiesUtil } from 'utils';

export const authInitialState: ImmutableObject<AuthState> = Immutable({
  sessionId: null,
  firstName: null,
  lastName: null,
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
      action.payload.status === statusTypes.ACTIVE
        && action.payload.requires_2fa_flag === yesNoTypes.YES
        ? cookiesUtil.set(cookiesNames.AUTH_PENDING, 'Y', {
          expires: cookiesExpires.SESSION_ID,
        })
        : cookiesUtil.remove(cookiesNames.AUTH_PENDING);
      // for demo
      // cookiesUtil.set(cookiesNames.SESSION_ID, action.payload.session_id, {
      //   expires: cookiesExpires.SESSION_ID,
      // });
      return state
        .set('sessionId', action.payload.session_id)
        .set('firstName', action.payload.first_name)
        .set('lastName', action.payload.last_name)
        .set('lastActivity', action.payload.last_activity)
        .set('status', action.payload.status)
        .set('requires2faFlag', action.payload.requires_2fa_flag);

    case ActionTypeKeys.USER_ENTER_AUTH_KEY_FULFILLED:
      cookiesUtil.remove(cookiesNames.AUTH_PENDING);
      // cookiesUtil.set(cookiesNames.SESSION_ID, action.payload.session_id); // for demo
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
        .set('lastActivity', null)
        .set('status', null);

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
