import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  currentProductId: null,
  currentProduct: null,
  currentProductDetails: null,
  currentProductRules: null,

  filterProductsParams: null,
});

const productsReducer =
  (state = productsInitialState, action: ProductsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_PRODUCTS_FULFILLED:
        return state
          .set('products', action.payload.products);

      case ActionTypeKeys.DELETE_PRODUCT_FULFILLED:
        return state
          .set(
            'products',
            state.products.filter(el => el.id !== action.meta)
          );

      case ActionTypeKeys.FILTER_PRODUCTS_FULFILLED:
        return state
          .set('products', action.payload.products)
          .set('filterProductsParams', action.meta);

      case ActionTypeKeys.GET_PRODUCT_FULFILLED:
        return state
          .set('currentProduct', action.payload.product)
          .set('currentProductId', action.meta);

      case ActionTypeKeys.GET_PRODUCT_DETAILS_FULFILLED:
        return state
          .set('currentProductDetails', action.payload.product);

      case ActionTypeKeys.GET_PRODUCT_RULES_FULFILLED:
        return state
          .set('currentProductRules', action.payload.product_rules);

      default: return state;
    }
  };

export default productsReducer;
