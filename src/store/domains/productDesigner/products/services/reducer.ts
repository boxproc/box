import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TProductServicesAction } from './actionTypes';
import { ProductServicesState } from './types';

export const productServicesInitialState: ImmutableObject<ProductServicesState> = Immutable({
  interfaces: Immutable([]),
  endpoints: Immutable([]),
});

const productServicesReducer =
  (state = productServicesInitialState, action: TProductServicesAction) => {
    switch (action.type) {
      case ActionTypeKeys.GET_SERVICE_INTERFACES_FULFILLED:
        return state.set('interfaces', action.payload.interfaces);

      case ActionTypeKeys.GET_SERVICE_ENDPOINTS_FULFILLED:
        return state.set('endpoints', action.payload.endpoints);

      default: return state;
    }
  };

export default productServicesReducer;
