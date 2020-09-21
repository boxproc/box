import { ImmutableArray } from 'seamless-immutable';

import { ISelectValue } from 'types';

/**
 * Product APRs interfaces
 */

export interface IProductAprData {
  product_id: number;
  product_apr_id: number;
  description: string;
  calculation_method: string | number;
  rate: number;
  initial_interest_free_days: number;
  repayment_priority: number;
  always_charge_interest: string;
}

export interface IProductAprsData {
  product_aprs: Array<IProductAprData>;
}

export interface IProductAprIds {
  productId: number;
  productAprId: number;
}

export interface IProductAprPlain extends IProductAprIds {
  description: string;
  rate: string;
  initialInterestFreeDays: number;
  repaymentPriority: number;
  alwaysChargeInterest: boolean;
}

export interface IProductApr extends IProductAprPlain {
  calculationMethod: string;
}

export interface IProductAprFormValues extends IProductAprPlain {
  calculationMethod: ISelectValue;
}

export interface IProductFeeAprData {
  product_apr_id: number | string;
  apr_description: string;
}

export interface IProductFeesAprsData {
  product_fee_aprs: Array<IProductFeeAprData>;
}

/**
 * Product Fees interfaces
 */

export interface IProductFeeData {
  product_id: number;
  product_fee_id: number;
  description: string;
  rate: number;
  amount: number;
  apr_description: string;
  fee_application_condition: string | number;
  apr_id: string | number;
}

export interface IProductFeesData {
  product_fees: Array<IProductFeeData>;
}

export interface IProductFeesIds {
  productId: number;
  productFeeId: number;
}

export interface IProductFeePlain extends IProductFeesIds {
  description: string;
  rate: string;
  amount: string;
}

export interface IProductFee extends IProductFeePlain {
  feeApplicationCondition: string;
  feeApplicationConditionValue: string | number;
  apr: ISelectValue;
}

export interface IProductFeeFormValues extends IProductFeePlain {
  feeApplicationCondition: ISelectValue;
  apr: ISelectValue;
}

/**
 * Product Rewards interfaces
 */

export interface IProductRewardData {
  product_id: number;
  product_reward_id: number;
  description: string;
  rate: number;
  amount: number;
  reward_application_condition: string | number;
}

export interface IProductRewardsData {
  product_rewards: Array<IProductRewardData>;
}

export interface IProductRewardsIds {
  productId: number;
  productRewardId: number;
}

export interface IProductRewardPlain extends IProductRewardsIds {
  description: string;
  rate: string;
  amount: string;
}

export interface IProductReward extends IProductRewardPlain {
  rewardApplicationCondition: string;
  rewardApplicationConditionValue: string | number;
}

export interface IProductRewardFormValues extends IProductRewardPlain {
  rewardApplicationCondition: ISelectValue;
}

/**
 * Product APRs, rewards and fees state interface
 */
export interface IProductAprsFeesRewardsState {
  productAprs: ImmutableArray<IProductAprData>;
  productFees: ImmutableArray<IProductFeeData>;
  productRewards: ImmutableArray<IProductRewardData>;
  productFeeAprs: ImmutableArray<IProductFeeAprData>;
}
