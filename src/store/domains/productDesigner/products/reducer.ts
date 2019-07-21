import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  filterProductsParams: null,
});

const productsReducer =
  (state = productsInitialState, action: ProductsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_PRODUCTS_FULFILLED:
      case ActionTypeKeys.FILTER_PRODUCTS_FULFILLED:
        return state
          .set('products', action.payload.products);

      case ActionTypeKeys.DELETE_PRODUCT_FULFILLED:
        return state
        .set(
          'products',
          state.products.filter(el => el.id !== action.meta)
        );

      case ActionTypeKeys.SET_FILTER_PRODUCTS_PARAMS:
        return state
          .set('filterProductsParams', action.payload);

      default: return state;
    }
  };

export default productsReducer;
