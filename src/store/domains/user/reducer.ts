import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UserActionTypes } from './actionTypes';
import { UserState } from './types';

export const userInitialState: ImmutableObject<UserState> = Immutable({
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

    case ActionTypeKeys.GET_USER_INFO_FULFILLED: {
      return state.set('userInfo', action.payload);
    }

    default: return state;
  }
};

export default userReducer;
