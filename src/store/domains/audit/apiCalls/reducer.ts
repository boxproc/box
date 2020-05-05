import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, TApiCallsAction } from './actionTypes';
import { IApiCallsState } from './types';

export const apiCallsInitialState: seamlessImmutable.ImmutableObject<IApiCallsState> = Immutable({
  apiCalls: Immutable([]),
  apiCallDetails: null,
});

const apiCallsReducer = (state = apiCallsInitialState, action: TApiCallsAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_API_CALLS_FULFILLED:
      return state.set('apiCalls', action.payload.api_calls);

    case ActionTypeKeys.GET_DETAILS_API_CALLS_FULFILLED:
      return state.set('apiCallDetails', action.payload.api_call[0]);

    case ActionTypeKeys.RESET_API_CALLS:
      return state = apiCallsInitialState;

    default:
      return state;
  }
};

export default apiCallsReducer;
