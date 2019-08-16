import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminInterfacesActionTypes } from './actionTypes';
import { AdminInterfaceState } from './types';

export const adminInterfaceInitialState:
  seamlessImmutable.ImmutableObject<AdminInterfaceState> = Immutable({
    interfaces: Immutable([]),
    currentInterfaceId: null,
  });

const adminInterfacesReducer =
  (state = adminInterfaceInitialState, action: AdminInterfacesActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_INTERFACE_FULFILLED:
        return state
          .set('interfaces', action.payload.interfaces);

      case ActionTypeKeys.DELETE_ADMIN_INTERFACE_FULFILLED:
        return state
          .set(
            'interfaces',
            state.interfaces.filter(el => el.id !== action.meta)
          );
      case ActionTypeKeys.FILTER_ADMIN_INTERFACE_FULFILLED:
        return state
          .set('interfaces', action.payload.interfaces);
      case ActionTypeKeys.SET_ADMIN_INTERFACE_ID:
        return state
          .set('currentInterfaceId', action.payload);

      default:
        return state;
    }
  };

export default adminInterfacesReducer;
