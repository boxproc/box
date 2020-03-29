import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TAuthActionTypes } from './actionTypes';
import { ILoginState } from './types';

export const loginInitialState: ImmutableObject<ILoginState> = Immutable({
  loginData: null,
  data2fa: null,
  currentRegisterStep: null,
  institutions: Immutable([]),
});

const loginReducer = (state = loginInitialState, action: TAuthActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
    case ActionTypeKeys.CHANGE_PROFILE_FULFILLED:
    case ActionTypeKeys.USER_ENTER_AUTH_KEY_FULFILLED:
      return state.set('loginData', action.payload);

    case ActionTypeKeys.USER_LOGOUT_FULFILLED:
      return state = loginInitialState;

    case ActionTypeKeys.USER_GET_AUTH_KEY_FULFILLED:
      return state
        .set('data2fa', action.payload.two_factor_authentication)
        .set('currentRegisterStep', 2);

    case ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP:
      return state
        .set('data2fa', null)
        .set('currentRegisterStep', action.payload);

    case ActionTypeKeys.GET_USER_INSTITUTIONS_FULFILLED:
      return state.set('institutions', action.payload.institutions);

    default: return state;
  }
};

export default loginReducer;
