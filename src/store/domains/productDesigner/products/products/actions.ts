
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
  AddProductAction,
  DeleteProductAction,
  FilterProductsAction,
  GetInstitutionProductsAction,
  GetProductAction,
  GetProductDetailsAction,
  UpdateProductAction,
  UpdateProductDetailsAction,
} from './actionTypes';
import * as api from './api';
import { selectCurrentProductType } from './selectors';
import {
  NewProduct,
  NewProductPrepared,
  ProductFilterPrepared,
  ProductItemDetails,
  ProductItemDetailsResp,
  ProductItemGeneral,
  ProductItemResp,
} from './types';
import {
  prepareDetailsToSend,
  prepareFilterToSend,
  prepareGeneralProductDataToSend,
  prepareNewProductToSend,
} from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetInstitutionProducts = (id: number | string) => GetInstitutionProductsAction;
export type HandleGetInstitutionProducts = (id: number | string) => Thunk<void>;

export type DeleteProduct = (id: number) => DeleteProductAction;
export type HandleDeleteProduct = () => Thunk<void>;

export type FilterProducts = (data: ProductFilterPrepared) => FilterProductsAction;
export type HandleFilterProducts = () => Thunk<void>;

export type GetProductDetails = (id: number) => GetProductDetailsAction;
export type HandleGetProductDetails = (id: number) => Thunk<void>;

export type GetProduct = (id: number) => GetProductAction;
export type HandleGetProduct = () => Thunk<void>;

export type AddProduct = (data: NewProductPrepared) => AddProductAction;
export type HandleAddProduct = (data: Partial<NewProduct>) => Thunk<void>;

export type UpdateProduct = (data: ProductItemResp) => UpdateProductAction;
export type HandleUpdateProduct = (data: Partial<ProductItemGeneral>) => Thunk<void>;

export type UpdateProductDetails = (data: ProductItemDetailsResp) => UpdateProductDetailsAction;
export type HandleUpdateProductDetails = (data: Partial<ProductItemDetails>) => Thunk<void>;

export type ResetProducts = () => void;

export const getInstitutionProducts: GetInstitutionProducts = id => ({
  type: ActionTypeKeys.GET_INSTITUTION_PRODUCTS,
  payload: api.getInstitutionProducts(id),
});

export const deleteProduct: DeleteProduct = id => ({
  type: ActionTypeKeys.DELETE_PRODUCT,
  payload: api.deleteProduct(id),
  meta: { id },
});

export const filterProducts: FilterProducts = data => ({
  type: ActionTypeKeys.FILTER_PRODUCTS,
  payload: api.filterProducts(data),
});

export const getProductDetails: GetProductDetails = id => ({
  type: ActionTypeKeys.GET_PRODUCT_DETAILS,
  payload: api.getProductDetails(id),
});

export const getProduct: GetProduct = id => ({
  type: ActionTypeKeys.GET_PRODUCT,
  payload: api.getProduct(id),
});

export const addProduct: AddProduct = data => ({
  type: ActionTypeKeys.ADD_PRODUCT,
  payload: api.addProduct(data),
});

export const updateProduct: UpdateProduct = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT,
  payload: api.updateProduct(data),
});

export const updateProductDetails: UpdateProductDetails = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS,
  payload: api.updateProductDetails(data),
  meta: data,
});

export const resetProducts: ResetProducts = () => ({
  type: ActionTypeKeys.RESET_PRODUCTS,
});

export const handleFilterProducts: HandleFilterProducts = () =>
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

export const handleGetInstitutionProducts: HandleGetInstitutionProducts = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getInstitutionProducts(id));
      },
      dispatch
    );
  };

export const handleDeleteProduct: HandleDeleteProduct = () =>
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

export const handleGetProductDetails: HandleGetProductDetails = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getProductDetails(id));
      },
      dispatch
    );
  };

export const handleGetProduct: HandleGetProduct = () =>
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

export const handleAddProduct: HandleAddProduct = data =>
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

export const handleUpdateProduct: HandleUpdateProduct = data =>
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

export const handleUpdateProductDetails: HandleUpdateProductDetails = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedData = prepareDetailsToSend(
          data,
          selectCurrentProductType(state)
        );

        await dispatch(updateProductDetails(preparedData));
      },
      dispatch
    );
  };
