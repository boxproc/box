import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { IUiSessionsState } from './types';

import { ActionTypeKeys, TUiSessionsAction } from './actionTypes';

export const uiSessionsInitialState:
  seamlessImmutable.ImmutableObject<IUiSessionsState> = Immutable({
    uiSessions: Immutable([]),
  });

const uiSessionsReducer = (state = uiSessionsInitialState, action: TUiSessionsAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_UI_SESSIONS_FULFILLED:
      return state.set('uiSessions', action.payload.ui_sessions);

    case ActionTypeKeys.RESET_UI_SESSIONS:
      return state = uiSessionsInitialState;

    default:
      return state;
  }
};

export default uiSessionsReducer;
