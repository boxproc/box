import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ProductAprsFeesRewardsActionTypes } from './actionTypes';
import { ProductAprsFeesRewardsState } from './types';

export const productAprsFeesRewardsInitialState:
  ImmutableObject<ProductAprsFeesRewardsState> = Immutable({
    productAprs: Immutable([]),
    productFees: Immutable([]),
    productRewards: Immutable([]),
    productFeeAprs: Immutable([]),
  });

const productAprsFeesRewardsReducer =
  (state = productAprsFeesRewardsInitialState, action: ProductAprsFeesRewardsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_PRODUCT_APRS_FULFILLED:
        return state.set('productAprs', action.payload.product_aprs);

      case ActionTypeKeys.GET_PRODUCT_FEE_APR_FULFILLED:
        return state.set('productFeeAprs', action.payload.product_fee_aprs);

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

      default: return state;
    }
  };

export default productAprsFeesRewardsReducer;
