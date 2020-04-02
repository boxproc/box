
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';

import {
  activeItemIdSelector,
  closeModal,
  handleFilterAccounts,
  isAccessibleFilterSelector,
  openModal,
  setActiveItemId,
} from 'store';
import {
  ActionTypeKeys,
  IAddProductAction,
  IDeleteProductAction,
  IFilterProductsAction,
  IGetInstProductsAction,
  IGetProductAction,
  IGetProductDetailsAction,
  IUpdateProductAction,
  IUpdateProductDetailsAction,
} from './actionTypes';
import * as api from './api';
import { currentProductTypeSelector } from './selectors';
import {
  INewProduct,
  INewProductToSend,
  IProductData,
  IProductDetails,
  IProductDetailsResp,
  IProductGeneralDetails,
  IProductsFilterToSend,
} from './types';
import {
  prepareDetailsToSend,
  prepareFilterToSend,
  prepareGeneralProductDataToSend,
  prepareNewProductToSend,
} from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type TGetInstProducts = (id: number | string) => IGetInstProductsAction;
export type THandleGetInstProducts = (id: number | string) => Thunk<void>;

export type TDeleteProduct = (id: number) => IDeleteProductAction;
export type THandleDeleteProduct = () => Thunk<void>;

export type TFilterProducts = (data: IProductsFilterToSend) => IFilterProductsAction;
export type THandleFilterProducts = () => Thunk<void>;

export type TGetProductDetails = (id: number) => IGetProductDetailsAction;
export type THandleGetProductDetails = (id: number) => Thunk<void>;

export type TGetProduct = (id: number) => IGetProductAction;
export type THandleGetProduct = () => Thunk<void>;

export type TAddProduct = (data: INewProductToSend) => IAddProductAction;
export type THandleAddProduct = (data: Partial<INewProduct>) => Thunk<void>;

export type TUpdateProduct = (data: IProductData) => IUpdateProductAction;
export type THandleUpdateProduct = (data: Partial<IProductGeneralDetails>) => Thunk<void>;

export type TUpdateProductDetails = (data: IProductDetailsResp) => IUpdateProductDetailsAction;
export type THandleUpdateProductDetails = (data: Partial<IProductDetails>) => Thunk<void>;

export type TResetProducts = () => void;

export const getInstProducts: TGetInstProducts = id => ({
  type: ActionTypeKeys.GET_INST_PRODUCTS,
  payload: api.getInstProducts(id),
});

export const deleteProduct: TDeleteProduct = id => ({
  type: ActionTypeKeys.DELETE_PRODUCT,
  payload: api.deleteProduct(id),
  meta: { id },
});

export const filterProducts: TFilterProducts = data => ({
  type: ActionTypeKeys.FILTER_PRODUCTS,
  payload: api.filterProducts(data),
});

export const getProductDetails: TGetProductDetails = id => ({
  type: ActionTypeKeys.GET_PRODUCT_DETAILS,
  payload: api.getProductDetails(id),
});

export const getProduct: TGetProduct = id => ({
  type: ActionTypeKeys.GET_PRODUCT,
  payload: api.getProduct(id),
});

export const addProduct: TAddProduct = data => ({
  type: ActionTypeKeys.ADD_PRODUCT,
  payload: api.addProduct(data),
});

export const updateProduct: TUpdateProduct = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT,
  payload: api.updateProduct(data),
});

export const updateProductDetails: TUpdateProductDetails = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS,
  payload: api.updateProductDetails(data),
  meta: data,
});

export const resetProducts: TResetProducts = () => ({
  type: ActionTypeKeys.RESET_PRODUCTS,
});

export const handleFilterProducts: THandleFilterProducts = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterProducts(preparedData));
        }
      },
      dispatch
    );
  };

export const handleGetInstProducts: THandleGetInstProducts = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getInstProducts(id));
      },
      dispatch
    );
  };

export const handleDeleteProduct: THandleDeleteProduct = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = activeItemIdSelector(state);

        await dispatch(deleteProduct(id));
        dispatch(closeModal(modalNamesConst.EDIT_PRODUCT));

        if (window.location.pathname === `${basePath}${uiItemsConst.ACCOUNTS}`) {
          await dispatch(handleFilterAccounts());
        }
      },
      dispatch
    );
  };

export const handleGetProductDetails: THandleGetProductDetails = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getProductDetails(id));
      },
      dispatch
    );
  };

export const handleGetProduct: THandleGetProduct = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = activeItemIdSelector(state);

        await dispatch(getProduct(id));
      },
      dispatch
    );
  };

export const handleAddProduct: THandleAddProduct = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareNewProductToSend(data);
        const state = getState();
        const isAccessibleFiltering = isAccessibleFilterSelector(state);

        const res = await dispatch(addProduct(preparedData)) as any;

        if (res) {
          if (isAccessibleFiltering) {
            await dispatch(handleFilterProducts());
          }

          dispatch(setActiveItemId(res.value.product_id));
          dispatch(openModal({ name: modalNamesConst.EDIT_PRODUCT }));
          dispatch(closeModal(modalNamesConst.ADD_PRODUCT));
        }
      },
      dispatch
    );
  };

export const handleUpdateProduct: THandleUpdateProduct = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareGeneralProductDataToSend(data);

        await dispatch(updateProduct(preparedData));
        await Promise.all([
          dispatch(handleGetProduct()),
          dispatch(handleFilterProducts()),
        ]);
      },
      dispatch
    );
  };

export const handleUpdateProductDetails: THandleUpdateProductDetails = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedData = prepareDetailsToSend(
          data,
          currentProductTypeSelector(state)
        );

        await dispatch(updateProductDetails(preparedData));
      },
      dispatch
    );
  };
