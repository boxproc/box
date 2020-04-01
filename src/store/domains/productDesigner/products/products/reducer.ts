import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TProductsAction } from './actionTypes';
import { IProductsState } from './types';

export const productsInitialState: ImmutableObject<IProductsState> = Immutable({
  products: Immutable([]),
  institutionProducts: Immutable([]),
  currentProduct: null,
  currentProductDetails: null,
});

const productsReducer = (state = productsInitialState, action: TProductsAction) => {
  switch (action.type) {
    case ActionTypeKeys.DELETE_PRODUCT_FULFILLED:
      return state.set('products', state.products.filter(el => el.id !== action.meta.id));

    case ActionTypeKeys.FILTER_PRODUCTS_FULFILLED:
      return state.set('products', action.payload.products);

    case ActionTypeKeys.GET_PRODUCT_FULFILLED:
      return state.set('currentProduct', action.payload.product);

    case ActionTypeKeys.GET_PRODUCT_DETAILS_FULFILLED:
      return state.set('currentProductDetails', action.payload.product);

    case ActionTypeKeys.UPDATE_PRODUCT_DETAILS_FULFILLED:
      return state.set('currentProductDetails', action.meta);

    case ActionTypeKeys.GET_INSTITUTION_PRODUCTS_FULFILLED:
      return state.set('institutionProducts', action.payload.institution_products);

    case ActionTypeKeys.RESET_PRODUCTS:
      return state = productsInitialState;

    default: return state;
  }
};

export default productsReducer;
