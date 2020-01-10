import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ProductGeneralLedgerActionTypes } from './actionTypes';
import { ProductGeneralLedgerState } from './types';

export const productGeneralLedgerInitialState:
  ImmutableObject<ProductGeneralLedgerState> = Immutable({});

const productGeneralLedgerReducer =
  (state = productGeneralLedgerInitialState, action: ProductGeneralLedgerActionTypes) => {
    switch (action.type) {
      default: return state;
    }
  };

export default productGeneralLedgerReducer;
