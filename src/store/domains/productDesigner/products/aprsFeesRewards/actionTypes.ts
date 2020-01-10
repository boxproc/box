import {
  ProductAprIds,
  ProductAprItems,
  ProductFeeAprItems,
  ProductFeeItems,
  ProductFeesIds,
  ProductRewardItems,
  ProductRewardsIds,
} from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_PRODUCT_FEE_APR = 'productDesigner/products/GET_PRODUCT_FEE_APR',
  GET_PRODUCT_FEE_APR_FULFILLED = 'productDesigner/products/GET_PRODUCT_FEE_APR_FULFILLED',
  GET_PRODUCT_FEE_APR_REJECTED = 'productDesigner/products/GET_PRODUCT_FEE_APR_REJECTED',

  GET_PRODUCT_APRS = 'productDesigner/products/GET_PRODUCT_APRS',
  GET_PRODUCT_APRS_FULFILLED = 'productDesigner/products/GET_PRODUCT_APRS_FULFILLED',
  GET_PRODUCT_APRS_REJECTED = 'productDesigner/products/GET_PRODUCT_APRS_REJECTED',

  ADD_PRODUCT_APR = 'productDesigner/products/ADD_PRODUCT_APR',
  ADD_PRODUCT_APR_FULFILLED = 'productDesigner/products/ADD_PRODUCT_APR_FULFILLED',
  ADD_PRODUCT_APR_REJECTED = 'productDesigner/products/ADD_PRODUCT_APR_REJECTED',

  UPDATE_PRODUCT_APR = 'productDesigner/products/UPDATE_PRODUCT_APR',
  UPDATE_PRODUCT_APR_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_APR_FULFILLED',
  UPDATE_PRODUCT_APR_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_APR_REJECTED',

  DELETE_PRODUCT_APR = 'productDesigner/products/DELETE_PRODUCT_APR',
  DELETE_PRODUCT_APR_FULFILLED = 'productDesigner/products/DELETE_PRODUCT_APR_FULFILLED',
  DELETE_PRODUCT_APR_REJECTED = 'productDesigner/products/DELETE_PRODUCT_APR_REJECTED',

  GET_PRODUCT_FEES = 'productDesigner/products/GET_PRODUCT_FEES',
  GET_PRODUCT_FEES_FULFILLED = 'productDesigner/products/GET_PRODUCT_FEES_FULFILLED',
  GET_PRODUCT_FEES_REJECTED = 'productDesigner/products/GET_PRODUCT_FEES_REJECTED',

  ADD_PRODUCT_FEE = 'productDesigner/products/ADD_PRODUCT_FEE',
  ADD_PRODUCT_FEE_FULFILLED = 'productDesigner/products/ADD_PRODUCT_FEE_FULFILLED',
  ADD_PRODUCT_FEE_REJECTED = 'productDesigner/products/ADD_PRODUCT_FEE_REJECTED',

  UPDATE_PRODUCT_FEE = 'productDesigner/products/UPDATE_PRODUCT_FEE',
  UPDATE_PRODUCT_FEE_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_FEE_FULFILLED',
  UPDATE_PRODUCT_FEE_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_FEE_REJECTED',

  DELETE_PRODUCT_FEE = 'productDesigner/products/DELETE_PRODUCT_FEE',
  DELETE_PRODUCT_FEE_FULFILLED = 'productDesigner/products/DELETE_PRODUCT_FEE_FULFILLED',
  DELETE_PRODUCT_FEE_REJECTED = 'productDesigner/products/DELETE_PRODUCT_FEE_REJECTED',

  GET_PRODUCT_REWARDS = 'productDesigner/products/GET_PRODUCT_REWARDS',
  GET_PRODUCT_REWARDS_FULFILLED = 'productDesigner/products/GET_PRODUCT_REWARDS_FULFILLED',
  GET_PRODUCT_REWARDS_REJECTED = 'productDesigner/products/GET_PRODUCT_REWARDS_REJECTED',

  ADD_PRODUCT_REWARD = 'productDesigner/products/ADD_PRODUCT_REWARD',
  ADD_PRODUCT_REWARD_FULFILLED = 'productDesigner/products/ADD_PRODUCT_REWARD_FULFILLED',
  ADD_PRODUCT_REWARD_REJECTED = 'productDesigner/products/ADD_PRODUCT_REWARD_REJECTED',

  UPDATE_PRODUCT_REWARD = 'productDesigner/products/UPDATE_PRODUCT_REWARD',
  UPDATE_PRODUCT_REWARD_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_REWARD_FULFILLED',
  UPDATE_PRODUCT_REWARD_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_REWARD_REJECTED',

  DELETE_PRODUCT_REWARD = 'productDesigner/products/DELETE_PRODUCT_REWARD',
  DELETE_PRODUCT_REWARD_FULFILLED = 'productDesigner/products/DELETE_PRODUCT_REWARD_FULFILLED',
  DELETE_PRODUCT_REWARD_REJECTED = 'productDesigner/products/DELETE_PRODUCT_REWARD_REJECTED',
}

export interface GetProductAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS;
}

export interface GetProductAprsFulfilledAction {
  readonly payload: ProductAprItems;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS_FULFILLED;
}

export interface GetProductAprsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS_REJECTED;
}

export interface GetProductFeeAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR;
}

export interface GetProductFeeAprsFulfilledAction {
  readonly payload: ProductFeeAprItems;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR_FULFILLED;
}

export interface GetProductFeeAprsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR_REJECTED;
}

export interface AddProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR;
}

export interface AddProductAprFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR_FULFILLED;
}

export interface AddProductAprRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR_REJECTED;
}

export interface UpdateProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR;
}

export interface UpdateProductAprFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR_FULFILLED;
}

export interface UpdateProductAprRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR_REJECTED;
}

export interface DeleteProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR;
}

export interface DeleteProductAprFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR_FULFILLED;
  readonly meta: { data: ProductAprIds };
}

export interface DeleteProductAprRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR_REJECTED;
}

export interface GetProductFeesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES;
}

export interface GetProductFeesFulfilledAction {
  readonly payload: ProductFeeItems;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES_FULFILLED;
}

export interface GetProductFeesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES_REJECTED;
}

export interface AddProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE;
}

export interface AddProductFeeFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE_FULFILLED;
}

export interface AddProductFeeRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE_REJECTED;
}

export interface UpdateProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE;
}

export interface UpdateProductFeeFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE_FULFILLED;
}

export interface UpdateProductFeeRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE_REJECTED;
}

export interface DeleteProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE;
}

export interface DeleteProductFeeFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE_FULFILLED;
  readonly meta: { data: ProductFeesIds };
}

export interface DeleteProductFeeRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE_REJECTED;
}

export interface GetProductRewardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS;
}

export interface GetProductRewardsFulfilledAction {
  readonly payload: ProductRewardItems;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS_FULFILLED;
}

export interface GetProductRewardsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS_REJECTED;
}

export interface AddProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD;
}

export interface AddProductRewardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD_FULFILLED;
}

export interface AddProductRewardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD_REJECTED;
}

export interface UpdateProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD;
}

export interface UpdateProductRewardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD_FULFILLED;
}

export interface UpdateProductRewardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD_REJECTED;
}

export interface DeleteProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD;
}

export interface DeleteProductRewardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD_FULFILLED;
  readonly meta: { data: ProductRewardsIds };
}

export interface DeleteProductRewardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD_REJECTED;
}

export type ProductAprsFeesRewardsActionTypes =
  | GetProductAprsFulfilledAction
  | AddProductAprFulfilledAction
  | UpdateProductAprFulfilledAction
  | DeleteProductAprFulfilledAction
  | GetProductFeesFulfilledAction
  | UpdateProductFeeFulfilledAction
  | AddProductFeeFulfilledAction
  | DeleteProductFeeFulfilledAction
  | GetProductRewardsFulfilledAction
  | UpdateProductRewardFulfilledAction
  | AddProductRewardFulfilledAction
  | DeleteProductRewardFulfilledAction
  | GetProductFeeAprsFulfilledAction;
