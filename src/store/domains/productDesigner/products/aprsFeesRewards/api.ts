import { apiClientService } from 'services';

// import { productAprsMock } from './mock';
import {
  IProductAprData,
  IProductAprIds,
  IProductFeeData,
  IProductFeesIds,
  IProductRewardData,
  IProductRewardsIds,
} from './types';

// import { throttleUtil } from 'utils';

/**
 * Get product APRs API
 */
export const getProductAprs = (id: number) =>
  // throttleUtil.getDataAfter(productAprsMock, 500);
  apiClientService.post('ui/product_designer/products/aprs/get', {
    data: { product_id: id },
  });

/**
 * Add product APR API
 */
export const addProductApr = (data: Partial<IProductAprData>) =>
  apiClientService.post('ui/product_designer/products/aprs/create', { data });
/**
 * Update product APR API
 */
export const updateProductApr = (data: Partial<IProductAprData>) =>
  apiClientService.post('ui/product_designer/products/aprs/update', { data });

/**
 * Delete product APR API
 */
export const deleteProductApr = (data: IProductAprIds) =>
  apiClientService.post('ui/product_designer/products/aprs/delete', {
    data: {
      product_id: data.productId,
      product_apr_id: data.productAprId,
    },
  });

/**
 * Get product Fees API
 */
export const getProductFees = (id: number) =>
  apiClientService.post('ui/product_designer/products/fees/get', {
    data: { product_id: id },
  });

/**
 * Add product Fee API
 */
export const addProductFee = (data: Partial<IProductFeeData>) =>
  apiClientService.post('ui/product_designer/products/fees/create', { data });

/**
 * Update product Fee API
 */
export const updateProductFee = (data: Partial<IProductFeeData>) =>
  apiClientService.post('ui/product_designer/products/fees/update', { data });

/**
 * Delete product Fee API
 */
export const deleteProductFee = (data: IProductFeesIds) =>
  apiClientService.post('ui/product_designer/products/fees/delete', {
    data: {
      product_id: data.productId,
      product_fee_id: data.productFeeId,
    },
  });

/**
 * Get product rewards API
 */
export const getProductRewards = (id: number) =>
  apiClientService.post('ui/product_designer/products/rewards/get', {
    data: { product_id: id },
  });

/**
 * Add product reward API
 */
export const addProductReward = (data: Partial<IProductRewardData>) =>
  apiClientService.post('ui/product_designer/products/rewards/create', { data });

/**
 * Update product reward API
 */
export const updateProductReward = (data: Partial<IProductRewardData>) =>
  apiClientService.post('ui/product_designer/products/rewards/update', { data });

/**
 * Delete product reward API
 */
export const deleteProductReward = (data: IProductRewardsIds) =>
  apiClientService.post('ui/product_designer/products/rewards/delete', {
    data: {
      product_id: data.productId,
      product_reward_id: data.productRewardId,
    },
  });

/**
 * Get product fee APRs API
 */
export const getProductFeeAprs = (id: number) =>
  apiClientService.post('ui/product_designer/products/fees/get_fee_aprs', {
    data: { product_id: id },
  });
