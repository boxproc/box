import {
  InstitutionProducts,
  InstitutionProductServiceEndpoints,
  InstitutionProductServiceInterfaces,
  ProductAprIds,
  ProductAprItems,
  ProductDataResp,
  ProductDetailsResp,
  ProductFeeAprItems,
  ProductFeeItems,
  ProductFeesIds,
  ProductLoanIllustrationDataResp,
  ProductRevolvingCreditIllustrationAllDataResp,
  ProductRewardItems,
  ProductRewardsIds,
  ProductRuleResp,
  ProductsDataResp,
} from './types';

import { ApiResponse, ResponseStatusType, } from 'types';

export enum ActionTypeKeys {
  GET_INSTITUTION_PRODUCTS = 'productDesigner/products/GET_INSTITUTION_PRODUCTS',
  GET_INSTITUTION_PRODUCTS_FULFILLED =
  'productDesigner/products/GET_INSTITUTION_PRODUCTS_FULFILLED',
  GET_INSTITUTION_PRODUCTS_REJECTED =
  'productDesigner/products/GET_INSTITUTION_PRODUCTS_REJECTED',

  DELETE_PRODUCT = 'productDesigner/products/DELETE_PRODUCT',
  DELETE_PRODUCT_FULFILLED = 'productDesigner/products/DELETE_PRODUCT_FULFILLED',
  DELETE_PRODUCT_REJECTED = 'productDesigner/products/DELETE_PRODUCT_REJECTED',

  FILTER_PRODUCTS = 'productDesigner/products/FILTER_PRODUCTS',
  FILTER_PRODUCTS_FULFILLED = 'productDesigner/products/FILTER_PRODUCTS_FULFILLED',
  FILTER_PRODUCTS_REJECTED = 'productDesigner/products/FILTER_PRODUCTS_REJECTED',

  GET_PRODUCT = 'productDesigner/products/GET_PRODUCT',
  GET_PRODUCT_FULFILLED = 'productDesigner/products/GET_PRODUCT_FULFILLED',
  GET_PRODUCT_REJECTED = 'productDesigner/products/GET_PRODUCT_REJECTED',

  GET_PRODUCT_FEE_APR = 'productDesigner/products/GET_PRODUCT_FEE_APR',
  GET_PRODUCT_FEE_APR_FULFILLED = 'productDesigner/products/GET_PRODUCT_FEE_APR_FULFILLED',
  GET_PRODUCT_FEE_APR_REJECTED = 'productDesigner/products/GET_PRODUCT_FEE_APR_REJECTED',

  GET_PRODUCT_DETAILS = 'productDesigner/products/GET_PRODUCT_DETAILS',
  GET_PRODUCT_DETAILS_FULFILLED = 'productDesigner/products/GET_PRODUCT_DETAILS_FULFILLED',
  GET_PRODUCT_DETAILS_REJECTED = 'productDesigner/products/GET_PRODUCT_DETAILS_REJECTED',

  GET_PRODUCT_RULE = 'productDesigner/products/GET_PRODUCT_RULE',
  GET_PRODUCT_RULE_FULFILLED = 'productDesigner/products/GET_PRODUCT_RULE_FULFILLED',
  GET_PRODUCT_RULE_REJECTED = 'productDesigner/products/GET_PRODUCT_RULE_REJECTED',

  GET_SERVICE_INTERFACES = 'productDesigner/products/GET_SERVICE_INTERFACES',
  GET_SERVICE_INTERFACES_FULFILLED = 'productDesigner/products/GET_SERVICE_INTERFACES_FULFILLED',
  GET_SERVICE_INTERFACES_REJECTED = 'productDesigner/products/GET_SERVICE_INTERFACES_REJECTED',

  GET_SERVICE_ENDPOINTS = 'productDesigner/products/GET_SERVICE_ENDPOINTS',
  GET_SERVICE_ENDPOINTS_FULFILLED = 'productDesigner/products/GET_SERVICE_ENDPOINTS_FULFILLED',
  GET_SERVICE_ENDPOINTS_REJECTED = 'productDesigner/products/GET_SERVICE_ENDPOINTS_REJECTED',

  UPDATE_PRODUCT = 'productDesigner/products/UPDATE_PRODUCT',
  UPDATE_PRODUCT_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_FULFILLED',
  UPDATE_PRODUCT_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_REJECTED',

  UPDATE_PRODUCT_DETAILS = 'productDesigner/products/UPDATE_PRODUCT_DETAILS',
  UPDATE_PRODUCT_DETAILS_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_DETAILS_FULFILLED',
  UPDATE_PRODUCT_DETAILS_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_DETAILS_REJECTED',

  UPDATE_PRODUCT_RULES = 'productDesigner/products/UPDATE_PRODUCT_RULES',
  UPDATE_PRODUCT_RULES_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_RULES_FULFILLED',
  UPDATE_PRODUCT_RULES_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_RULES_REJECTED',

  ADD_PRODUCT = 'productDesigner/products/ADD_PRODUCT',
  ADD_PRODUCT_FULFILLED = 'productDesigner/products/ADD_PRODUCT_FULFILLED',
  ADD_PRODUCT_REJECTED = 'productDesigner/products/ADD_PRODUCT_REJECTED',

  UPDATE_CARD_SERVICES = 'productDesigner/products/UPDATE_CARD_SERVICES',
  UPDATE_CARD_SERVICES_FULFILLED = 'productDesigner/products/UPDATE_CARD_SERVICES_FULFILLED',
  UPDATE_CARD_SERVICES_REJECTED = 'productDesigner/products/UPDATE_CARD_SERVICES_REJECTED',

  UPDATE_GENERAL_LEDGER = 'productDesigner/products/UPDATE_GENERAL_LEDGER',
  UPDATE_GENERAL_LEDGER_FULFILLED = 'productDesigner/products/UPDATE_GENERAL_LEDGER_FULFILLED',
  UPDATE_GENERAL_LEDGER_REJECTED = 'productDesigner/products/UPDATE_GENERAL_LEDGER_REJECTED',

  UPDATE_PRODUCT_AUX_COUNTERS = 'productDesigner/products/UPDATE_PRODUCT_AUX_COUNTERS',
  UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED =
  'productDesigner/products/UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED',
  UPDATE_PRODUCT_AUX_COUNTERS_REJECTED =
  'productDesigner/products/UPDATE_PRODUCT_AUX_COUNTERS_REJECTED',

  GET_PRODUCT_APRS = 'productDesigner/products/GET_PRODUCT_APRS',
  GET_PRODUCT_APRS_FULFILLED = 'productDesigner/products/GET_PRODUCT_APRS_FULFILLED',
  GET_PRODUCT_APRS_REJECTED = 'productDesigner/products/GET_PRODUCT_APRS_REJECTED',

  ADD_PRODUCT_APR = 'productDesigner/products/ADD_PRODUCT_APR',
  ADD_PRODUCT_APR_FULFILLED = 'productDesigner/products/ADD_PRODUCT_APR_FULFILLED',
  ADD_PRODUCT_APR_REJECTED = 'productDesigner/products/ADD_PRODUCT_APR_REJECTED',

  UPDATE_PRODUCT_APR = 'productDesigner/products/UPDATE_PRODUCT_APR',
  UPDATE_PRODUCT_APR_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_APR_FULFILLED',
  UPDATE_PRODUCT_APR_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_APR_REJECTED',

  DELETE_PRODUCT_APR = 'productDesigner/products/DELETE_PRODUCT_APR',
  DELETE_PRODUCT_APR_FULFILLED = 'productDesigner/products/DELETE_PRODUCT_APR_FULFILLED',
  DELETE_PRODUCT_APR_REJECTED = 'productDesigner/products/DELETE_PRODUCT_APR_REJECTED',

  GET_PRODUCT_FEES = 'productDesigner/products/GET_PRODUCT_FEES',
  GET_PRODUCT_FEES_FULFILLED = 'productDesigner/products/GET_PRODUCT_FEES_FULFILLED',
  GET_PRODUCT_FEES_REJECTED = 'productDesigner/products/GET_PRODUCT_FEES_REJECTED',

  ADD_PRODUCT_FEE = 'productDesigner/products/ADD_PRODUCT_FEE',
  ADD_PRODUCT_FEE_FULFILLED = 'productDesigner/products/ADD_PRODUCT_FEE_FULFILLED',
  ADD_PRODUCT_FEE_REJECTED = 'productDesigner/products/ADD_PRODUCT_FEE_REJECTED',

  UPDATE_PRODUCT_FEE = 'productDesigner/products/UPDATE_PRODUCT_FEE',
  UPDATE_PRODUCT_FEE_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_FEE_FULFILLED',
  UPDATE_PRODUCT_FEE_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_FEE_REJECTED',

  DELETE_PRODUCT_FEE = 'productDesigner/products/DELETE_PRODUCT_FEE',
  DELETE_PRODUCT_FEE_FULFILLED = 'productDesigner/products/DELETE_PRODUCT_FEE_FULFILLED',
  DELETE_PRODUCT_FEE_REJECTED = 'productDesigner/products/DELETE_PRODUCT_FEE_REJECTED',

  GET_PRODUCT_REWARDS = 'productDesigner/products/GET_PRODUCT_REWARDS',
  GET_PRODUCT_REWARDS_FULFILLED = 'productDesigner/products/GET_PRODUCT_REWARDS_FULFILLED',
  GET_PRODUCT_REWARDS_REJECTED = 'productDesigner/products/GET_PRODUCT_REWARDS_REJECTED',

  ADD_PRODUCT_REWARD = 'productDesigner/products/ADD_PRODUCT_REWARD',
  ADD_PRODUCT_REWARD_FULFILLED = 'productDesigner/products/ADD_PRODUCT_REWARD_FULFILLED',
  ADD_PRODUCT_REWARD_REJECTED = 'productDesigner/products/ADD_PRODUCT_REWARD_REJECTED',

  UPDATE_PRODUCT_REWARD = 'productDesigner/products/UPDATE_PRODUCT_REWARD',
  UPDATE_PRODUCT_REWARD_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_REWARD_FULFILLED',
  UPDATE_PRODUCT_REWARD_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_REWARD_REJECTED',

  DELETE_PRODUCT_REWARD = 'productDesigner/products/DELETE_PRODUCT_REWARD',
  DELETE_PRODUCT_REWARD_FULFILLED = 'productDesigner/products/DELETE_PRODUCT_REWARD_FULFILLED',
  DELETE_PRODUCT_REWARD_REJECTED = 'productDesigner/products/DELETE_PRODUCT_REWARD_REJECTED',

  ILLUSTRATE_PRODUCT_LOAN = 'productDesigner/products/ILLUSTRATE_PRODUCT_LOAN',
  ILLUSTRATE_PRODUCT_LOAN_FULFILLED = 'productDesigner/products/ILLUSTRATE_PRODUCT_LOAN_FULFILLED',
  ILLUSTRATE_PRODUCT_LOAN_REJECTED = 'productDesigner/products/ILLUSTRATE_PRODUCT_LOAN_REJECTED',

  ILLUSTRATE_PRODUCT_REVOLVING_CREDIT =
  'productDesigner/products/ILLUSTRATE_PRODUCT_REVOLVING_CREDIT',
  ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_FULFILLED =
  'productDesigner/products/ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_FULFILLED',
  ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_REJECTED =
  'productDesigner/products/ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_REJECTED',

  RESET_PRODUCTS = 'productDesigner/products/RESET_PRODUCTS',

  RESET_ILLUSTRATION_LOAN = 'productDesigner/products/RESET_ILLUSTRATION_LOAN',
}

export interface GetInstitutionProductsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_INSTITUTION_PRODUCTS;
}

export interface GetInstitutionProductsFulfilledAction {
  readonly payload: InstitutionProducts;
  readonly type: ActionTypeKeys.GET_INSTITUTION_PRODUCTS_FULFILLED;
}

export interface GetInstitutionProductsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_INSTITUTION_PRODUCTS_REJECTED;
}

export interface GetInterfacesProductServiceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SERVICE_INTERFACES;
}

export interface GetInterfacesProductServiceFulfilledAction {
  readonly payload: InstitutionProductServiceInterfaces;
  readonly type: ActionTypeKeys.GET_SERVICE_INTERFACES_FULFILLED;
}

export interface GetInterfacesProductServiceRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_SERVICE_INTERFACES_REJECTED;
}

export interface GetEndpointsProductServiceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SERVICE_ENDPOINTS;
}

export interface GetEndpointsProductServiceFulfilledAction {
  readonly payload: InstitutionProductServiceEndpoints;
  readonly type: ActionTypeKeys.GET_SERVICE_ENDPOINTS_FULFILLED;
}

export interface GetEndpointsProductServiceRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_SERVICE_ENDPOINTS_REJECTED;
}

export interface DeleteProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT;
}

export interface DeleteProductFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FULFILLED;
  readonly meta: { id: number };
}

export interface DeleteProductRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REJECTED;
}

export interface FilterProductsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS;
}

export interface FilterProductsFulfilledAction {
  readonly payload: ProductsDataResp;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS_FULFILLED;
}

export interface FilterProductsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS_REJECTED;
}

export interface GetProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT;
}

export interface GetProductFulfilledAction {
  readonly payload: ProductDataResp;
  readonly type: ActionTypeKeys.GET_PRODUCT_FULFILLED;
}

export interface GetProductRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_REJECTED;
}

export interface GetProductDetailsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_DETAILS;
}

export interface GetProductDetailsFulfilledAction {
  readonly payload: ProductDetailsResp;
  readonly type: ActionTypeKeys.GET_PRODUCT_DETAILS_FULFILLED;
}

export interface GetProductDetailsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_DETAILS_REJECTED;
}

export interface GetProductRuleAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE;
}

export interface GetProductRuleFulfilledAction {
  readonly payload: ProductRuleResp;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE_FULFILLED;
}

export interface GetProductRuleRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE_REJECTED;
}

export interface UpdateProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT;
}

export interface UpdateProductFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FULFILLED;
}

export interface UpdateProductRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REJECTED;
}

export interface UpdateProductDetailsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS;
}

export interface UpdateProductDetailsFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS_FULFILLED;
}

export interface UpdateProductDetailsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS_REJECTED;
}

export interface UpdateProductRulesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES;
}

export interface UpdateProductRulesFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES_FULFILLED;
}

export interface UpdateProductRulesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES_REJECTED;
}

export interface AddProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT;
}

export interface AddProductFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FULFILLED;
}

export interface AddProductRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REJECTED;
}

export interface UpdateCardServiceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_CARD_SERVICES;
}

export interface UpdateCardServiceFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_CARD_SERVICES_FULFILLED;
}

export interface UpdateCardServiceRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_CARD_SERVICES_REJECTED;
}

export interface UpdateGeneralLedgerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER;
}

export interface UpdateGeneralLedgerFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER_FULFILLED;
}

export interface UpdateGeneralLedgerRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER_REJECTED;
}

export interface UpdateProductAuxCountersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS;
}

export interface UpdateProductAuxCountersFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED;
}

export interface UpdateProductAuxCountersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS_REJECTED;
}

export interface GetProductAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS;
}

export interface GetProductAprsFulfilledAction {
  readonly payload: ProductAprItems;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS_FULFILLED;
}

export interface GetProductAprsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_APRS_REJECTED;
}

export interface GetProductFeeAprsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR;
}

export interface GetProductFeeAprsFulfilledAction {
  readonly payload: ProductFeeAprItems;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR_FULFILLED;
}

export interface GetProductFeeAprsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEE_APR_REJECTED;
}

export interface AddProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR;
}

export interface AddProductAprFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR_FULFILLED;
}

export interface AddProductAprRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_APR_REJECTED;
}

export interface UpdateProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR;
}

export interface UpdateProductAprFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR_FULFILLED;
}

export interface UpdateProductAprRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_APR_REJECTED;
}

export interface DeleteProductAprAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR;
}

export interface DeleteProductAprFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR_FULFILLED;
  readonly meta: { data: ProductAprIds };
}

export interface DeleteProductAprRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_APR_REJECTED;
}

export interface GetProductFeesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES;
}

export interface GetProductFeesFulfilledAction {
  readonly payload: ProductFeeItems;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES_FULFILLED;
}

export interface GetProductFeesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_FEES_REJECTED;
}

export interface AddProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE;
}

export interface AddProductFeeFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE_FULFILLED;
}

export interface AddProductFeeRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FEE_REJECTED;
}

export interface UpdateProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE;
}

export interface UpdateProductFeeFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE_FULFILLED;
}

export interface UpdateProductFeeRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FEE_REJECTED;
}

export interface DeleteProductFeeAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE;
}

export interface DeleteProductFeeFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE_FULFILLED;
  readonly meta: { data: ProductFeesIds };
}

export interface DeleteProductFeeRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FEE_REJECTED;
}

export interface GetProductRewardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS;
}

export interface GetProductRewardsFulfilledAction {
  readonly payload: ProductRewardItems;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS_FULFILLED;
}

export interface GetProductRewardsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_REWARDS_REJECTED;
}

export interface AddProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD;
}

export interface AddProductRewardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD_FULFILLED;
}

export interface AddProductRewardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REWARD_REJECTED;
}

export interface UpdateProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD;
}

export interface UpdateProductRewardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD_FULFILLED;
}

export interface UpdateProductRewardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REWARD_REJECTED;
}

export interface DeleteProductRewardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD;
}

export interface DeleteProductRewardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD_FULFILLED;
  readonly meta: { data: ProductRewardsIds };
}

export interface DeleteProductRewardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REWARD_REJECTED;
}

export interface IllustrateProductLoanAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN;
}

export interface IllustrateProductLoanFulfilledAction {
  readonly payload: ProductLoanIllustrationDataResp;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN_FULFILLED;
}

export interface IllustrateProductLoanRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN_REJECTED;
}

export interface IllustrateProductRevolvingCreditAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT;
}

export interface IllustrateProductRevolvingCreditFulfilledAction {
  readonly payload: ProductRevolvingCreditIllustrationAllDataResp;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_FULFILLED;
}

export interface IllustrateProductRevolvingCreditRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_REJECTED;
}

export interface ResetProductsAction {
  readonly type: ActionTypeKeys.RESET_PRODUCTS;
}

export interface ResetIllustrationLoanAction {
  readonly type: ActionTypeKeys.RESET_ILLUSTRATION_LOAN;
}

export type ProductsActionTypes =
  | GetInstitutionProductsFulfilledAction
  | DeleteProductFulfilledAction
  | FilterProductsFulfilledAction
  | GetProductFulfilledAction
  | GetProductDetailsFulfilledAction
  | GetProductRuleFulfilledAction
  | GetEndpointsProductServiceFulfilledAction
  | GetInterfacesProductServiceFulfilledAction
  | AddProductFulfilledAction
  | UpdateProductFulfilledAction
  | UpdateProductDetailsFulfilledAction
  | UpdateProductRulesFulfilledAction
  | GetProductAprsFulfilledAction
  | AddProductAprFulfilledAction
  | UpdateProductAprFulfilledAction
  | DeleteProductAprFulfilledAction
  | GetProductFeesFulfilledAction
  | UpdateProductFeeFulfilledAction
  | AddProductFeeFulfilledAction
  | DeleteProductFeeFulfilledAction
  | GetProductRewardsFulfilledAction
  | UpdateProductRewardFulfilledAction
  | AddProductRewardFulfilledAction
  | DeleteProductRewardFulfilledAction
  | UpdateGeneralLedgerFulfilledAction
  | UpdateProductAuxCountersFulfilledAction
  | GetProductFeeAprsFulfilledAction
  | IllustrateProductLoanFulfilledAction
  | IllustrateProductRevolvingCreditFulfilledAction
  | ResetProductsAction
  | ResetIllustrationLoanAction;
