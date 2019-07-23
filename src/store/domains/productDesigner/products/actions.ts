
import { getFormValues } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import * as api from './api';

import { closeModal } from 'store/domains/modals';
import {
  ActionTypeKeys,
  DeleteProductAction,
  FilterProductsAction,
  GetProductAction,
  GetProductsAction,
} from './actionTypes';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';
import { ProductFilterParams, ProductFilterParamsPrepared } from './types';
import { prepareProductFiltersParams } from './utils';

export type GetProducts = () => GetProductsAction;
export type HandleGetProducts = VoidPromiseThunk;

export type DeleteProduct = (id: number) => DeleteProductAction;
export type HandleDeleteProduct = (id: number) => Thunk<void>;

export type FilterProducts = (params: ProductFilterParamsPrepared) => FilterProductsAction;
export type HandleFilterProducts = (params: ProductFilterParams) => Thunk<void>;

export type GetProduct = (id: number) => GetProductAction;
export type HandleGetProduct = (id: number) => Thunk<void>;

export const getProducts: GetProducts = () => ({
  type: ActionTypeKeys.GET_PRODUCTS,
  payload: api.getProducts(),
});

export const deleteProduct: DeleteProduct = id => ({
  type: ActionTypeKeys.DELETE_PRODUCT,
  payload: api.deleteProduct(id),
  meta: id,
});

export const filterProducts: FilterProducts = params => ({
  type: ActionTypeKeys.FILTER_PRODUCTS,
  payload: api.filterProducts(params),
  meta: params,
});

export const getProduct: GetProduct = id => ({
  type: ActionTypeKeys.GET_PRODUCT,
  payload: api.getProduct(id),
});

export const handleGetProducts: HandleGetProducts = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const formValues = getFormValues(formNames.PRODUCTS_FILTER);
        const state = getState();

        if (formValues(state)) {
          const preparedValues = prepareProductFiltersParams(formValues(state));
          await dispatch(filterProducts(preparedValues));
        } else {
          await dispatch(getProducts());
        }
      },
      dispatch
    );
  };

export const handleDeleteProduct: HandleDeleteProduct = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProduct(id));
        await dispatch(closeModal(modalNames.EDIT_PRODUCT));
      },
      dispatch
    );
  };

export const handleFilterProducts: HandleFilterProducts = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareProductFiltersParams(params);

        await dispatch(filterProducts(preparedValues));
      },
      dispatch
    );
  };

export const handleGetProduct: HandleGetProduct = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
