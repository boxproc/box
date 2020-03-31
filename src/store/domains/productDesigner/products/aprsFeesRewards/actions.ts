
import { reset as resetForm } from 'redux-form';

import { formNamesConst } from 'consts';

import { activeItemIdSelector } from 'store';
import {
  ActionTypeKeys,
  AddProductAprAction,
  AddProductFeeAction,
  AddProductRewardAction,
  DeleteProductAprAction,
  DeleteProductFeeAction,
  DeleteProductRewardAction,
  GetProductAprsAction,
  GetProductFeeAprsAction,
  GetProductFeesAction,
  GetProductRewardsAction,
  UpdateProductAprAction,
  UpdateProductFeeAction,
  UpdateProductRewardAction,
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

export type GetProductAprs = (id: number) => GetProductAprsAction;
export type HandleGetProductAprs = () => Thunk<void>;

export type AddProductApr = (data: Partial<IProductAprData>) => AddProductAprAction;
export type HandleAddProductApr = (data: Partial<IProductAprFormValues>) => Thunk<void>;

export type UpdateProductApr = (data: Partial<IProductAprData>) => UpdateProductAprAction;
export type HandleUpdateProductApr = (data: Partial<IProductApr>) => Thunk<void>;

export type DeleteProductApr = (data: IProductAprIds) => DeleteProductAprAction;
export type HandleDeleteProductApr = (data: IProductAprIds) => Thunk<void>;

export type GetProductFees = (id: number) => GetProductFeesAction;
export type HandleGetProductFees = () => Thunk<void>;

export type AddProductFee = (data: Partial<IProductFeeData>) => AddProductFeeAction;
export type HandleAddProductFee = (data: Partial<IProductFeeFormValues>) => Thunk<void>;

export type UpdateProductFee = (data: Partial<IProductFeeData>) => UpdateProductFeeAction;
export type HandleUpdateProductFee = (data: Partial<IProductFee>) => Thunk<void>;

export type DeleteProductFee = (data: IProductFeesIds) => DeleteProductFeeAction;
export type HandleDeleteProductFee = (data: IProductFeesIds) => Thunk<void>;

export type GetProductRewards = (id: number) => GetProductRewardsAction;
export type HandleGetProductRewards = () => Thunk<void>;

export type AddProductReward = (data: Partial<IProductRewardData>) => AddProductRewardAction;
export type HandleAddProductReward = (data: Partial<IProductRewardFormValues>) => Thunk<void>;

export type UpdateProductReward = (data: Partial<IProductRewardData>) => UpdateProductRewardAction;
export type HandleUpdateProductReward = (data: Partial<IProductReward>) => Thunk<void>;

export type DeleteProductReward = (data: IProductRewardsIds) => DeleteProductRewardAction;
export type HandleDeleteProductReward = (data: IProductRewardsIds) => Thunk<void>;

export type GetProductFeeAprs = (id: number) => GetProductFeeAprsAction;
export type HandleGetProductFeeAprs = () => Thunk<void>;

export type HandleGetProductAprsFeesRewards = () => Thunk<void>;

export const getProductAprs: GetProductAprs = id => ({
  type: ActionTypeKeys.GET_PRODUCT_APRS,
  payload: api.getProductAprs(id),
});

export const addProductApr: AddProductApr = data => ({
  type: ActionTypeKeys.ADD_PRODUCT_APR,
  payload: api.addProductApr(data),
});

export const updateProductApr: UpdateProductApr = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_APR,
  payload: api.updateProductApr(data),
});

export const deleteProductApr: DeleteProductApr = data => ({
  type: ActionTypeKeys.DELETE_PRODUCT_APR,
  payload: api.deleteProductApr(data),
  meta: { data },
});

export const getProductFees: GetProductFees = id => ({
  type: ActionTypeKeys.GET_PRODUCT_FEES,
  payload: api.getProductFees(id),
});

export const addProductFee: AddProductFee = data => ({
  type: ActionTypeKeys.ADD_PRODUCT_FEE,
  payload: api.addProductFee(data),
});

export const updateProductFee: UpdateProductFee = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_FEE,
  payload: api.updateProductFee(data),
});

export const deleteProductFee: DeleteProductFee = data => ({
  type: ActionTypeKeys.DELETE_PRODUCT_FEE,
  payload: api.deleteProductFee(data),
  meta: { data },
});

export const getProductRewards: GetProductRewards = id => ({
  type: ActionTypeKeys.GET_PRODUCT_REWARDS,
  payload: api.getProductRewards(id),
});

export const addProductReward: AddProductReward = data => ({
  type: ActionTypeKeys.ADD_PRODUCT_REWARD,
  payload: api.addProductReward(data),
});

export const updateProductReward: UpdateProductReward = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_REWARD,
  payload: api.updateProductReward(data),
});

export const deleteProductReward: DeleteProductReward = data => ({
  type: ActionTypeKeys.DELETE_PRODUCT_REWARD,
  payload: api.deleteProductReward(data),
  meta: { data },
});

export const getProductFeeAprs: GetProductFeeAprs = id => ({
  type: ActionTypeKeys.GET_PRODUCT_FEE_APR,
  payload: api.getProductFeeAprs(id),
});

export const handleGetProductAprs: HandleGetProductAprs = () =>
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

export const handleAddProductApr: HandleAddProductApr = data =>
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

export const handleUpdateProductApr: HandleUpdateProductApr = data =>
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

export const handleDeleteProductApr: HandleDeleteProductApr = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProductApr(data));
      },
      dispatch
    );
  };

export const handleGetProductFees: HandleGetProductFees = () =>
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

export const handleAddProductFee: HandleAddProductFee = data =>
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

export const handleUpdateProductFee: HandleUpdateProductFee = data =>
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

export const handleDeleteProductFee: HandleDeleteProductFee = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProductFee(data));
      },
      dispatch
    );
  };

export const handleGetProductRewards: HandleGetProductRewards = () =>
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

export const handleAddProductReward: HandleAddProductReward = data =>
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
        dispatch(resetForm(formNamesConst.PRODUCT_FEES));
      },
      dispatch
    );
  };

export const handleUpdateProductReward: HandleUpdateProductReward = data =>
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

export const handleDeleteProductReward: HandleDeleteProductReward = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProductReward(data));
      },
      dispatch
    );
  };

export const handleGetProductAprsFeesRewards: HandleGetProductAprsFeesRewards = () =>
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

export const handleGetProductFeeAprs: HandleGetProductFeeAprs = () =>
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
