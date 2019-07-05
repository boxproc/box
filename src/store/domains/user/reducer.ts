import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UserActionTypes } from './actionTypes';
import { UserState } from './types';

export const userInitialState: ImmutableObject<UserState> = Immutable({
  userInfo: {
    ui_items: null,
  },
});

const userReducer = (state = userInitialState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.GET_USER_INFO_FULFILLED:
      return state
        .set('userInfo', {...state.userInfo, ui_items: action.payload.ui_items});

    default: return state;
  }
};

export default userReducer;
