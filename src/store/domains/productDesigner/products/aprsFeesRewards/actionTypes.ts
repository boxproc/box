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

export interface IGetProductAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS;
}

export interface IGetProductAprsFulfilledAction {
  readonly payload: IProductAprsData;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS_FULFILLED;
}

export interface IGetProductAprsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS_REJECTED;
}

export interface IGetProductFeeAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR;
}

export interface IGetProductFeeAprsFulfilledAction {
  readonly payload: IProductFeesAprsData;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR_FULFILLED;
}

export interface IGetProductFeeAprsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR_REJECTED;
}

export interface IAddProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR;
}

export interface IAddProductAprFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR_FULFILLED;
}

export interface IAddProductAprRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR_REJECTED;
}

export interface IUpdateProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR;
}

export interface IUpdateProductAprFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR_FULFILLED;
}

export interface IUpdateProductAprRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR_REJECTED;
}

export interface IDeleteProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR;
}

export interface IDeleteProductAprFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR_FULFILLED;
  readonly meta: { data: IProductAprIds };
}

export interface IDeleteProductAprRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR_REJECTED;
}

export interface IGetProductFeesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES;
}

export interface IGetProductFeesFulfilledAction {
  readonly payload: IProductFeesData;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES_FULFILLED;
}

export interface IGetProductFeesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES_REJECTED;
}

export interface IAddProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE;
}

export interface IAddProductFeeFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE_FULFILLED;
}

export interface IAddProductFeeRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE_REJECTED;
}

export interface IUpdateProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE;
}

export interface IUpdateProductFeeFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE_FULFILLED;
}

export interface IUpdateProductFeeRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE_REJECTED;
}

export interface IDeleteProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE;
}

export interface IDeleteProductFeeFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE_FULFILLED;
  readonly meta: { data: IProductFeesIds };
}

export interface IDeleteProductFeeRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE_REJECTED;
}

export interface IGetProductRewardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS;
}

export interface IGetProductRewardsFulfilledAction {
  readonly payload: IProductRewardsData;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS_FULFILLED;
}

export interface IGetProductRewardsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS_REJECTED;
}

export interface IAddProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD;
}

export interface IAddProductRewardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD_FULFILLED;
}

export interface IAddProductRewardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD_REJECTED;
}

export interface IUpdateProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD;
}

export interface IUpdateProductRewardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD_FULFILLED;
}

export interface IUpdateProductRewardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD_REJECTED;
}

export interface IDeleteProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD;
}

export interface IDeleteProductRewardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD_FULFILLED;
  readonly meta: { data: IProductRewardsIds };
}

export interface IDeleteProductRewardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD_REJECTED;
}

export type TProductAprsFeesRewardsAction =
  | IGetProductAprsFulfilledAction
  | IAddProductAprFulfilledAction
  | IUpdateProductAprFulfilledAction
  | IDeleteProductAprFulfilledAction
  | IGetProductFeesFulfilledAction
  | IUpdateProductFeeFulfilledAction
  | IAddProductFeeFulfilledAction
  | IDeleteProductFeeFulfilledAction
  | IGetProductRewardsFulfilledAction
  | IUpdateProductRewardFulfilledAction
  | IAddProductRewardFulfilledAction
  | IDeleteProductRewardFulfilledAction
  | IGetProductFeeAprsFulfilledAction;
