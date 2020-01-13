import {
  aprTypesOptions,
  feeTypesOptions,
  rewardsTypesOptions,
} from 'consts';

import {
  ProductApr,
  ProductAprFormValues,
  ProductAprItem,
  ProductAprPlainInfo,
  ProductFee,
  ProductFeeFormValues,
  ProductFeeItem,
  ProductFeePlainInfo,
  ProductReward,
  ProductRewardFormValues,
  ProductRewardItem,
  ProductRewardPlainInfo,
} from './types';

import { stringsUtil } from 'utils';

export const prepareProductAprsToRender = (data: ProductAprItem): ProductApr => {
  if (!data) {
    return null;
  }

  const {
    product_apr_id,
    product_id,
    description,
    calculation_method,
    rate,
    grace_number_of_days,
  } = data;

  const calculationMethod = aprTypesOptions.find(el => el.value === calculation_method);

  return {
    productAprId: product_apr_id,
    productId: product_id,
    description,
    calculationMethod: calculationMethod && calculationMethod.label,
    rate,
    graceNumberOfDays: grace_number_of_days,
  };
};

export const prepareProductAprs = (data: Partial<ProductAprPlainInfo>): Partial<ProductAprItem> => {
  if (!data) {
    return null;
  }

  const {
    productAprId,
    productId,
    description,
    rate,
    graceNumberOfDays,
  } = data;

  return {
    product_apr_id: productAprId,
    product_id: productId,
    description,
    rate: stringsUtil.toNumber(rate),
    grace_number_of_days: stringsUtil.toNumber(graceNumberOfDays),
  };
};

export const prepareFormDataProductAprsToSend = (data: Partial<ProductAprFormValues>):
  Partial<ProductAprItem> => {
  if (!data) {
    return null;
  }

  const { calculationMethod } = data;

  return {
    ...prepareProductAprs(data),
    calculation_method: calculationMethod && calculationMethod.value,
  };
};

export const prepareProductAprsToSend = (data: Partial<ProductApr>): Partial<ProductAprItem> => {
  if (!data) {
    return null;
  }

  const calculationMethod = aprTypesOptions.find(el => el.label === data.calculationMethod);

  return {
    ...prepareProductAprs(data),
    calculation_method: calculationMethod && calculationMethod.value,
  };
};

export const prepareProductFeesToRender = (data: ProductFeeItem): ProductFee => {
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
    rate,
    amount,
    feeApplicationCondition: feeApplicationCondition && feeApplicationCondition.label,
    feeApplicationConditionValue: fee_application_condition,
    apr: { value: apr_id, label: apr_description },
  };
};

export const prepareProductFees = (data: Partial<ProductFeePlainInfo>): Partial<ProductFeeItem> => {
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

export const prepareFormDataProductFeesToSend = (data: Partial<ProductFeeFormValues>):
  Partial<ProductFeeItem> => {
  if (!data) {
    return null;
  }

  const { feeApplicationCondition, apr } = data;

  return {
    ...prepareProductFees(data),
    fee_application_condition: feeApplicationCondition && feeApplicationCondition.value,
    apr_id: apr && apr.value,
  };
};

export const prepareProductFeesToSend = (data: Partial<ProductFee>): Partial<ProductFeeItem> => {
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

export const prepareProductRewardsToRender = (data: ProductRewardItem): ProductReward => {
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
    rate,
    amount,
    rewardApplicationCondition: rewardApplicationCondition && rewardApplicationCondition.label,
    rewardApplicationConditionValue: reward_application_condition,
  };
};

export const prepareProductRewards = (data: Partial<ProductRewardPlainInfo>):
  Partial<ProductRewardItem> => {
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

export const prepareFormDataProductRewardsToSend = (data: Partial<ProductRewardFormValues>):
  Partial<ProductRewardItem> => {
  if (!data) {
    return null;
  }

  const { rewardApplicationCondition } = data;

  return {
    ...prepareProductRewards(data),
    reward_application_condition: rewardApplicationCondition && rewardApplicationCondition.value,
  };
};

export const prepareProductRewardsToSend = (data: Partial<ProductReward>):
  Partial<ProductRewardItem> => {
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
