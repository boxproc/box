import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, TEndpointAction } from './actionTypes';
import { IEndpointsState } from './types';

export const endpointInitialState: seamlessImmutable.ImmutableObject<IEndpointsState> = Immutable({
  endpoints: Immutable([]),
  endpointsByInstId: Immutable([]),
});

const endpointsReducer = (state = endpointInitialState, action: TEndpointAction) => {
  switch (action.type) {
    case ActionTypeKeys.DELETE_ENDPOINT_FULFILLED:
      return state.set('endpoints', state.endpoints.filter(el => el.id !== action.meta.id));

    case ActionTypeKeys.FILTER_ENDPOINTS_FULFILLED:
      return state.set('endpoints', action.payload.endpoints);

    case ActionTypeKeys.GET_ENDPOINTS_BY_INST_ID_FULFILLED:
      return state.set('endpointsByInstId', action.payload.endpoints);

    case ActionTypeKeys.RESET_ENDPOINTS:
      return state = endpointInitialState;

    default:
      return state;
  }
};

export default endpointsReducer;
