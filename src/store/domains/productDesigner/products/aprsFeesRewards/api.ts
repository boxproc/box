import { productsURLs } from 'consts';

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
  apiClient.post(productsURLs.GET_APRS, {
    data: { product_id: id },
  });

export const addProductApr = (data: Partial<ProductAprItem>) =>
  apiClient.post(productsURLs.CREATE_APR, { data });

export const updateProductApr = (data: Partial<ProductAprItem>) =>
  apiClient.post(productsURLs.UPDATE_APR, { data });

export const deleteProductApr = (data: ProductAprIds) =>
  apiClient.post(productsURLs.DELETE_APR, {
    data: {
      product_id: data.productId,
      product_apr_id: data.productAprId,
    },
  });

export const getProductFees = (id: number) =>
  apiClient.post(productsURLs.GET_FEES, {
    data: { product_id: id },
  });

export const addProductFee = (data: Partial<ProductFeeItem>) =>
  apiClient.post(productsURLs.CREATE_FEE, { data });

export const updateProductFee = (data: Partial<ProductFeeItem>) =>
  apiClient.post(productsURLs.UPDATE_FEE, { data });

export const deleteProductFee = (data: ProductFeesIds) =>
  apiClient.post(productsURLs.DELETE_FEE, {
    data: {
      product_id: data.productId,
      product_fee_id: data.productFeeId,
    },
  });

export const getProductRewards = (id: number) =>
  apiClient.post(productsURLs.GET_REWARDS, {
    data: { product_id: id },
  });

export const addProductReward = (data: Partial<ProductRewardItem>) =>
  apiClient.post(productsURLs.CREATE_REWARD, { data });

export const updateProductReward = (data: Partial<ProductRewardItem>) =>
  apiClient.post(productsURLs.UPDATE_REWARD, { data });

export const deleteProductReward = (data: ProductRewardsIds) =>
  apiClient.post(productsURLs.DELETE_REWARD, {
    data: {
      product_id: data.productId,
      product_reward_id: data.productRewardId,
    },
  });

export const getProductFeeAprs = (id: number) =>
  apiClient.post(productsURLs.GET_FEE_APRS, {
    data: { product_id: id },
  });
