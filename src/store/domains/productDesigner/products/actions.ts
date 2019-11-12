
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemConsts } from 'consts';

import { closeModal } from 'store/domains/modals';

import { handleFilterLedgerAccounts } from 'store/domains';
import { selectActiveItemId, selectIsAccessibleFiltering } from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddProductAction,
  AddProductAprAction,
  AddProductFeeAction,
  DeleteProductAction,
  DeleteProductAprAction,
  DeleteProductFeeAction,
  FilterProductsAction,
  GetEndpointsProductServiceAction,
  GetInstitutionProductsAction,
  GetInterfacesProductServiceAction,
  GetProductAction,
  GetProductAprsAction,
  GetProductDetailsAction,
  GetProductFeesAction,
  GetProductRuleAction,
  UpdateCardServiceAction,
  UpdateProductAction,
  UpdateProductAprAction,
  UpdateProductDetailsAction,
  UpdateProductFeeAction,
  UpdateProductRulesAction,
} from './actionTypes';
import * as api from './api';
import { selectCurrentInstitutionId, selectCurrentProductType } from './selectors';
import {
  NewProduct,
  NewProductPrepared,
  ProductApr,
  ProductAprFormValues,
  ProductAprItem,
  ProductFee,
  ProductFeeFormValues,
  ProductFeeItem,
  ProductFeesIds,
  ProductFilterPrepared,
  ProductItemDetails,
  ProductItemDetailsResp,
  ProductItemGeneral,
  ProductItemResp,
  ProductRuleRequestPrepared,
  ProductRulesItem,
  ProductRulesItemResp,
  ServicesItems,
  ServicesItemsPrepared,
} from './types';
import {
  prepareFormValuesProductAprsToSend,
  prepareFormValuesProductFeesToSend,
  prepareGeneralProductValuesToSend,
  prepareNewProductValuesToSend,
  prepareProductAprsToSend,
  prepareProductDetailsValuesToSend,
  prepareProductFeesToSend,
  prepareProductFiltersParamsToSend,
  prepareProductRuleIdsToSend,
  prepareProductRuleValuesToSend,
  prepareUpdateCardServiceValuesPrepared,
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

export type GetProductRule = (data: ProductRuleRequestPrepared) => GetProductRuleAction;
export type HandleGetProductRule = () => Thunk<void>;

export type GetInterfacesService = (institutionId: string | number) =>
  GetInterfacesProductServiceAction;
export type GetEndpointsService = (institutionId: string | number) =>
  GetEndpointsProductServiceAction;
export type HandleGetProductServices = () => Thunk<void>;

export type AddProduct = (values: NewProductPrepared) => AddProductAction;
export type HandleAddProduct = (values: Partial<NewProduct>) => Thunk<void>;

export type UpdateCardService = (values: ServicesItems) => UpdateCardServiceAction;
export type HandleUpdateCardService = (values: Partial<ServicesItemsPrepared>) => Thunk<void>;

export type UpdateProduct = (values: ProductItemResp) => UpdateProductAction;
export type HandleUpdateProduct = (values: Partial<ProductItemGeneral>) => Thunk<void>;

export type UpdateProductDetails = (values: ProductItemDetailsResp) => UpdateProductDetailsAction;
export type HandleUpdateProductDetails = (values: Partial<ProductItemDetails>) => Thunk<void>;

export type UpdateProductRules = (values: ProductRulesItemResp) => UpdateProductRulesAction;
export type HandleUpdateProductRules = (values: Partial<ProductRulesItem>) => Thunk<void>;

export type GetProductAprs = (id: number) => GetProductAprsAction;
export type HandleGetProductAprs = () => Thunk<void>;

export type AddProductApr = (values: Partial<ProductAprItem>) => AddProductAprAction;
export type HandleAddProductApr = (values: Partial<ProductAprFormValues>) => Thunk<void>;

export type UpdateProductApr = (values: Partial<ProductAprItem>) => UpdateProductAprAction;
export type HandleUpdateProductApr = (values: Partial<ProductApr>) => Thunk<void>;

export type DeleteProductApr = (id: number) => DeleteProductAprAction;
export type HandleDeleteProductApr = (id: number) => Thunk<void>;

export type GetProductFees = (id: number) => GetProductFeesAction;
export type HandleGetProductFees = () => Thunk<void>;

export type AddProductFee = (values: Partial<ProductFeeItem>) => AddProductFeeAction;
export type HandleAddProductFee = (values: Partial<ProductFeeFormValues>) => Thunk<void>;

export type UpdateProductFee = (values: Partial<ProductFeeItem>) => UpdateProductFeeAction;
export type HandleUpdateProductFee = (values: Partial<ProductFee>) => Thunk<void>;

export type DeleteProductFee = (data: ProductFeesIds) => DeleteProductFeeAction;
export type HandleDeleteProductFee = (data: ProductFeesIds) => Thunk<void>;

export type ResetProducts = () => void;

export const getInstitutionProducts: GetInstitutionProducts = id => ({
  type: ActionTypeKeys.GET_INSTITUTION_PRODUCTS,
  payload: api.getInstitutionProducts(id),
});

export const getEndpointsService: GetEndpointsService = institutionId => ({
  type: ActionTypeKeys.GET_SERVICE_ENDPOINTS,
  payload: api.getEndpointsService(institutionId),
});

export const getInterfacesService: GetInterfacesService = institutionId => ({
  type: ActionTypeKeys.GET_SERVICE_INTERFACES,
  payload: api.getInterfacesService(institutionId),
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

export const updateCardService: UpdateCardService = values => ({
  type: ActionTypeKeys.UPDATE_CARD_SERVICES,
  payload: api.updateCardService(values),
});

export const getProductDetails: GetProductDetails = id => ({
  type: ActionTypeKeys.GET_PRODUCT_DETAILS,
  payload: api.getProductDetails(id),
});

export const getProduct: GetProduct = id => ({
  type: ActionTypeKeys.GET_PRODUCT,
  payload: api.getProduct(id),
});

export const getProductRule: GetProductRule = data => ({
  type: ActionTypeKeys.GET_PRODUCT_RULE,
  payload: api.getProductRule(data),
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

export const getProductAprs: GetProductAprs = id => ({
  type: ActionTypeKeys.GET_PRODUCT_APRS,
  payload: api.getProductAprs(id),
});

export const addProductApr: AddProductApr = values => ({
  type: ActionTypeKeys.ADD_PRODUCT_APR,
  payload: api.addProductApr(values),
});

export const updateProductApr: UpdateProductApr = values => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_APR,
  payload: api.updateProductApr(values),
});

export const deleteProductApr: DeleteProductApr = id => ({
  type: ActionTypeKeys.DELETE_PRODUCT_APR,
  payload: api.deleteProductApr(id),
  meta: { id },
});

export const getProductFees: GetProductFees = id => ({
  type: ActionTypeKeys.GET_PRODUCT_FEES,
  payload: api.getProductFees(id),
});

export const addProductFee: AddProductFee = values => ({
  type: ActionTypeKeys.ADD_PRODUCT_FEE,
  payload: api.addProductFee(values),
});

export const updateProductFee: UpdateProductFee = values => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_FEE,
  payload: api.updateProductFee(values),
});

export const deleteProductFee: DeleteProductFee = data => ({
  type: ActionTypeKeys.DELETE_PRODUCT_FEE,
  payload: api.deleteProductFee(data),
  meta: { data },
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
        const preparedValues = prepareProductFiltersParamsToSend(formValues(state));

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

export const handleGetProductServices: HandleGetProductServices = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const currentInstitutionId = selectCurrentInstitutionId(state);
        await Promise.all([
          dispatch(getInterfacesService(currentInstitutionId)),
          dispatch(getEndpointsService(currentInstitutionId)),
        ]);
      },
      dispatch
    );
  };

export const handleUpdateCardService: HandleUpdateCardService = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareUpdateCardServiceValuesPrepared(values);

        await dispatch(updateCardService(preparedValues));
        await dispatch(handleFilterProducts());
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

export const handleGetProductRule: HandleGetProductRule = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_RULES);
        const state = getState();
        const prepared = prepareProductRuleIdsToSend(formValues(state));

        await dispatch(getProductRule({
          product_id: selectActiveItemId(state),
          ...prepared,
        }));
      },
      dispatch
    );
  };

export const handleAddProduct: HandleAddProduct = values =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareNewProductValuesToSend(values);
        const state = getState();
        const isAccessibleFiltering = selectIsAccessibleFiltering(state);

        await dispatch(addProduct(preparedValues));
        dispatch(closeModal(modalNamesConst.ADD_PRODUCT));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterProducts());
        }
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
        await Promise.all([
          dispatch(handleGetProduct()),
          dispatch(handleFilterProducts()),
        ]);
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
        await dispatch(handleGetProductDetails());
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
          product_id: selectActiveItemId(state),
        }));
        await dispatch(handleGetProductRule());
      },
      dispatch
    );
  };

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

export const handleAddProductApr: HandleAddProductApr = values =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = selectActiveItemId(state);
        const preparedValues = prepareFormValuesProductAprsToSend(values);

        await dispatch(addProductApr({
          ...preparedValues,
          product_id: productId,
        }));
        await dispatch(handleGetProductAprs());
        await dispatch(resetForm(formNamesConst.PRODUCT_APRS));
      },
      dispatch
    );
  };

export const handleUpdateProductApr: HandleUpdateProductApr = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareProductAprsToSend(values);

        await dispatch(updateProductApr(preparedValues));
        await dispatch(handleGetProductAprs());
      },
      dispatch
    );
  };

export const handleDeleteProductApr: HandleDeleteProductApr = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProductApr(id));
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

export const handleAddProductFee: HandleAddProductFee = values =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = selectActiveItemId(state);
        const preparedValues = prepareFormValuesProductFeesToSend(values);

        await dispatch(addProductFee({
          ...preparedValues,
          product_id: productId,
        }));
        await dispatch(handleGetProductFees());
        await dispatch(resetForm(formNamesConst.PRODUCT_FEES));
      },
      dispatch
    );
  };

export const handleUpdateProductFee: HandleUpdateProductFee = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareProductFeesToSend(values);

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
