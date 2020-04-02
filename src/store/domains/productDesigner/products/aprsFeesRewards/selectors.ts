import { createSelector } from 'reselect';
import { IStoreState } from 'store';

import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import {
  prepareProductAprsToRender,
  prepareProductFeesToRender,
  prepareProductRewardsToRender,
} from './utils';

export const defaultProductAprsSelector = (state: IStoreState) =>
  state.productDesigner.productAprsFeesRewards.productAprs;

export const productAprsSelector = createSelector(
  defaultProductAprsSelector,
  data => data && data.map(el => prepareProductAprsToRender(el))
);

export const productAprsForRulesSelector = createSelector(
  defaultProductAprsSelector,
  data => data && data.map(el => {
    return {
      name: el.product_apr_id,
      description: el.description,
    };
  })
);

export const defaultProductFeesSelector = (state: IStoreState) =>
  state.productDesigner.productAprsFeesRewards.productFees;

export const productFeesSelector = createSelector(
  defaultProductFeesSelector,
  data => data && data.map(el => prepareProductFeesToRender(el))
);

export const productFeesForRulesSelector = createSelector(
  defaultProductFeesSelector,
  data => data && data.map(el => {
    return {
      name: el.product_fee_id,
      description: el.description,
    };
  })
);

export const defaultProductRewardsSelector = (state: IStoreState) =>
  state.productDesigner.productAprsFeesRewards.productRewards;

export const productRewardsSelector = createSelector(
  defaultProductRewardsSelector,
  data => data && data.map(el => prepareProductRewardsToRender(el))
);

export const productRewardsForRulesSelector = createSelector(
  defaultProductRewardsSelector,
  data => data && data.map(el => {
    return {
      name: el.product_reward_id,
      description: el.description,
    };
  })
);
export const defaultFeeAprsSelector = (state: IStoreState) =>
  state.productDesigner.productAprsFeesRewards.productFeeAprs;

export const feeAprsOptionsSelector = createSelector(
  defaultFeeAprsSelector,
  data => data && data.asMutable().map(el => {
    return {
      value: el.product_apr_id,
      label: el.apr_description,
    };
  })
);

export const isProductAprsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_PRODUCT_APRS,
]);

export const isProductAprsDeletingSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_PRODUCT_APR,
]);

export const isProductAprsAddingSelector = createLoadingSelector([
  ActionTypeKeys.ADD_PRODUCT_APR,
]);

export const isProductFeeAprsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_PRODUCT_FEE_APR,
]);

export const isProductFeesLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_PRODUCT_FEES,
]);

export const isProductFeesDeletingSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_PRODUCT_FEE,
]);

export const isProductFeesAddingSelector = createLoadingSelector([
  ActionTypeKeys.ADD_PRODUCT_FEE,
]);

export const isProductRewardsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_PRODUCT_REWARDS,
]);

export const isProductRewardsDeletingSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_PRODUCT_REWARD,
]);

export const isProductRewardsAddingSelector = createLoadingSelector([
  ActionTypeKeys.ADD_PRODUCT_REWARD,
]);
