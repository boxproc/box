import {
  aprTypesOptions,
  feeTypesOptions,
  rewardsTypesOptions,
} from 'consts';

import {
  IProductApr,
  IProductAprData,
  IProductAprFormValues,
  IProductAprPlain,
  IProductFee,
  IProductFeeData,
  IProductFeeFormValues,
  IProductFeePlain,
  IProductReward,
  IProductRewardData,
  IProductRewardFormValues,
  IProductRewardPlain,
} from './types';

import { stringsUtil } from 'utils';

export const prepareProductAprsToRender = (data: IProductAprData): IProductApr => {
  if (!data) {
    return null;
  }

  const {
    product_apr_id,
    product_id,
    description,
    calculation_method,
    rate,
    initial_interest_free_days,
  } = data;

  const calculationMethod = aprTypesOptions.find(el => el.value === calculation_method);

  return {
    productAprId: product_apr_id,
    productId: product_id,
    description,
    calculationMethod: calculationMethod && calculationMethod.label,
    rate: stringsUtil.numberToFixed(rate, 2),
    initialInterestFreeDays: initial_interest_free_days,
  };
};

export const prepareProductAprs = (data: Partial<IProductAprPlain>): Partial<IProductAprData> => {
  if (!data) {
    return null;
  }

  const {
    productAprId,
    productId,
    description,
    rate,
    initialInterestFreeDays,
  } = data;

  return {
    product_apr_id: productAprId,
    product_id: productId,
    description,
    rate: stringsUtil.toNumber(rate),
    initial_interest_free_days: stringsUtil.toNumber(initialInterestFreeDays),
  };
};

export const prepareFormDataProductAprsToSend = (data: Partial<IProductAprFormValues>):
  Partial<IProductAprData> => {
  if (!data) {
    return null;
  }

  const { calculationMethod } = data;

  return {
    ...prepareProductAprs(data),
    calculation_method: calculationMethod && calculationMethod.value,
  };
};

export const prepareProductAprsToSend = (data: Partial<IProductApr>): Partial<IProductAprData> => {
  if (!data) {
    return null;
  }

  const { calculationMethod } = data;

  const calculationMethodOption = aprTypesOptions.find(el => el.label === calculationMethod);

  return {
    ...prepareProductAprs(data),
    calculation_method: calculationMethodOption && calculationMethodOption.value,
  };
};

export const prepareProductFeesToRender = (data: IProductFeeData): IProductFee => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    product_fee_id,
    description,
    rate,
    amount,
    fee_application_condition,
    apr_description,
    apr_id,
  } = data;

  const feeApplicationCondition = feeTypesOptions
    .find(el => el.value === fee_application_condition);

  return {
    productId: product_id,
    productFeeId: product_fee_id,
    description,
    rate: stringsUtil.numberToFixed(rate, 2),
    amount: stringsUtil.numberToFixed(amount, 2),
    feeApplicationCondition: feeApplicationCondition && feeApplicationCondition.label,
    feeApplicationConditionValue: fee_application_condition,
    apr: { value: apr_id, label: apr_description },
  };
};

export const prepareProductFees = (data: Partial<IProductFeePlain>): Partial<IProductFeeData> => {
  if (!data) {
    return null;
  }

  const {
    productId,
    productFeeId,
    description,
    rate,
    amount,
  } = data;

  return {
    product_id: productId,
    product_fee_id: productFeeId,
    description,
    rate: stringsUtil.toNumber(rate),
    amount: stringsUtil.toNumber(amount),
  };
};

export const prepareFormDataProductFeesToSend = (data: Partial<IProductFeeFormValues>):
  Partial<IProductFeeData> => {
  if (!data) {
    return null;
  }

  const { feeApplicationCondition, apr } = data;

  return {
    ...prepareProductFees(data),
    fee_application_condition: feeApplicationCondition ? feeApplicationCondition.value : null,
    apr_id: apr ? apr.value : null,
  };
};

export const prepareProductFeesToSend = (data: Partial<IProductFee>): Partial<IProductFeeData> => {
  if (!data) {
    return null;
  }

  const { apr } = data;

  const feeApplicationCondition = feeTypesOptions
    .find(el => el.label === data.feeApplicationCondition);

  return {
    ...prepareProductFees(data),
    fee_application_condition: feeApplicationCondition && feeApplicationCondition.value,
    apr_id: apr && apr.value,
  };
};

export const prepareProductRewardsToRender = (data: IProductRewardData): IProductReward => {
  if (!data) {
    return null;
  }

  const {
    product_id,
    product_reward_id,
    description,
    rate,
    amount,
    reward_application_condition,
  } = data;

  const rewardApplicationCondition = rewardsTypesOptions
    .find(el => el.value === reward_application_condition);

  return {
    productId: product_id,
    productRewardId: product_reward_id,
    description,
    rate: stringsUtil.numberToFixed(rate, 2),
    amount: stringsUtil.numberToFixed(amount, 2),
    rewardApplicationCondition: rewardApplicationCondition && rewardApplicationCondition.label,
    rewardApplicationConditionValue: reward_application_condition,
  };
};

export const prepareProductRewards = (data: Partial<IProductRewardPlain>):
  Partial<IProductRewardData> => {
  if (!data) {
    return null;
  }

  const {
    productId,
    productRewardId,
    description,
    rate,
    amount,
  } = data;

  return {
    product_id: productId,
    product_reward_id: productRewardId,
    description,
    rate: stringsUtil.toNumber(rate),
    amount: stringsUtil.toNumber(amount),
  };
};

export const prepareFormDataProductRewardsToSend = (data: Partial<IProductRewardFormValues>):
  Partial<IProductRewardData> => {
  if (!data) {
    return null;
  }

  const { rewardApplicationCondition } = data;

  return {
    ...prepareProductRewards(data),
    reward_application_condition: rewardApplicationCondition && rewardApplicationCondition.value,
  };
};

export const prepareProductRewardsToSend = (data: Partial<IProductReward>):
  Partial<IProductRewardData> => {
  if (!data) {
    return null;
  }

  const rewardApplicationCondition = rewardsTypesOptions
    .find(el => el.label === data.rewardApplicationCondition);

  return {
    ...prepareProductRewards(data),
    reward_application_condition: rewardApplicationCondition && rewardApplicationCondition.value,
  };
};
