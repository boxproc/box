
import { getFormValues, reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import * as api from './api';

import { closeModal } from 'store/domains/modals';
import {
  ActionTypeKeys,
  AddProductAction,
  DeleteProductAction,
  FilterProductsAction,
  GetProductAction,
  GetProductsAction,
  UpdateProductAction,
} from './actionTypes';

import { apiClient } from 'services';

import { cookiesUtil, errorDecoratorUtil } from 'utils';
import {
  ProductFilterParams,
  ProductFilterParamsPrepared,
  ProductItemDetails,
  ProductItemDetailsResp,
} from './types';

import { preparedProductItemToSend, prepareProductFiltersParamsToSend } from './utils';

import { Thunk, VoidPromiseThunk } from 'types';

export type GetProducts = () => GetProductsAction;
export type HandleGetProducts = VoidPromiseThunk;

export type DeleteProduct = (id: number) => DeleteProductAction;
export type HandleDeleteProduct = (id: number) => Thunk<void>;

export type FilterProducts = (params: ProductFilterParamsPrepared) => FilterProductsAction;
export type HandleFilterProducts = (params: ProductFilterParams) => Thunk<void>;

export type GetProduct = (id: number) => GetProductAction;
export type HandleGetProduct = (id: number) => Thunk<void>;

export type AddProduct = (values: ProductItemDetailsResp) => AddProductAction;
export type HandleAddProduct = (values: ProductItemDetails) => Thunk<void>;

export type UpdateProduct = (values: ProductItemDetailsResp) => UpdateProductAction;
export type HandleUpdateProduct = (values: ProductItemDetails) => Thunk<void>;

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
  meta: id,
});

export const addProduct: AddProduct = values => ({
  type: ActionTypeKeys.ADD_PRODUCT,
  payload: api.addProduct(values),
});

export const updateProduct: UpdateProduct = values => ({
  type: ActionTypeKeys.UPDATE_PRODUCT,
  payload: api.updateProduct(values),
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
          const preparedValues = prepareProductFiltersParamsToSend(formValues(state));
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
        const preparedValues = prepareProductFiltersParamsToSend(params);

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

export const handleAddProduct: HandleAddProduct = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedProductItemToSend(values);

        await dispatch(addProduct(preparedValues));
        await dispatch(closeModal(modalNames.ADD_PRODUCT));
        await dispatch(handleGetProducts());
        await dispatch(resetForm(formNames.PRODUCT));
      },
      dispatch
    );
  };

export const handleUpdateProduct: HandleUpdateProduct = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedProductItemToSend(values);

        await dispatch(updateProduct(preparedValues));
        await dispatch(closeModal(modalNames.EDIT_PRODUCT));
        await dispatch(handleGetProducts());
        await dispatch(resetForm(formNames.PRODUCT));
      },
      dispatch
    );
  };
