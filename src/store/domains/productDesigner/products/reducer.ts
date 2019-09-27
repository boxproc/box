import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  institutionProducts: Immutable([]),
  currentProductDetails: null,
  currentProductRule: null,
  interfaces: Immutable([]),
  endpoints: Immutable([]),
});

const productsReducer =
  (state = productsInitialState, action: ProductsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.DELETE_PRODUCT_FULFILLED:
        return state
          .set(
            'products',
            state.products.filter(el => el.id !== action.meta)
          );

      case ActionTypeKeys.FILTER_PRODUCTS_FULFILLED:
        return state
          .set('products', action.payload.products);

      case ActionTypeKeys.GET_PRODUCT_DETAILS_FULFILLED:
        return state
          .set('currentProductDetails', action.payload.product);

      case ActionTypeKeys.GET_PRODUCT_RULE_FULFILLED:
        return state
          .set('currentProductRule', action.payload.product_rule);

      case ActionTypeKeys.GET_INSTITUTION_PRODUCTS_FULFILLED:
        return state
          .set('institutionProducts', action.payload.institution_products);

      case ActionTypeKeys.GET_SERVICE_INTERFACES_FULFILLED:
        return state
          .set('interfaces', action.payload.interfaces);

      case ActionTypeKeys.GET_SERVICE_ENDPOINTS_FULFILLED:
        return state
          .set('endpoints', action.payload.endpoints);

      default: return state;
    }
  };

export default productsReducer;
