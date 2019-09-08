import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AuthActionTypes } from './actionTypes';
import { AuthState } from './types';

export const authInitialState: ImmutableObject<AuthState> = Immutable({
  sessionId: null,
  username: null,
  firstName: null,
  lastName: null,
  isRememberedMe: false,
  lastActivity: null,
  registered2fa: null,
});

const authReducer = (state = authInitialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
      return state
        .set('sessionId', action.payload.session_id)
        .set('username', action.payload.username)
        .set('firstName', action.payload.first_name)
        .set('lastName', action.payload.last_name)
        .set('lastActivity', action.payload.last_activity)
        .set('registered2fa', action.payload.registered_2fa);

    case ActionTypeKeys.SET_REMEMBER_ME:
      return state
        .set('isRememberedMe', action.payload);

    case ActionTypeKeys.USER_LOGOUT_FULFILLED:
      return state
        .set('sessionId', null);

    default: return state;
  }
};

export default authReducer;
