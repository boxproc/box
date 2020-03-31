import {
  IProductAprIds,
  IProductAprsData,
  IProductFeesAprsData,
  IProductFeesData,
  IProductFeesIds,
  IProductRewardsData,
  IProductRewardsIds,
} from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_PRODUCT_FEE_APR = 'products/GET_PRODUCT_FEE_APR',
  GET_PRODUCT_FEE_APR_FULFILLED = 'products/GET_PRODUCT_FEE_APR_FULFILLED',
  GET_PRODUCT_FEE_APR_REJECTED = 'products/GET_PRODUCT_FEE_APR_REJECTED',

  GET_PRODUCT_APRS = 'products/GET_PRODUCT_APRS',
  GET_PRODUCT_APRS_FULFILLED = 'products/GET_PRODUCT_APRS_FULFILLED',
  GET_PRODUCT_APRS_REJECTED = 'products/GET_PRODUCT_APRS_REJECTED',

  ADD_PRODUCT_APR = 'products/ADD_PRODUCT_APR',
  ADD_PRODUCT_APR_FULFILLED = 'products/ADD_PRODUCT_APR_FULFILLED',
  ADD_PRODUCT_APR_REJECTED = 'products/ADD_PRODUCT_APR_REJECTED',

  UPDATE_PRODUCT_APR = 'products/UPDATE_PRODUCT_APR',
  UPDATE_PRODUCT_APR_FULFILLED = 'products/UPDATE_PRODUCT_APR_FULFILLED',
  UPDATE_PRODUCT_APR_REJECTED = 'products/UPDATE_PRODUCT_APR_REJECTED',

  DELETE_PRODUCT_APR = 'products/DELETE_PRODUCT_APR',
  DELETE_PRODUCT_APR_FULFILLED = 'products/DELETE_PRODUCT_APR_FULFILLED',
  DELETE_PRODUCT_APR_REJECTED = 'products/DELETE_PRODUCT_APR_REJECTED',

  GET_PRODUCT_FEES = 'products/GET_PRODUCT_FEES',
  GET_PRODUCT_FEES_FULFILLED = 'products/GET_PRODUCT_FEES_FULFILLED',
  GET_PRODUCT_FEES_REJECTED = 'products/GET_PRODUCT_FEES_REJECTED',

  ADD_PRODUCT_FEE = 'products/ADD_PRODUCT_FEE',
  ADD_PRODUCT_FEE_FULFILLED = 'products/ADD_PRODUCT_FEE_FULFILLED',
  ADD_PRODUCT_FEE_REJECTED = 'products/ADD_PRODUCT_FEE_REJECTED',

  UPDATE_PRODUCT_FEE = 'products/UPDATE_PRODUCT_FEE',
  UPDATE_PRODUCT_FEE_FULFILLED = 'products/UPDATE_PRODUCT_FEE_FULFILLED',
  UPDATE_PRODUCT_FEE_REJECTED = 'products/UPDATE_PRODUCT_FEE_REJECTED',

  DELETE_PRODUCT_FEE = 'products/DELETE_PRODUCT_FEE',
  DELETE_PRODUCT_FEE_FULFILLED = 'products/DELETE_PRODUCT_FEE_FULFILLED',
  DELETE_PRODUCT_FEE_REJECTED = 'products/DELETE_PRODUCT_FEE_REJECTED',

  GET_PRODUCT_REWARDS = 'products/GET_PRODUCT_REWARDS',
  GET_PRODUCT_REWARDS_FULFILLED = 'products/GET_PRODUCT_REWARDS_FULFILLED',
  GET_PRODUCT_REWARDS_REJECTED = 'products/GET_PRODUCT_REWARDS_REJECTED',

  ADD_PRODUCT_REWARD = 'products/ADD_PRODUCT_REWARD',
  ADD_PRODUCT_REWARD_FULFILLED = 'products/ADD_PRODUCT_REWARD_FULFILLED',
  ADD_PRODUCT_REWARD_REJECTED = 'products/ADD_PRODUCT_REWARD_REJECTED',

  UPDATE_PRODUCT_REWARD = 'products/UPDATE_PRODUCT_REWARD',
  UPDATE_PRODUCT_REWARD_FULFILLED = 'products/UPDATE_PRODUCT_REWARD_FULFILLED',
  UPDATE_PRODUCT_REWARD_REJECTED = 'products/UPDATE_PRODUCT_REWARD_REJECTED',

  DELETE_PRODUCT_REWARD = 'products/DELETE_PRODUCT_REWARD',
  DELETE_PRODUCT_REWARD_FULFILLED = 'products/DELETE_PRODUCT_REWARD_FULFILLED',
  DELETE_PRODUCT_REWARD_REJECTED = 'products/DELETE_PRODUCT_REWARD_REJECTED',
}

export interface GetProductAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS;
}

export interface GetProductAprsFulfilledAction {
  readonly payload: IProductAprsData;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS_FULFILLED;
}

export interface GetProductAprsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS_REJECTED;
}

export interface GetProductFeeAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR;
}

export interface GetProductFeeAprsFulfilledAction {
  readonly payload: IProductFeesAprsData;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR_FULFILLED;
}

export interface GetProductFeeAprsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR_REJECTED;
}

export interface AddProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR;
}

export interface AddProductAprFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR_FULFILLED;
}

export interface AddProductAprRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR_REJECTED;
}

export interface UpdateProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR;
}

export interface UpdateProductAprFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR_FULFILLED;
}

export interface UpdateProductAprRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR_REJECTED;
}

export interface DeleteProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR;
}

export interface DeleteProductAprFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR_FULFILLED;
  readonly meta: { data: IProductAprIds };
}

export interface DeleteProductAprRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR_REJECTED;
}

export interface GetProductFeesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES;
}

export interface GetProductFeesFulfilledAction {
  readonly payload: IProductFeesData;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES_FULFILLED;
}

export interface GetProductFeesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES_REJECTED;
}

export interface AddProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE;
}

export interface AddProductFeeFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE_FULFILLED;
}

export interface AddProductFeeRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE_REJECTED;
}

export interface UpdateProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE;
}

export interface UpdateProductFeeFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE_FULFILLED;
}

export interface UpdateProductFeeRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE_REJECTED;
}

export interface DeleteProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE;
}

export interface DeleteProductFeeFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE_FULFILLED;
  readonly meta: { data: IProductFeesIds };
}

export interface DeleteProductFeeRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE_REJECTED;
}

export interface GetProductRewardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS;
}

export interface GetProductRewardsFulfilledAction {
  readonly payload: IProductRewardsData;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS_FULFILLED;
}

export interface GetProductRewardsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS_REJECTED;
}

export interface AddProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD;
}

export interface AddProductRewardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD_FULFILLED;
}

export interface AddProductRewardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD_REJECTED;
}

export interface UpdateProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD;
}

export interface UpdateProductRewardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD_FULFILLED;
}

export interface UpdateProductRewardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD_REJECTED;
}

export interface DeleteProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD;
}

export interface DeleteProductRewardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD_FULFILLED;
  readonly meta: { data: IProductRewardsIds };
}

export interface DeleteProductRewardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD_REJECTED;
}

export type TProductAprsFeesRewardsAction =
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
