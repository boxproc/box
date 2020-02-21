import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import { productAprs } from './mock';
import {
  ProductAprIds,
  ProductAprItem,
  ProductFeeItem,
  ProductFeesIds,
  ProductRewardItem,
  ProductRewardsIds,
} from './types';

// import { throttleUtil } from 'utils';

export const getProductAprs = (id: number) =>
  // throttleUtil.getDataAfter(productAprs, 500);
  apiClient.post(apiUrls.products.GET_APRS, {
    data: { product_id: id },
  });

export const addProductApr = (data: Partial<ProductAprItem>) =>
  apiClient.post(apiUrls.products.CREATE_APR, { data });

export const updateProductApr = (data: Partial<ProductAprItem>) =>
  apiClient.post(apiUrls.products.UPDATE_APR, { data });

export const deleteProductApr = (data: ProductAprIds) =>
  apiClient.post(apiUrls.products.DELETE_APR, {
    data: {
      product_id: data.productId,
      product_apr_id: data.productAprId,
    },
  });

export const getProductFees = (id: number) =>
  apiClient.post(apiUrls.products.GET_FEES, {
    data: { product_id: id },
  });

export const addProductFee = (data: Partial<ProductFeeItem>) =>
  apiClient.post(apiUrls.products.CREATE_FEE, { data });

export const updateProductFee = (data: Partial<ProductFeeItem>) =>
  apiClient.post(apiUrls.products.UPDATE_FEE, { data });

export const deleteProductFee = (data: ProductFeesIds) =>
  apiClient.post(apiUrls.products.DELETE_FEE, {
    data: {
      product_id: data.productId,
      product_fee_id: data.productFeeId,
    },
  });

export const getProductRewards = (id: number) =>
  apiClient.post(apiUrls.products.GET_REWARDS, {
    data: { product_id: id },
  });

export const addProductReward = (data: Partial<ProductRewardItem>) =>
  apiClient.post(apiUrls.products.CREATE_REWARD, { data });

export const updateProductReward = (data: Partial<ProductRewardItem>) =>
  apiClient.post(apiUrls.products.UPDATE_REWARD, { data });

export const deleteProductReward = (data: ProductRewardsIds) =>
  apiClient.post(apiUrls.products.DELETE_REWARD, {
    data: {
      product_id: data.productId,
      product_reward_id: data.productRewardId,
    },
  });

export const getProductFeeAprs = (id: number) =>
  apiClient.post(apiUrls.products.GET_FEE_APRS, {
    data: { product_id: id },
  });
