import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ProductAuxCountersActionTypes } from './actionTypes';
import { ProductAuxCountersState } from './types';

export const productsInitialState: ImmutableObject<ProductAuxCountersState> = Immutable({});

const productAuxCountersReducer =
  (state = productsInitialState, action: ProductAuxCountersActionTypes) => {
    switch (action.type) {
      default: return state;
    }
  };

export default productAuxCountersReducer;
