
import { getFormValues } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddProductAction,
  DeleteProductAction,
  FilterProductsAction,
  GetInstitutionProductsAction,
  GetProductAction,
  GetProductDetailsAction,
  GetProductIdAction,
  GetProductRulesAction,
  GetProductsAction,
  SetRulesCodeAction,
  UpdateProductAction,
  UpdateProductDetailsAction,
  UpdateProductRulesAction,
} from './actionTypes';

import * as api from './api';

import {
  selectCurrentProductId,
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
  prepareProductRuleValuesToSend,
} from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetProducts = () => GetProductsAction;
export type HandleGetProducts = VoidPromiseThunk;

export type GetInstitutionProducts = (id: number | string) => GetInstitutionProductsAction;
export type HandleGetInstitutionProducts = (id: number | string) => Thunk<void>;

export type DeleteProduct = (id: number) => DeleteProductAction;
export type HandleDeleteProduct = (id: number) => Thunk<void>;

export type FilterProducts = (params: ProductFilterParamsPrepared) => FilterProductsAction;
export type HandleFilterProducts = (params: ProductFilterParams) => Thunk<void>;

export type GetProductId = (id: number) => GetProductIdAction;
export type HandleGetProductId = (id: number) => void;

export type GetProduct = (id: number) => GetProductAction;
export type HandleGetProduct = (id: number) => Thunk<void>;

export type GetProductDetails = (id: number) => GetProductDetailsAction;
export type HandleGetProductDetails = (id: number) => Thunk<void>;

export type GetProductRules = (id: number) => GetProductRulesAction;
export type HandleGetProductRules = (id: number) => Thunk<void>;

export type SetRulesCode = (code: string) => SetRulesCodeAction;
export type HandleSetRulesCode = (code: string) => void;

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

export const getInstitutionProducts: GetInstitutionProducts = id => ({
  type: ActionTypeKeys.GET_INSTITUTION_PRODUCTS,
  payload: api.getInstitutionProducts(id),
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

export const getProductId: GetProductId = id => ({
  type: ActionTypeKeys.GET_PRODUCT_ID,
  payload: id,
});

export const setRulesCode: SetRulesCode = code => ({
  type: ActionTypeKeys.SET_RULES_CODE,
  payload: code,
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

export const handleGetInstitutionProducts: HandleGetInstitutionProducts = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getInstitutionProducts(id));
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

export const handleGetProductId: HandleGetProductId = id =>
  getProductId(id);

export const handleSetRulesCode: HandleSetRulesCode = code =>
  setRulesCode(code);

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
        await dispatch(closeModal(modalNames.ADD_PRODUCT));
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
      },
      dispatch
    );
  };

export const handleUpdateProductRules: HandleUpdateProductRules = values =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedValues = prepareProductRuleValuesToSend(values);

        await dispatch(updateProductRules({
          ...preparedValues,
          product_id: selectCurrentProductId(state),
        }));
        await dispatch(handleGetProducts());
      },
      dispatch
    );
  };
