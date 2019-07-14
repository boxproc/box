import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  productType: null,
  scheme: null,
  currencyCode: null,
  filterProducts: null,
});

const productsReducer =
  (state = productsInitialState, action: ProductsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_PRODUCTS_FULFILLED:
        return state
          .set('products', action.payload.products);

      case ActionTypeKeys.GET_PRODUCTS_OPTIONS_FULFILLED:
        return state
          .set('product_type', action.payload.product_type)
          .set('scheme', action.payload.scheme)
          .set('currency_code', action.payload.currency_code);

      default: return state;
    }
  };

export default productsReducer;
