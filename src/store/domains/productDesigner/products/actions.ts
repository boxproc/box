
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
  AddProductRewardAction,
  DeleteProductAction,
  DeleteProductAprAction,
  DeleteProductFeeAction,
  DeleteProductRewardAction,
  FilterProductsAction,
  GetEndpointsProductServiceAction,
  GetInstitutionProductsAction,
  GetInterfacesProductServiceAction,
  GetProductAction,
  GetProductAprsAction,
  GetProductDetailsAction,
  GetProductFeeAprsAction,
  GetProductFeesAction,
  GetProductRewardsAction,
  GetProductRuleAction,
  IllustrateProductLoanAction,
  IllustrateProductRevolvingCreditAction,
  UpdateCardServiceAction,
  UpdateGeneralLedgerAction,
  UpdateProductAction,
  UpdateProductAprAction,
  UpdateProductAuxCountersAction,
  UpdateProductDetailsAction,
  UpdateProductFeeAction,
  UpdateProductRewardAction,
  UpdateProductRulesAction,
} from './actionTypes';
import * as api from './api';
import { selectCurrentProductType } from './selectors';
import {
  GeneralLedgerItem,
  GeneralLedgerItemPrepared,
  LoanProductIllustratePrepared,
  NewProduct,
  NewProductPrepared,
  ProductApr,
  ProductAprFormValues,
  ProductAprIds,
  ProductAprItem,
  ProductAuxCountersItem,
  ProductAuxCountersItemPrepared,
  ProductFee,
  ProductFeeFormValues,
  ProductFeeItem,
  ProductFeesIds,
  ProductFilterPrepared,
  ProductItemDetails,
  ProductItemDetailsResp,
  ProductItemGeneral,
  ProductItemResp,
  ProductReward,
  ProductRewardFormValues,
  ProductRewardItem,
  ProductRewardsIds,
  ProductRuleRequestPrepared,
  ProductRulesItem,
  ProductRulesItemResp,
  RevolvingCreditProductIllustratePrepared,
  ServicesItems,
  ServicesItemsPrepared,
} from './types';
import {
  prepareAuxCountersToSend,
  prepareCardServiceDataToSend,
  prepareFormDataProductAprsToSend,
  prepareFormDataProductFeesToSend,
  prepareFormDataProductRewardsToSend,
  prepareGeneralLedgerToSend,
  prepareGeneralProductDataToSend,
  prepareNewProductDataToSend,
  prepareProductAprsToSend,
  prepareProductDetailsDataToSend,
  prepareProductFeesToSend,
  prepareProductFilterDataToSend,
  prepareProductLoanIllustrateDataToSend,
  prepareProductRevolvingCreditIllustrateDataToSend,
  prepareProductRewardsToSend,
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

export type GetInterfacesService = (institutionId: number) =>
  GetInterfacesProductServiceAction;
export type GetEndpointsService = (institutionId: number) =>
  GetEndpointsProductServiceAction;

export type HandleGetInterfacesService = (institutionId: number) => Thunk<void>;
export type HandleGetProductServices = (institutionId: number) => Thunk<void>;

export type AddProduct = (data: NewProductPrepared) => AddProductAction;
export type HandleAddProduct = (data: Partial<NewProduct>) => Thunk<void>;

export type UpdateCardService = (data: ServicesItems) => UpdateCardServiceAction;
export type HandleUpdateCardService = (data: Partial<ServicesItemsPrepared>) => Thunk<void>;

export type UpdateGeneralLedger = (data: Partial<GeneralLedgerItem>) => UpdateGeneralLedgerAction;
export type HandleUpdateGeneralLedger = (data: Partial<GeneralLedgerItemPrepared>) => Thunk<void>;

export type UpdateProductAuxCounters = (data: Partial<ProductAuxCountersItem>) =>
  UpdateProductAuxCountersAction;
export type HandleUpdateProductAuxCounters = (data: Partial<ProductAuxCountersItemPrepared>) =>
  Thunk<void>;

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

export type GetProductRewards = (id: number) => GetProductRewardsAction;
export type HandleGetProductRewards = () => Thunk<void>;

export type AddProductReward = (data: Partial<ProductRewardItem>) => AddProductRewardAction;
export type HandleAddProductReward = (data: Partial<ProductRewardFormValues>) => Thunk<void>;

export type UpdateProductReward = (data: Partial<ProductRewardItem>) => UpdateProductRewardAction;
export type HandleUpdateProductReward = (data: Partial<ProductReward>) => Thunk<void>;

export type DeleteProductReward = (data: ProductRewardsIds) => DeleteProductRewardAction;
export type HandleDeleteProductReward = (data: ProductRewardsIds) => Thunk<void>;

export type GetProductFeeAprs = (id: number) => GetProductFeeAprsAction;
export type HandleGetProductFeeAprs = () => Thunk<void>;

export type IllustrateLoanProduct = (data: Partial<LoanProductIllustratePrepared>) =>
  IllustrateProductLoanAction;
export type HandleIllustrateLoanProduct = () => Thunk<void>;

export type IllustrateRevolvingCreditProduct =
(data: Partial<RevolvingCreditProductIllustratePrepared>) => IllustrateProductRevolvingCreditAction;
export type HandleIllustrateRevolvingCreditProduct = () => Thunk<void>;

export type HandleGetProductAprsFeesRewards = () => Thunk<void>;

export type ResetProducts = () => void;

export type ResetIllustrationLoan = () => void;

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

export const updateProductAuxCounters: UpdateProductAuxCounters = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS,
  payload: api.updateProductAuxCounters(data),
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

export const getProductRewards: GetProductRewards = id => ({
  type: ActionTypeKeys.GET_PRODUCT_REWARDS,
  payload: api.getProductRewards(id),
});

export const addProductReward: AddProductReward = data => ({
  type: ActionTypeKeys.ADD_PRODUCT_REWARD,
  payload: api.addProductReward(data),
});

export const updateProductReward: UpdateProductReward = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_REWARD,
  payload: api.updateProductReward(data),
});

export const deleteProductReward: DeleteProductReward = data => ({
  type: ActionTypeKeys.DELETE_PRODUCT_REWARD,
  payload: api.deleteProductReward(data),
  meta: { data },
});

export const getProductFeeAprs: GetProductFeeAprs = id => ({
  type: ActionTypeKeys.GET_PRODUCT_FEE_APR,
  payload: api.getProductFeeAprs(id),
});

export const illustrateLoanProduct: IllustrateLoanProduct = data => ({
  type: ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN,
  payload: api.illustrateLoanProduct(data),
});

export const illustrateRevolvingCreditProduct: IllustrateRevolvingCreditProduct = data => ({
  type: ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT,
  payload: api.illustrateRevolvingCreditProduct(data),
});

export const resetProducts: ResetProducts = () => ({
  type: ActionTypeKeys.RESET_PRODUCTS,
});

export const resetIllustrationLoan: ResetIllustrationLoan = () => ({
  type: ActionTypeKeys.RESET_ILLUSTRATION_LOAN,
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

export const handleIllustrateLoanProduct: HandleIllustrateLoanProduct = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_ILLUSTRATION_FORM);
        const state = getState();
        const preparedValues = prepareProductLoanIllustrateDataToSend({
          productId: selectActiveItemId(state),
          ...formValues(state),
        }
        );

        if (preparedValues) {
          await dispatch(illustrateLoanProduct(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleIllustrateRevolvingCreditProduct: HandleIllustrateRevolvingCreditProduct = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_ILLUSTRATION_FORM);
        const state = getState();
        const preparedValues = prepareProductRevolvingCreditIllustrateDataToSend({
          productId: selectActiveItemId(state),
          ...formValues(state),
        }
        );

        if (preparedValues) {
          await dispatch(illustrateRevolvingCreditProduct(preparedValues));
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

export const handleGetInterfacesService: HandleGetInterfacesService = institutionId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getInterfacesService(institutionId));
      },
      dispatch
    );
  };

export const handleGetProductServices: HandleGetProductServices = institutionId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await Promise.all([
          dispatch(getInterfacesService(institutionId)),
          dispatch(getEndpointsService(institutionId)),
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

export const handleUpdateProductAuxCounters: HandleUpdateProductAuxCounters = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAuxCountersToSend(data);

        await dispatch(updateProductAuxCounters(preparedValues));
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

export const handleGetProductRewards: HandleGetProductRewards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = selectActiveItemId(state);

        await dispatch(getProductRewards(productId));
      },
      dispatch
    );
  };

export const handleAddProductReward: HandleAddProductReward = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = selectActiveItemId(state);
        const preparedValues = prepareFormDataProductRewardsToSend(data);

        await dispatch(addProductReward({
          ...preparedValues,
          product_id: productId,
        }));
        await dispatch(handleGetProductRewards());
        dispatch(resetForm(formNamesConst.PRODUCT_FEES));
      },
      dispatch
    );
  };

export const handleUpdateProductReward: HandleUpdateProductReward = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareProductRewardsToSend(data);

        await dispatch(updateProductReward(preparedValues));
        await dispatch(handleGetProductRewards());
      },
      dispatch
    );
  };

export const handleDeleteProductReward: HandleDeleteProductReward = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteProductReward(data));
      },
      dispatch
    );
  };

export const handleGetProductAprsFeesRewards: HandleGetProductAprsFeesRewards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = selectActiveItemId(state);

        await Promise.all([
          dispatch(getProductAprs(productId)),
          dispatch(getProductFees(productId)),
          dispatch(getProductRewards(productId)),
        ]);
      },
      dispatch
    );
  };

export const handleGetProductFeeAprs: HandleGetProductFeeAprs = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = selectActiveItemId(state);

        await dispatch(getProductFeeAprs(productId));
      },
      dispatch
    );
  };
