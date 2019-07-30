
import { getFormValues } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import { closeModal, showNotification } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddProductAction,
  DeleteProductAction,
  FilterProductsAction,
  GetProductAction,
  GetProductDetailsAction,
  GetProductRulesAction,
  GetProductsAction,
  UpdateProductAction,
  UpdateProductDetailsAction,
  UpdateProductRulesAction,
} from './actionTypes';

import * as api from './api';

import {
  selectCurrentProductType,
} from './selectors';

import {
  NewProduct,
  NewProductPrepared,
  ProductFilterParams,
  ProductFilterParamsPrepared,
  ProductItemDetails,
  ProductItemDetailsResp,
  ProductItemGeneral,
  ProductItemResp,
  ProductRulesItem,
  ProductRulesItemResp,
} from './types';

import {
  prepareGeneralProductValuesToSend,
  prepareNewProductValuesToSend,
  prepareProductDetailsValuesToSend,
  prepareProductFiltersParamsToSend,
  prepareProductRulesValuesToSend,
} from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetProducts = () => GetProductsAction;
export type HandleGetProducts = VoidPromiseThunk;

export type DeleteProduct = (id: number) => DeleteProductAction;
export type HandleDeleteProduct = (id: number) => Thunk<void>;

export type FilterProducts = (params: ProductFilterParamsPrepared) => FilterProductsAction;
export type HandleFilterProducts = (params: ProductFilterParams) => Thunk<void>;

export type GetProduct = (id: number) => GetProductAction;
export type HandleGetProduct = (id: number) => Thunk<void>;

export type GetProductDetails = (id: number) => GetProductDetailsAction;
export type HandleGetProductDetails = (id: number) => Thunk<void>;

export type GetProductRules = (id: number) => GetProductRulesAction;
export type HandleGetProductRules = (id: number) => Thunk<void>;

export type AddProduct = (values: NewProductPrepared) => AddProductAction;
export type HandleAddProduct = (values: Partial<NewProduct>) => Thunk<void>;

export type UpdateProduct = (values: ProductItemResp) => UpdateProductAction;
export type HandleUpdateProduct = (values: Partial<ProductItemGeneral>) => Thunk<void>;

export type UpdateProductDetails = (values: ProductItemDetailsResp) => UpdateProductDetailsAction;
export type HandleUpdateProductDetails = (values: Partial<ProductItemDetails>) => Thunk<void>;

export type UpdateProductRules = (values: ProductRulesItemResp) => UpdateProductRulesAction;
export type HandleUpdateProductRules = (values: Partial<ProductRulesItem>) => Thunk<void>;

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

export const getProductDetails: GetProductDetails = id => ({
  type: ActionTypeKeys.GET_PRODUCT_DETAILS,
  payload: api.getProductDetails(id),
});

export const getProductRules: GetProductRules = id => ({
  type: ActionTypeKeys.GET_PRODUCT_RULES,
  payload: api.getProductRules(id),
});

export const addProduct: AddProduct = values => ({
  type: ActionTypeKeys.ADD_PRODUCT,
  payload: api.addProduct(values),
});

export const updateProduct: UpdateProduct = values => ({
  type: ActionTypeKeys.UPDATE_PRODUCT,
  payload: api.updateProduct(values),
});

export const updateProductDetails: UpdateProductDetails = values => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS,
  payload: api.updateProductDetails(values),
});

export const updateProductRules: UpdateProductRules = values => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_RULES,
  payload: api.updateProductRules(values),
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

export const handleGetProductDetails: HandleGetProductDetails = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getProductDetails(id));
      },
      dispatch
    );
  };

export const handleGetProductRules: HandleGetProductRules = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getProductRules(id));
      },
      dispatch
    );
  };

export const handleAddProduct: HandleAddProduct = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareNewProductValuesToSend(values);

        await dispatch(addProduct(preparedValues));
        await dispatch(handleGetProducts());
      },
      dispatch
    );
  };

export const handleUpdateProduct: HandleUpdateProduct = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareGeneralProductValuesToSend(values);

        await dispatch(updateProduct(preparedValues));
        await dispatch(handleGetProducts());
        await dispatch(showNotification('Successfully updated'));
      },
      dispatch
    );
  };

export const handleUpdateProductDetails: HandleUpdateProductDetails = values =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedValues = prepareProductDetailsValuesToSend(
          values,
          selectCurrentProductType(state)
        );

        await dispatch(updateProductDetails(preparedValues));
        await dispatch(handleGetProducts());
        await dispatch(showNotification('Successfully updated'));
      },
      dispatch
    );
  };

export const handleUpdateProductRules: HandleUpdateProductRules = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareProductRulesValuesToSend(values);

        await dispatch(updateProductRules(preparedValues));
        await dispatch(handleGetProducts());
        await dispatch(showNotification('Successfully updated'));
      },
      dispatch
    );
  };
