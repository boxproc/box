import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  institutionProducts: Immutable([]),
  currentProduct: null,
  currentProductDetails: null,
  currentProductRule: null,
  interfaces: Immutable([]),
  endpoints: Immutable([]),
  productAprs: Immutable([]),
  productFees: Immutable([]),
});

const productsReducer =
  (state = productsInitialState, action: ProductsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.DELETE_PRODUCT_FULFILLED:
        return state.set('products', state.products.filter(el => el.id !== action.meta.id));

      case ActionTypeKeys.FILTER_PRODUCTS_FULFILLED:
        return state.set('products', action.payload.products);

      case ActionTypeKeys.GET_PRODUCT_FULFILLED:
        return state.set('currentProduct', action.payload.product);

      case ActionTypeKeys.GET_PRODUCT_DETAILS_FULFILLED:
        return state.set('currentProductDetails', action.payload.product);

      case ActionTypeKeys.GET_PRODUCT_RULE_FULFILLED:
        return state.set('currentProductRule', action.payload.product_rule);

      case ActionTypeKeys.GET_INSTITUTION_PRODUCTS_FULFILLED:
        return state.set('institutionProducts', action.payload.institution_products);

      case ActionTypeKeys.GET_SERVICE_INTERFACES_FULFILLED:
        return state.set('interfaces', action.payload.interfaces);

      case ActionTypeKeys.GET_SERVICE_ENDPOINTS_FULFILLED:
        return state.set('endpoints', action.payload.endpoints);

      case ActionTypeKeys.GET_PRODUCT_APRS_FULFILLED:
        return state.set('productAprs', action.payload.product_aprs);

      case ActionTypeKeys.DELETE_PRODUCT_APR_FULFILLED:
        return state.set('productAprs', state.productAprs.filter(el => el.id !== action.meta.id));

      case ActionTypeKeys.GET_PRODUCT_FEES_FULFILLED:
        return state.set('productFees', action.payload.product_fees);

      case ActionTypeKeys.DELETE_PRODUCT_FEE_FULFILLED:
        return state.set(
          'productFees',
          state.productFees.filter(el => el.product_fee_id !== action.meta.data.productFeeId)
        );

      case ActionTypeKeys.RESET_PRODUCTS:
        return state = productsInitialState;

      default: return state;
    }
  };

export default productsReducer;
