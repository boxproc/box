import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminEndpointActionTypes } from './actionTypes';
import { AdminEndpointState } from './types';

export const adminEndpointInitialState:
  seamlessImmutable.ImmutableObject<AdminEndpointState> = Immutable({
    endpoints: Immutable([]),
    currentEndpointId: null,
  });

const adminEndpointsReducer =
  (state = adminEndpointInitialState, action: AdminEndpointActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_ENDPOINT_FULFILLED:
        return state
          .set('endpoints', action.payload.endpoints);

      case ActionTypeKeys.DELETE_ADMIN_ENDPOINT_FULFILLED:
        return state
          .set(
            'endpoints',
            state.endpoints.filter(el => el.id !== action.meta)
          );
      case ActionTypeKeys.FILTER_ADMIN_ENDPOINT_FULFILLED:
            return state
              .set('endpoints', action.payload.endpoints);
      case ActionTypeKeys.SET_ADMIN_ENDPOINT_ID:
            return state
              .set('currentEndpointId', action.payload);

      default:
        return state;
    }
  };

export default adminEndpointsReducer;
