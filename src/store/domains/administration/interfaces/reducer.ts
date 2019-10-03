import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminInterfacesActionTypes } from './actionTypes';
import { AdminInterfaceState } from './types';

export const adminInterfaceInitialState:
  seamlessImmutable.ImmutableObject<AdminInterfaceState> = Immutable({
    interfaces: Immutable([]),
  });

const adminInterfacesReducer =
  (state = adminInterfaceInitialState, action: AdminInterfacesActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.DELETE_ADMIN_INTERFACE_FULFILLED:
        return state
          .set(
            'interfaces',
            state.interfaces.filter(el => el.id !== action.meta.id)
          );

      case ActionTypeKeys.FILTER_ADMIN_INTERFACE_FULFILLED:
        return state
          .set('interfaces', action.payload.interfaces);

      case ActionTypeKeys.RESET_INTERFACES:
        return state = adminInterfaceInitialState;

      default:
        return state;
    }
  };

export default adminInterfacesReducer;
