
import { reset as resetForm } from 'redux-form';

import { formNamesConst } from 'consts';

import { activeItemIdSelector } from 'store';
import {
  ActionTypeKeys,
  IAddProductAprAction,
  IAddProductFeeAction,
  IAddProductRewardAction,
  IDeleteProductAprAction,
  IDeleteProductFeeAction,
  IDeleteProductRewardAction,
  IGetProductAprsAction,
  IGetProductFeeAprsAction,
  IGetProductFeesAction,
  IGetProductRewardsAction,
  IUpdateProductAprAction,
  IUpdateProductFeeAction,
  IUpdateProductRewardAction,
} from './actionTypes';
import * as api from './api';
import {
  IProductApr,
  IProductAprData,
  IProductAprFormValues,
  IProductAprIds,
  IProductFee,
  IProductFeeData,
  IProductFeeFormValues,
  IProductFeesIds,
  IProductReward,
  IProductRewardData,
  IProductRewardFormValues,
  IProductRewardsIds,
} from './types';
import {
  prepareFormDataProductAprsToSend,
  prepareFormDataProductFeesToSend,
  prepareFormDataProductRewardsToSend,
  prepareProductAprsToSend,
  prepareProductFeesToSend,
  prepareProductRewardsToSend,
} from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type TGetProductAprs = (id: number) => IGetProductAprsAction;
export type THandleGetProductAprs = () => Thunk<void>;

export type TAddProductApr = (data: Partial<IProductAprData>) => IAddProductAprAction;
export type THandleAddProductApr = (data: Partial<IProductAprFormValues>) => Thunk<void>;

export type TUpdateProductApr = (data: Partial<IProductAprData>) => IUpdateProductAprAction;
export type THandleUpdateProductApr = (data: Partial<IProductApr>) => Thunk<void>;

export type TDeleteProductApr = (data: IProductAprIds) => IDeleteProductAprAction;
export type THandleDeleteProductApr = (data: IProductAprIds) => Thunk<void>;

export type TGetProductFees = (id: number) => IGetProductFeesAction;
export type THandleGetProductFees = () => Thunk<void>;

export type TAddProductFee = (data: Partial<IProductFeeData>) => IAddProductFeeAction;
export type THandleAddProductFee = (data: Partial<IProductFeeFormValues>) => Thunk<void>;

export type TUpdateProductFee = (data: Partial<IProductFeeData>) => IUpdateProductFeeAction;
export type THandleUpdateProductFee = (data: Partial<IProductFee>) => Thunk<void>;

export type TDeleteProductFee = (data: IProductFeesIds) => IDeleteProductFeeAction;
export type THandleDeleteProductFee = (data: IProductFeesIds) => Thunk<void>;

export type TGetProductRewards = (id: number) => IGetProductRewardsAction;
export type THandleGetProductRewards = () => Thunk<void>;

export type TAddProductReward = (data: Partial<IProductRewardData>) => IAddProductRewardAction;
export type THandleAddProductReward = (data: Partial<IProductRewardFormValues>) => Thunk<void>;

export type TUpdateProductReward = (data: Partial<IProductRewardData>) =>
  IUpdateProductRewardAction;
export type THandleUpdateProductReward = (data: Partial<IProductReward>) => Thunk<void>;

export type TDeleteProductReward = (data: IProductRewardsIds) => IDeleteProductRewardAction;
export type THandleDeleteProductReward = (data: IProductRewardsIds) => Thunk<void>;

export type TGetProductFeeAprs = (id: number) => IGetProductFeeAprsAction;
export type THandleGetProductFeeAprs = () => Thunk<void>;

export type THandleGetProductAprsFeesRewards = () => Thunk<void>;

export const getProductAprs: TGetProductAprs = id => ({
  type: ActionTypeKeys.GET_PRODUCT_APRS,
  payload: api.getProductAprs(id),
});

export const addProductApr: TAddProductApr = data => ({
  type: ActionTypeKeys.ADD_PRODUCT_APR,
  payload: api.addProductApr(data),
});

export const updateProductApr: TUpdateProductApr = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_APR,
  payload: api.updateProductApr(data),
});

export const deleteProductApr: TDeleteProductApr = data => ({
  type: ActionTypeKeys.DELETE_PRODUCT_APR,
  payload: api.deleteProductApr(data),
  meta: { data },
});

export const getProductFees: TGetProductFees = id => ({
  type: ActionTypeKeys.GET_PRODUCT_FEES,
  payload: api.getProductFees(id),
});

export const addProductFee: TAddProductFee = data => ({
  type: ActionTypeKeys.ADD_PRODUCT_FEE,
  payload: api.addProductFee(data),
});

export const updateProductFee: TUpdateProductFee = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_FEE,
  payload: api.updateProductFee(data),
});

export const deleteProductFee: TDeleteProductFee = data => ({
  type: ActionTypeKeys.DELETE_PRODUCT_FEE,
  payload: api.deleteProductFee(data),
  meta: { data },
});

export const getProductRewards: TGetProductRewards = id => ({
  type: ActionTypeKeys.GET_PRODUCT_REWARDS,
  payload: api.getProductRewards(id),
});

export const addProductReward: TAddProductReward = data => ({
  type: ActionTypeKeys.ADD_PRODUCT_REWARD,
  payload: api.addProductReward(data),
});

export const updateProductReward: TUpdateProductReward = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_REWARD,
  payload: api.updateProductReward(data),
});

export const deleteProductReward: TDeleteProductReward = data => ({
  type: ActionTypeKeys.DELETE_PRODUCT_REWARD,
  payload: api.deleteProductReward(data),
  meta: { data },
});

export const getProductFeeAprs: TGetProductFeeAprs = id => ({
  type: ActionTypeKeys.GET_PRODUCT_FEE_APR,
  payload: api.getProductFeeAprs(id),
});

export const handleGetProductAprs: THandleGetProductAprs = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);

        await dispatch(getProductAprs(productId));
      },
      dispatch
    );
  };

export const handleAddProductApr: THandleAddProductApr = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);
        const preparedData = prepareFormDataProductAprsToSend(data);

        await dispatch(addProductApr({
          ...preparedData,
          product_id: productId,
        }));
        await dispatch(handleGetProductAprs());
        dispatch(resetForm(formNamesConst.PRODUCT_APRS));
      },
      dispatch
    );
  };

export const handleUpdateProductApr: THandleUpdateProductApr = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareProductAprsToSend(data);

        await dispatch(updateProductApr(preparedData));
        await dispatch(handleGetProductAprs());
      },
      dispatch
    );
  };

export const handleDeleteProductApr: THandleDeleteProductApr = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProductApr(data));
      },
      dispatch
    );
  };

export const handleGetProductFees: THandleGetProductFees = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);

        await dispatch(getProductFees(productId));
      },
      dispatch
    );
  };

export const handleAddProductFee: THandleAddProductFee = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);
        const preparedData = prepareFormDataProductFeesToSend(data);

        await dispatch(addProductFee({
          ...preparedData,
          product_id: productId,
        }));
        await dispatch(handleGetProductFees());
        dispatch(resetForm(formNamesConst.PRODUCT_FEES));
      },
      dispatch
    );
  };

export const handleUpdateProductFee: THandleUpdateProductFee = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareProductFeesToSend(data);

        await dispatch(updateProductFee(preparedData));
        await dispatch(handleGetProductFees());
      },
      dispatch
    );
  };

export const handleDeleteProductFee: THandleDeleteProductFee = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProductFee(data));
      },
      dispatch
    );
  };

export const handleGetProductRewards: THandleGetProductRewards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);

        await dispatch(getProductRewards(productId));
      },
      dispatch
    );
  };

export const handleAddProductReward: THandleAddProductReward = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);
        const preparedData = prepareFormDataProductRewardsToSend(data);

        await dispatch(addProductReward({
          ...preparedData,
          product_id: productId,
        }));
        await dispatch(handleGetProductRewards());
        dispatch(resetForm(formNamesConst.PRODUCT_REWARDS));
      },
      dispatch
    );
  };

export const handleUpdateProductReward: THandleUpdateProductReward = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareProductRewardsToSend(data);

        await dispatch(updateProductReward(preparedData));
        await dispatch(handleGetProductRewards());
      },
      dispatch
    );
  };

export const handleDeleteProductReward: THandleDeleteProductReward = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProductReward(data));
      },
      dispatch
    );
  };

export const handleGetProductAprsFeesRewards: THandleGetProductAprsFeesRewards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);

        await Promise.all([
          dispatch(getProductAprs(productId)),
          dispatch(getProductFees(productId)),
          dispatch(getProductRewards(productId)),
        ]);
      },
      dispatch
    );
  };

export const handleGetProductFeeAprs: THandleGetProductFeeAprs = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);

        await dispatch(getProductFeeAprs(productId));
      },
      dispatch
    );
  };
