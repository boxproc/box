import Immutable, { ImmutableObject } from 'seamless-immutable';

import { productTypes } from 'consts';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  revolvingCreditProduct: null,
  loanProduct: null,
  prepaidProduct: null,
  debitProduct: null,
  savingsProduct: null,
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
          .set('products', action.payload.products);

      case ActionTypeKeys.SET_FILTER_PRODUCTS_PARAMS:
        return state
          .set('filterProductsParams', action.payload);

      case ActionTypeKeys.GET_PRODUCT_FULFILLED:
        if (action.payload.product.product_type === productTypes.REVOLVING_CREDIT) {
          return state.set('revolvingCreditProduct', action.payload.product);
        } else if (action.payload.product.product_type === productTypes.LOAN) {
          return state.set('loanProduct', action.payload.product);
        } else if (action.payload.product.product_type === productTypes.DEBIT) {
          return state.set('debitProduct', action.payload.product);
        } else if (action.payload.product.product_type === productTypes.PREPAID) {
          return state.set('prepaidProduct', action.payload.product);
        } else if (action.payload.product.product_type === productTypes.SAVINGS) {
          return state.set('savingsProduct', action.payload.product);
        }
        return state;

      default: return state;
    }
  };

export default productsReducer;
