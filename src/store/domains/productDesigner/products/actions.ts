
import { getFormValues, reset as resetForm } from 'redux-form';

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
  UpdateGeneralLegerAction,
  UpdateProductAction,
  UpdateProductAprAction,
  UpdateProductDetailsAction,
  UpdateProductFeeAction,
  UpdateProductRulesAction,
} from './actionTypes';
import * as api from './api';
import { selectCurrentInstitutionId, selectCurrentProductType } from './selectors';
import {
  GeneralLedgerItem,
  GeneralLedgerItemPrepared,
  NewProduct,
  NewProductPrepared,
  ProductApr,
  ProductAprFormValues,
  ProductAprIds,
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
  prepareCardServiceDataToSend,
  prepareFormDataProductAprsToSend,
  prepareFormDataProductFeesToSend,
  prepareGeneralLedgerToSend,
  prepareGeneralProductDataToSend,
  prepareNewProductDataToSend,
  prepareProductAprsToSend,
  prepareProductDetailsDataToSend,
  prepareProductFeesToSend,
  prepareProductFiltersParamsToSend,
  prepareProductRuleDataToSend,
  prepareProductRuleIdsToSend,
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

export type AddProduct = (data: NewProductPrepared) => AddProductAction;
export type HandleAddProduct = (data: Partial<NewProduct>) => Thunk<void>;

export type UpdateCardService = (data: ServicesItems) => UpdateCardServiceAction;
export type HandleUpdateCardService = (data: Partial<ServicesItemsPrepared>) => Thunk<void>;

export type UpdateGeneralLedger = (data: Partial<GeneralLedgerItem>) => UpdateGeneralLegerAction;
export type HandleUpdateGeneralLedger = (data: Partial<GeneralLedgerItemPrepared>) => Thunk<void>;

export type UpdateProduct = (data: ProductItemResp) => UpdateProductAction;
export type HandleUpdateProduct = (data: Partial<ProductItemGeneral>) => Thunk<void>;

export type UpdateProductDetails = (data: ProductItemDetailsResp) => UpdateProductDetailsAction;
export type HandleUpdateProductDetails = (data: Partial<ProductItemDetails>) => Thunk<void>;

export type UpdateProductRules = (data: ProductRulesItemResp) => UpdateProductRulesAction;
export type HandleUpdateProductRules = (data: Partial<ProductRulesItem>) => Thunk<void>;

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

export const updateCardService: UpdateCardService = data => ({
  type: ActionTypeKeys.UPDATE_CARD_SERVICES,
  payload: api.updateCardService(data),
});

export const updateGeneralLedger: UpdateGeneralLedger = data => ({
  type: ActionTypeKeys.UPDATE_GENERAL_LEDGER,
  payload: api.updateGeneralLedger(data),
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

export const updateProductRules: UpdateProductRules = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_RULES,
  payload: api.updateProductRules(data),
});

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

export const handleUpdateCardService: HandleUpdateCardService = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareCardServiceDataToSend(data);

        await dispatch(updateCardService(preparedValues));
        await dispatch(handleFilterProducts());
      },
      dispatch
    );
  };

export const handleUpdateGeneralLedger: HandleUpdateGeneralLedger = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareGeneralLedgerToSend(data);

        await dispatch(updateGeneralLedger(preparedValues));
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
          dispatch(openModal({
            name: modalNamesConst.EDIT_PRODUCT,
          }));
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

export const handleUpdateProductRules: HandleUpdateProductRules = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedValues = prepareProductRuleDataToSend(data);

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
