import Immutable, { ImmutableObject } from 'seamless-immutable';

import { TProductAuxCountersAction } from './actionTypes';
import { IProductAuxCountersState } from './types';

export const productsInitialState: ImmutableObject<IProductAuxCountersState> = Immutable({});

const productAuxCountersReducer =
  (state = productsInitialState, action: TProductAuxCountersAction) => {
    switch (action.type) {
      default: return state;
    }
  };

export default productAuxCountersReducer;
