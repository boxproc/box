import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, TInterfacesActionTypes } from './actionTypes';
import { IInterfacesState } from './types';

export const interfacesInitialState:
  seamlessImmutable.ImmutableObject<IInterfacesState> = Immutable({
    interfaces: Immutable([]),
  });

const interfacesReducer = (state = interfacesInitialState, action: TInterfacesActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.DELETE_INTERFACE_FULFILLED:
      return state.set('interfaces', state.interfaces.filter(el => el.id !== action.meta.id));

    case ActionTypeKeys.FILTER_INTERFACES_FULFILLED:
      return state.set('interfaces', action.payload.interfaces);

    case ActionTypeKeys.RESET_INTERFACES:
      return state = interfacesInitialState;

    default:
      return state;
  }
};

export default interfacesReducer;
