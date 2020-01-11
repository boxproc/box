
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemConsts } from 'consts';

import { closeModal, openModal } from 'store/domains/modals';

import { handleFilterLedgerAccounts } from 'store/domains';
import {
  selectActiveItemId,
  selectIsAccessibleFiltering,
  setActiveItemId,
} from 'store/domains/utils';
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
  prepareGeneralProductDataToSend,
  prepareNewProductDataToSend,
  prepareProductDetailsDataToSend,
  prepareProductFilterDataToSend,
} from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetInstitutionProducts = (id: number | string) => GetInstitutionProductsAction;
export type HandleGetInstitutionProducts = (id: number | string) => Thunk<void>;

export type DeleteProduct = (id: number) => DeleteProductAction;
export type HandleDeleteProduct = () => Thunk<void>;

export type FilterProducts = (params: ProductFilterPrepared) => FilterProductsAction;
export type HandleFilterProducts = () => Thunk<void>;

export type GetProductDetails = (id: number) => GetProductDetailsAction;
export type HandleGetProductDetails = () => Thunk<void>;

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

export const filterProducts: FilterProducts = params => ({
  type: ActionTypeKeys.FILTER_PRODUCTS,
  payload: api.filterProducts(params),
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
        const preparedValues = prepareProductFilterDataToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterProducts(preparedValues));
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
        const id = selectActiveItemId(state);

        await dispatch(deleteProduct(id));
        dispatch(closeModal(modalNamesConst.EDIT_PRODUCT));

        if (window.location.pathname === `${basePath}${uiItemConsts.LEDGER_ACCOUNTS}`) {
          await dispatch(handleFilterLedgerAccounts());
        }
      },
      dispatch
    );
  };

export const handleGetProductDetails: HandleGetProductDetails = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectActiveItemId(state);

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
        const id = selectActiveItemId(state);

        await dispatch(getProduct(id));
      },
      dispatch
    );
  };

export const handleAddProduct: HandleAddProduct = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareNewProductDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = selectIsAccessibleFiltering(state);

        const res = await dispatch(addProduct(preparedValues)) as any;

        if (res) {
          if (isAccessibleFiltering) {
            await dispatch(handleFilterProducts());
          }
          dispatch(closeModal(modalNamesConst.ADD_PRODUCT));
          dispatch(setActiveItemId(res.value.product_id));
          dispatch(openModal({ name: modalNamesConst.EDIT_PRODUCT }));
        }
      },
      dispatch
    );
  };

export const handleUpdateProduct: HandleUpdateProduct = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareGeneralProductDataToSend(data);

        await dispatch(updateProduct(preparedValues));
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
        const preparedValues = prepareProductDetailsDataToSend(
          data,
          selectCurrentProductType(state)
        );

        await dispatch(updateProductDetails(preparedValues));
        await dispatch(handleGetProductDetails());
      },
      dispatch
    );
  };
