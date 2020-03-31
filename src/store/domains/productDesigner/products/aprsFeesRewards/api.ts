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

export const getProductAprs = (id: number) =>
  // throttleUtil.getDataAfter(productAprsMock, 500);
  apiClientService.post('ui/product_designer/products/aprs/get', {
    data: { product_id: id },
  });

export const addProductApr = (data: Partial<IProductAprData>) =>
  apiClientService.post('ui/product_designer/products/aprs/create', { data });

export const updateProductApr = (data: Partial<IProductAprData>) =>
  apiClientService.post('ui/product_designer/products/aprs/update', { data });

export const deleteProductApr = (data: IProductAprIds) =>
  apiClientService.post('ui/product_designer/products/aprs/delete', {
    data: {
      product_id: data.productId,
      product_apr_id: data.productAprId,
    },
  });

export const getProductFees = (id: number) =>
  apiClientService.post('ui/product_designer/products/fees/get', {
    data: { product_id: id },
  });

export const addProductFee = (data: Partial<IProductFeeData>) =>
  apiClientService.post('ui/product_designer/products/fees/create', { data });

export const updateProductFee = (data: Partial<IProductFeeData>) =>
  apiClientService.post('ui/product_designer/products/fees/update', { data });

export const deleteProductFee = (data: IProductFeesIds) =>
  apiClientService.post('ui/product_designer/products/fees/delete', {
    data: {
      product_id: data.productId,
      product_fee_id: data.productFeeId,
    },
  });

export const getProductRewards = (id: number) =>
  apiClientService.post('ui/product_designer/products/rewards/get', {
    data: { product_id: id },
  });

export const addProductReward = (data: Partial<IProductRewardData>) =>
  apiClientService.post('ui/product_designer/products/rewards/create', { data });

export const updateProductReward = (data: Partial<IProductRewardData>) =>
  apiClientService.post('ui/product_designer/products/rewards/update', { data });

export const deleteProductReward = (data: IProductRewardsIds) =>
  apiClientService.post('ui/product_designer/products/rewards/delete', {
    data: {
      product_id: data.productId,
      product_reward_id: data.productRewardId,
    },
  });

export const getProductFeeAprs = (id: number) =>
  apiClientService.post('ui/product_designer/products/fees/get_fee_aprs', {
    data: { product_id: id },
  });
