import { ImmutableArray } from 'seamless-immutable';

import { SelectValues } from 'types';

export interface ProductAprItem {
  product_id: number;
  product_apr_id: number;
  description: string;
  calculation_method: string | number;
  rate: number;
  grace_number_of_days: number;
}

export interface ProductAprItems {
  product_aprs: Array<ProductAprItem>;
}

export interface ProductFeeAprItemResp {
  product_apr_id: number | string;
  apr_description: string;
}

export interface ProductFeeAprItems {
  product_fee_aprs: Array<ProductFeeAprItemResp>;
}

export interface ProductAprIds {
  productId: number;
  productAprId: number;
}

export interface ProductAprPlainInfo extends ProductAprIds {
  description: string;
  rate: number;
  graceNumberOfDays: number;
}

export interface ProductApr extends ProductAprPlainInfo {
  calculationMethod: string;
}

export interface ProductAprFormValues extends ProductAprPlainInfo {
  calculationMethod: SelectValues;
}

export interface ProductAprs {
  product_aprs: Array<ProductApr>;
}

export interface ProductFeeItem {
  product_id: number;
  product_fee_id: number;
  description: string;
  rate: number;
  amount: number;
  apr_description: string;
  fee_application_condition: string | number;
  apr_id: string | number;
}

export interface ProductFeeItems {
  product_fees: Array<ProductFeeItem>;
}

export interface ProductFeesIds {
  productId: number;
  productFeeId: number;
}

export interface ProductFeePlainInfo extends ProductFeesIds {
  description: string;
  rate: number;
  amount: number;
}

export interface ProductFee extends ProductFeePlainInfo {
  feeApplicationCondition: string;
  feeApplicationConditionValue: string | number;
  apr: SelectValues;
}

export interface ProductFeeFormValues extends ProductFeePlainInfo {
  feeApplicationCondition: SelectValues;
  apr: SelectValues;
}

export interface ProductFees {
  product_fees: Array<ProductFee>;
}

export interface ProductRewardItem {
  product_id: number;
  product_reward_id: number;
  description: string;
  rate: number;
  amount: number;
  reward_application_condition: string | number;
}

export interface ProductRewardItems {
  product_rewards: Array<ProductRewardItem>;
}

export interface ProductRewardsIds {
  productId: number;
  productRewardId: number;
}

export interface ProductRewardPlainInfo extends ProductRewardsIds {
  description: string;
  rate: number;
  amount: number;
}

export interface ProductReward extends ProductRewardPlainInfo {
  rewardApplicationCondition: string;
  rewardApplicationConditionValue: string | number;
}

export interface ProductRewardFormValues extends ProductRewardPlainInfo {
  rewardApplicationCondition: SelectValues;
}

export interface ProductRewards {
  product_rewards: Array<ProductReward>;
}

export interface ProductAprsFeesRewardsState {
  productAprs: ImmutableArray<ProductAprItem>;
  productFees: ImmutableArray<ProductFeeItem>;
  productRewards: ImmutableArray<ProductRewardItem>;
  productFeeAprs: ImmutableArray<ProductFeeAprItemResp>;
}
