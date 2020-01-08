import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductsActionTypes } from './actionTypes';
import { ProductsState } from './types';

export const productsInitialState: ImmutableObject<ProductsState> = Immutable({
  products: Immutable([]),
  institutionProducts: Immutable([]),
  currentProduct: null,
  currentProductDetails: null,
  productAprs: Immutable([]),
  productFees: Immutable([]),
  productRewards: Immutable([]),
  productFeeAprs: Immutable([]),
  productIllustration: Immutable([]),
  productRevolvingCreditIllustration: {
    statements: Immutable([]),
    aprs: Immutable([]),
    rewards: Immutable([]),
    fees: Immutable([]),
    transactions: Immutable([]),
  },
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

      case ActionTypeKeys.GET_INSTITUTION_PRODUCTS_FULFILLED:
        return state.set('institutionProducts', action.payload.institution_products);

      case ActionTypeKeys.GET_PRODUCT_APRS_FULFILLED:
        return state.set('productAprs', action.payload.product_aprs);

      case ActionTypeKeys.GET_PRODUCT_FEE_APR_FULFILLED:
        return state.set('productFeeAprs', action.payload.product_fee_aprs);

      case ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN_FULFILLED:
        return state.set('productIllustration', action.payload.product_information);

      case ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_FULFILLED:
        return state.set(
          'productRevolvingCreditIllustration',
          action.payload.revolving_credit_information
        );

      case ActionTypeKeys.RESET_ILLUSTRATION_LOAN:
        return state.set('productIllustration', Immutable([]));

      case ActionTypeKeys.DELETE_PRODUCT_APR_FULFILLED:
        return state.set(
          'productAprs',
          state.productAprs.filter(el => el.product_apr_id !== action.meta.data.productAprId)
        );

      case ActionTypeKeys.GET_PRODUCT_FEES_FULFILLED:
        return state.set('productFees', action.payload.product_fees);

      case ActionTypeKeys.DELETE_PRODUCT_FEE_FULFILLED:
        return state.set(
          'productFees',
          state.productFees.filter(el => el.product_fee_id !== action.meta.data.productFeeId)
        );

      case ActionTypeKeys.GET_PRODUCT_REWARDS_FULFILLED:
        return state.set('productRewards', action.payload.product_rewards);

      case ActionTypeKeys.DELETE_PRODUCT_REWARD_FULFILLED:
        return state.set(
          'productRewards',
          state
            .productRewards
            .filter(el => el.product_reward_id !== action.meta.data.productRewardId)
        );

      case ActionTypeKeys.RESET_PRODUCTS:
        return state = productsInitialState;

      default: return state;
    }
  };

export default productsReducer;
