import { createSelector } from 'reselect';

import { IStoreState } from 'store';

import {
  prepareProductAprsToRender,
  prepareProductFeesToRender,
  prepareProductRewardsToRender,
} from './utils';

export const selectDefaultProductAprs = (state: IStoreState) =>
  state.productDesigner.productAprsFeesRewards.productAprs;

export const selectProductAprs = createSelector(
  selectDefaultProductAprs,
  aprs => aprs && aprs.map(apr => prepareProductAprsToRender(apr))
);

export const selectProductAprsForRules = createSelector(
  selectDefaultProductAprs,
  aprs => aprs && aprs.map(apr => {
    return {
      name: apr.product_apr_id,
      description: apr.description,
    };
  })
);

export const selectDefaultProductFees = (state: IStoreState) =>
  state.productDesigner.productAprsFeesRewards.productFees;

export const selectProductFees = createSelector(
  selectDefaultProductFees,
  fees => fees && fees.map(fee => prepareProductFeesToRender(fee))
);

export const selectProductFeesForRules = createSelector(
  selectDefaultProductFees,
  fees => fees && fees.map(fee => {
    return {
      name: fee.product_fee_id,
      description: fee.description,
    };
  })
);

export const selectDefaultProductRewards = (state: IStoreState) =>
  state.productDesigner.productAprsFeesRewards.productRewards;

export const selectProductRewards = createSelector(
  selectDefaultProductRewards,
  rewards => rewards && rewards.map(reward => prepareProductRewardsToRender(reward))
);

export const selectProductRewardsForRules = createSelector(
  selectDefaultProductRewards,
  rewards => rewards && rewards.map(reward => {
    return {
      name: reward.product_reward_id,
      description: reward.description,
    };
  })
);
export const selectDefaultAprs = (state: IStoreState) =>
  state.productDesigner.productAprsFeesRewards.productFeeAprs;

export const selectAprsOptions = createSelector(
  selectDefaultAprs,
  items => items && items.asMutable().map(item => {
    return {
      value: item.product_apr_id,
      label: item.apr_description,
    };
  })
);
