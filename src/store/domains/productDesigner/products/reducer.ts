import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  currentProductId: null,
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
          .set('products', action.payload.products)
          .set('filterProductsParams', action.meta);

      case ActionTypeKeys.GET_PRODUCT_FULFILLED:
        return state
          .set('currentProductId', action.meta);
      // if (action.payload.product.product_type === productTypes.REVOLVING_CREDIT) {
      //   return state
      //     .set('currentProductId', action.meta)
      //     .set('revolvingCreditProduct', action.payload.product);
      // } else if (action.payload.product.product_type === productTypes.LOAN) {
      //   return state
      //     .set('currentProductId', action.meta)
      //     .set('loanProduct', action.payload.product);
      // } else if (action.payload.product.product_type === productTypes.DEBIT) {
      //   return state
      //     .set('currentProductId', action.meta)
      //     .set('debitProduct', action.payload.product);
      // } else if (action.payload.product.product_type === productTypes.PREPAID) {
      //   return state
      //     .set('currentProductId', action.meta)
      //     .set('prepaidProduct', action.payload.product);
      // } else if (action.payload.product.product_type === productTypes.SAVINGS) {
      //   return state
      //     .set('currentProductId', action.meta)
      //     .set('savingsProduct', action.payload.product);
      // } else {
      //   return state;
      // }

      default: return state;
    }
  };

export default productsReducer;
