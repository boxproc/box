import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminEndpointActionTypes } from './actionTypes';
import { AdminEndpointState } from './types';

export const adminEndpointInitialState:
  seamlessImmutable.ImmutableObject<AdminEndpointState> = Immutable({
    endpoints: Immutable([]),
    endpointsByInstitutionId: Immutable([]),
    currentEndpointId: null,
  });

const adminEndpointsReducer =
  (state = adminEndpointInitialState, action: AdminEndpointActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.DELETE_ADMIN_ENDPOINT_FULFILLED:
        return state
          .set(
            'endpoints',
            state.endpoints.filter(el => el.id !== action.meta.id)
          );

      case ActionTypeKeys.FILTER_ADMIN_ENDPOINT_FULFILLED:
        return state
          .set('endpoints', action.payload.endpoints);

      case ActionTypeKeys.SET_ADMIN_ENDPOINT_ID:
        return state
          .set('currentEndpointId', action.payload);

    case ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID_FULFILLED:
      return state
        .set('endpointsByInstitutionId', action.payload.endpoints);

      default:
        return state;
    }
  };

export default adminEndpointsReducer;
