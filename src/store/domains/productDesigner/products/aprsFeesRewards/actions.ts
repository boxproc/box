
import { reset as resetForm } from 'redux-form';

import { formNamesConst } from 'consts';

import { selectActiveItemId } from 'store/domains/utils';
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
  ProductApr,
  ProductAprFormValues,
  ProductAprIds,
  ProductAprItem,
  ProductFee,
  ProductFeeFormValues,
  ProductFeeItem,
  ProductFeesIds,
  ProductReward,
  ProductRewardFormValues,
  ProductRewardItem,
  ProductRewardsIds,
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

export type AddProductApr = (data: Partial<ProductAprItem>) => AddProductAprAction;
export type HandleAddProductApr = (data: Partial<ProductAprFormValues>) => Thunk<void>;

export type UpdateProductApr = (data: Partial<ProductAprItem>) => UpdateProductAprAction;
export type HandleUpdateProductApr = (data: Partial<ProductApr>) => Thunk<void>;

export type DeleteProductApr = (data: ProductAprIds) => DeleteProductAprAction;
export type HandleDeleteProductApr = (data: ProductAprIds) => Thunk<void>;

export type GetProductFees = (id: number) => GetProductFeesAction;
export type HandleGetProductFees = () => Thunk<void>;

export type AddProductFee = (data: Partial<ProductFeeItem>) => AddProductFeeAction;
export type HandleAddProductFee = (data: Partial<ProductFeeFormValues>) => Thunk<void>;

export type UpdateProductFee = (data: Partial<ProductFeeItem>) => UpdateProductFeeAction;
export type HandleUpdateProductFee = (data: Partial<ProductFee>) => Thunk<void>;

export type DeleteProductFee = (data: ProductFeesIds) => DeleteProductFeeAction;
export type HandleDeleteProductFee = (data: ProductFeesIds) => Thunk<void>;

export type GetProductRewards = (id: number) => GetProductRewardsAction;
export type HandleGetProductRewards = () => Thunk<void>;

export type AddProductReward = (data: Partial<ProductRewardItem>) => AddProductRewardAction;
export type HandleAddProductReward = (data: Partial<ProductRewardFormValues>) => Thunk<void>;

export type UpdateProductReward = (data: Partial<ProductRewardItem>) => UpdateProductRewardAction;
export type HandleUpdateProductReward = (data: Partial<ProductReward>) => Thunk<void>;

export type DeleteProductReward = (data: ProductRewardsIds) => DeleteProductRewardAction;
export type HandleDeleteProductReward = (data: ProductRewardsIds) => Thunk<void>;

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
        const productId = selectActiveItemId(state);

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
        const productId = selectActiveItemId(state);
        const preparedValues = prepareFormDataProductAprsToSend(data);

        await dispatch(addProductApr({
          ...preparedValues,
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
        const preparedValues = prepareProductAprsToSend(data);

        await dispatch(updateProductApr(preparedValues));
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
        const productId = selectActiveItemId(state);

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
        const productId = selectActiveItemId(state);
        const preparedValues = prepareFormDataProductFeesToSend(data);

        await dispatch(addProductFee({
          ...preparedValues,
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
        const preparedValues = prepareProductFeesToSend(data);

        await dispatch(updateProductFee(preparedValues));
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
        const productId = selectActiveItemId(state);

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
        const productId = selectActiveItemId(state);
        const preparedValues = prepareFormDataProductRewardsToSend(data);

        await dispatch(addProductReward({
          ...preparedValues,
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
        const preparedValues = prepareProductRewardsToSend(data);

        await dispatch(updateProductReward(preparedValues));
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
        const productId = selectActiveItemId(state);

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
        const productId = selectActiveItemId(state);

        await dispatch(getProductFeeAprs(productId));
      },
      dispatch
    );
  };
