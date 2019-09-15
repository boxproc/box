
import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddProductAction,
  DeleteProductAction,
  FilterProductsAction,
  GetEndpointsProductServiceAction,
  GetInstitutionProductsAction,
  GetInterfacesProductServiceAction,
  GetProductAction,
  GetProductDetailsAction,
  GetProductIdAction,
  GetProductRulesAction,
  GetRuleByActionTypeAction,
  GetRuleByEventAction,
  SetRulesCodeAction,
  UpdateCardServiceAction,
  UpdateProductAction,
  UpdateProductDetailsAction,
  UpdateProductRulesAction,
} from './actionTypes';

import * as api from './api';

import {
  selectCurrentInstitutionId,
  selectCurrentProductId,
  selectCurrentProductType,
} from './selectors';

import {
  NewProduct,
  NewProductPrepared,
  ProductFilterParamsPrepared,
  ProductItemDetails,
  ProductItemDetailsResp,
  ProductItemGeneral,
  ProductItemResp,
  ProductRulesItem,
  ProductRulesItemResp,
  ServicesItems,
  ServicesItemsPrepared,
} from './types';

import {
  prepareGeneralProductValuesToSend,
  prepareNewProductValuesToSend,
  prepareProductDetailsValuesToSend,
  prepareProductFiltersParamsToSend,
  prepareProductRuleValuesToSend,
  prepareUpdateCardServiceValuesPrepared,
} from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetInstitutionProducts = (id: number | string) => GetInstitutionProductsAction;
export type HandleGetInstitutionProducts = (id: number | string) => Thunk<void>;

export type DeleteProduct = (id: number) => DeleteProductAction;
export type HandleDeleteProduct = () => Thunk<void>;

export type FilterProducts = (params: ProductFilterParamsPrepared) => FilterProductsAction;
export type HandleFilterProducts = () => Thunk<void>;

export type GetProductId = (id: number) => GetProductIdAction;
export type HandleGetProductId = (id: number) => void;

export type GetProduct = (id: number) => GetProductAction;
export type HandleGetProduct = () => Thunk<void>;

export type GetProductDetails = (id: number) => GetProductDetailsAction;
export type HandleGetProductDetails = () => Thunk<void>;

export type GetProductRules = (id: number) => GetProductRulesAction;
export type HandleGetProductRules = (id: number) => Thunk<void>;

export type GetInterfacesService = (institutionId: string | number) =>
  GetInterfacesProductServiceAction;
export type HandleGetInterfacesService = () => Thunk<void>;

export type GetEndpointsService = (institutionId: string | number) =>
  GetEndpointsProductServiceAction;
export type HandleGetEndpointsService = () =>
  Thunk<void>;

export type SetRulesCode = (code: string) => SetRulesCodeAction;
export type HandleSetRulesCode = (code: string) => void;

export type GetRuleByEvent = (event: string | number) => GetRuleByEventAction;
export type HandleGetRuleByEvent = (event: string | number) => void;

export type GetRuleByActionType = (actionType: string | number) => GetRuleByActionTypeAction;
export type HandleGetRuleByActionType = (actionType: string | number) => void;

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
  meta: id,
});

export const filterProducts: FilterProducts = params => ({
  type: ActionTypeKeys.FILTER_PRODUCTS,
  payload: api.filterProducts(params),
});

export const getProductId: GetProductId = id => ({
  type: ActionTypeKeys.GET_PRODUCT_ID,
  payload: id,
});

export const setRulesCode: SetRulesCode = code => ({
  type: ActionTypeKeys.SET_RULES_CODE,
  payload: code,
});

export const getRuleByEvent: GetRuleByEvent = event => ({
  type: ActionTypeKeys.GET_RULE_BY_EVENT,
  payload: event,
});

export const getRuleByActionType: GetRuleByActionType = actionType => ({
  type: ActionTypeKeys.GET_RULE_BY_ACTION_TYPE,
  payload: actionType,
});

export const getProduct: GetProduct = id => ({
  type: ActionTypeKeys.GET_PRODUCT,
  payload: api.getProduct(id),
});

export const updateCardService: UpdateCardService = values => ({
  type: ActionTypeKeys.UPDATE_CARD_SERVICES,
  payload: api.updateCardService(values),
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

export const handleUpdateCardService: HandleUpdateCardService = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareUpdateCardServiceValuesPrepared(values);

        await dispatch(updateCardService(preparedValues));
      },
      dispatch
    );
  };

export const handleFilterProducts: HandleFilterProducts = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCTS_FILTER);
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
export const handleGetInterfacesService: HandleGetInterfacesService = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const currentInstitutionId = selectCurrentInstitutionId(state);
        await dispatch(getInterfacesService(currentInstitutionId));
      },
      dispatch
    );
  };
export const handleGetEndpointsService: HandleGetEndpointsService = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const currentInstitutionId = selectCurrentInstitutionId(state);
        await dispatch(getEndpointsService(currentInstitutionId));
      },
      dispatch
    );
  };

export const handleGetProductId: HandleGetProductId = id =>
  getProductId(id);

export const handleSetRulesCode: HandleSetRulesCode = code =>
  setRulesCode(code);

export const handleGetRuleByEvent: HandleGetRuleByEvent = event =>
  getRuleByEvent(event);

export const handleGetRuleByActionType: HandleGetRuleByActionType = actionType =>
  getRuleByActionType(actionType);

export const handleDeleteProduct: HandleDeleteProduct = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectCurrentProductId(state);

        await dispatch(deleteProduct(id));
        await dispatch(closeModal(modalNamesConst.EDIT_PRODUCT));
      },
      dispatch
    );
  };

export const handleGetProduct: HandleGetProduct = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectCurrentProductId(state);

        await dispatch(getProduct(id));
      },
      dispatch
    );
  };

export const handleGetProductDetails: HandleGetProductDetails = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectCurrentProductId(state);

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
        await dispatch(closeModal(modalNamesConst.ADD_PRODUCT));
        await dispatch(handleFilterProducts());
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
        await dispatch(handleFilterProducts());
        await dispatch(handleGetProduct());
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
        await dispatch(handleFilterProducts());
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
        const currentProductId = selectCurrentProductId(state);

        await dispatch(updateProductRules({
          ...preparedValues,
          product_id: selectCurrentProductId(state),
        }));
        await dispatch(handleFilterProducts());
        await dispatch(handleGetProductRules(currentProductId));
      },
      dispatch
    );
  };
