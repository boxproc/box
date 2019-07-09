import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AuthActionTypes } from './actionTypes';
import { AuthState } from './types';

export const authInitialState: ImmutableObject<AuthState> = Immutable({
  isRememberedMe: false,
  username: null,
});

const authReducer = (state = authInitialState, action: AuthActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
      return state
        .set('username', action.payload.username);

    case ActionTypeKeys.SET_REMEMBER_USER:
      return state
        .set('isRememberedMe', action.payload);

    default: return state;
  }
};

export default authReducer;
