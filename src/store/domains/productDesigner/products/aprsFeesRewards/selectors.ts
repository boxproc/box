import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import {
  prepareProductAprsToRender,
  prepareProductFeesToRender,
  prepareProductRewardsToRender,
} from './utils';

export const selectDefaultProductAprs = (state: StoreState) =>
  state.productDesigner.productAprsFeesRewards.productAprs;

export const selectProductAprs = createSelector(
  selectDefaultProductAprs,
  aprs => aprs
    && aprs.asMutable()
      .sort((a, b) => (a.repayment_order > b.repayment_order) ? 1 : -1)
      .map(apr => prepareProductAprsToRender(apr))
);

export const selectProductAprDefaultRepaymentOrder = createSelector(
  selectDefaultProductAprs,
  aprs => {
    if (!aprs || !aprs.length) {
      return null;
    }

    const repaymentOrders: Array<number> = [];

    aprs.forEach(apr => repaymentOrders.push(apr.repayment_order as number));

    return Math.max(...repaymentOrders) + 1;
  }
);

export const selectProductAprsForRules = createSelector(
  selectDefaultProductAprs,
  aprs => aprs && aprs.asMutable().map(apr => {
    return {
      name: apr.product_apr_id,
      description: apr.description,
    };
  })
);

export const selectDefaultProductFees = (state: StoreState) =>
  state.productDesigner.productAprsFeesRewards.productFees;

export const selectProductFees = createSelector(
  selectDefaultProductFees,
  fees => fees && fees.asMutable().map(fee => prepareProductFeesToRender(fee))
);

export const selectProductFeesForRules = createSelector(
  selectDefaultProductFees,
  fees => fees && fees.asMutable().map(fee => {
    return {
      name: fee.product_fee_id,
      description: fee.description,
    };
  })
);

export const selectDefaultProductRewards = (state: StoreState) =>
  state.productDesigner.productAprsFeesRewards.productRewards;

export const selectProductRewards = createSelector(
  selectDefaultProductRewards,
  rewards => rewards && rewards.asMutable().map(reward => prepareProductRewardsToRender(reward))
);

export const selectProductRewardsForRules = createSelector(
  selectDefaultProductRewards,
  rewards => rewards && rewards.asMutable().map(reward => {
    return {
      name: reward.product_reward_id,
      description: reward.description,
    };
  })
);
export const selectDefaultAprs = (state: StoreState) =>
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
