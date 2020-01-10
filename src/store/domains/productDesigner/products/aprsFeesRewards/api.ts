import { productsPathNames } from 'consts';

import { apiClient } from 'services';

import {
  ProductAprIds,
  ProductAprItem,
  ProductFeeItem,
  ProductFeesIds,
  ProductRewardItem,
  ProductRewardsIds,
} from './types';

export const getProductAprs = (id: number) =>
  apiClient.post(productsPathNames.GET_APRS, {
    data: { product_id: id },
  });

export const addProductApr = (data: Partial<ProductAprItem>) =>
  apiClient.post(productsPathNames.CREATE_APR, { data });

export const updateProductApr = (data: Partial<ProductAprItem>) =>
  apiClient.post(productsPathNames.UPDATE_APR, { data });

export const deleteProductApr = (data: ProductAprIds) =>
  apiClient.post(productsPathNames.DELETE_APR, {
    data: {
      product_id: data.productId,
      product_apr_id: data.productAprId,
    },
  });

export const getProductFees = (id: number) =>
  apiClient.post(productsPathNames.GET_FEES, {
    data: { product_id: id },
  });

export const addProductFee = (data: Partial<ProductFeeItem>) =>
  apiClient.post(productsPathNames.CREATE_FEE, { data });

export const updateProductFee = (data: Partial<ProductFeeItem>) =>
  apiClient.post(productsPathNames.UPDATE_FEE, { data });

export const deleteProductFee = (data: ProductFeesIds) =>
  apiClient.post(productsPathNames.DELETE_FEE, {
    data: {
      product_id: data.productId,
      product_fee_id: data.productFeeId,
    },
  });

export const getProductRewards = (id: number) =>
  apiClient.post(productsPathNames.GET_REWARDS, {
    data: { product_id: id },
  });

export const addProductReward = (data: Partial<ProductRewardItem>) =>
  apiClient.post(productsPathNames.CREATE_REWARD, { data });

export const updateProductReward = (data: Partial<ProductRewardItem>) =>
  apiClient.post(productsPathNames.UPDATE_REWARD, { data });

export const deleteProductReward = (data: ProductRewardsIds) =>
  apiClient.post(productsPathNames.DELETE_REWARD, {
    data: {
      product_id: data.productId,
      product_reward_id: data.productRewardId,
    },
  });

export const getProductFeeAprs = (id: number) =>
  apiClient.post(productsPathNames.GET_FEE_APRS, {
    data: { product_id: id },
  });
