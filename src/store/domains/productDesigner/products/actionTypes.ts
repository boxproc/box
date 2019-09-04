import {
  InstitutionProducts,
  InstitutionProductServiceEndpoints,
  InstitutionProductServiceInterfaces,
  ProductDataResp,
  ProductDetailsResp,
  ProductFilterParams,
  ProductRulesResp,
  ProductsDataResp,
} from './types';

import { ApiResponse, ResponseStatusType, } from 'types';

export enum ActionTypeKeys {
  GET_PRODUCTS = 'productDesigner/products/GET_PRODUCTS',
  GET_PRODUCTS_FULFILLED = 'productDesigner/products/GET_PRODUCTS_FULFILLED',
  GET_PRODUCTS_REJECTED = 'productDesigner/products/GET_PRODUCTS_REJECTED',

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

  GET_PRODUCT_DETAILS = 'productDesigner/products/GET_PRODUCT_DETAILS',
  GET_PRODUCT_DETAILS_FULFILLED = 'productDesigner/products/GET_PRODUCT_DETAILS_FULFILLED',
  GET_PRODUCT_DETAILS_REJECTED = 'productDesigner/products/GET_PRODUCT_DETAILS_REJECTED',

  GET_PRODUCT_RULES = 'productDesigner/products/GET_PRODUCT_RULES',
  GET_PRODUCT_RULES_FULFILLED = 'productDesigner/products/GET_PRODUCT_RULES_FULFILLED',
  GET_PRODUCT_RULES_REJECTED = 'productDesigner/products/GET_PRODUCT_RULES_REJECTED',

  GET_PRODUCT_ID = 'productDesigner/products/GET_PRODUCT_ID',

  SET_RULES_CODE = 'productDesigner/products/SET_RULES_CODE',

  GET_RULE_BY_EVENT = 'productDesigner/products/GET_RULE_BY_EVENT',
  GET_RULE_BY_ACTION_TYPE = 'productDesigner/products/GET_RULE_BY_ACTION_TYPE',

  GET_PRODUCT = 'productDesigner/products/GET_PRODUCT',
  GET_PRODUCT_FULFILLED = 'productDesigner/products/GET_PRODUCT_FULFILLED',
  GET_PRODUCT_REJECTED = 'productDesigner/products/GET_PRODUCT_REJECTED',

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
}

// Get all products
export interface GetProductsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCTS;
}

export interface GetProductsFulfilledAction {
  readonly payload: ProductsDataResp;
  readonly type: ActionTypeKeys.GET_PRODUCTS_FULFILLED;
}

export interface GetProductsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCTS_REJECTED;
}

// Get products by institution ID
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
// Get interfaces by institution ID
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

// Get endpoints by institution ID
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

// Delete product by id
export interface DeleteProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT;
}

export interface DeleteProductFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FULFILLED;
  readonly meta: number;
}

export interface DeleteProductRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REJECTED;
}

// Filter products
export interface FilterProductsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS;
}

export interface FilterProductsFulfilledAction {
  readonly payload: ProductsDataResp;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS_FULFILLED;
  meta: ProductFilterParams;
}

export interface FilterProductsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS_REJECTED;
}

// Get product ID
export interface GetProductIdAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.GET_PRODUCT_ID;
}

// Set rules Code
export interface SetRulesCodeAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.SET_RULES_CODE;
}

export interface GetRuleByEventAction {
  readonly payload: string | number;
  readonly type: ActionTypeKeys.GET_RULE_BY_EVENT;
}

export interface GetRuleByActionTypeAction {
  readonly payload: string | number;
  readonly type: ActionTypeKeys.GET_RULE_BY_ACTION_TYPE;
}

// Get product by id
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

// Get product details by id
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

// Get product rules by id
export interface GetProductRulesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULES;
}

export interface GetProductRulesFulfilledAction {
  readonly payload: ProductRulesResp;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULES_FULFILLED;
}

export interface GetProductRulesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULES_REJECTED;
}

// Edit product
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

// Edit product details
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

// Edit product rules
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

// Add new product
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

// Update card service
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

export type ProductsActionTypes =
  | GetProductsFulfilledAction
  | GetInstitutionProductsFulfilledAction
  | DeleteProductFulfilledAction
  | FilterProductsFulfilledAction
  | GetProductFulfilledAction
  | GetProductDetailsFulfilledAction
  | GetProductRulesFulfilledAction
  | GetEndpointsProductServiceFulfilledAction
  | GetInterfacesProductServiceFulfilledAction
  | AddProductFulfilledAction
  | UpdateProductFulfilledAction
  | UpdateProductDetailsFulfilledAction
  | UpdateProductRulesFulfilledAction
  | GetProductIdAction
  | SetRulesCodeAction
  | GetRuleByEventAction
  | GetRuleByActionTypeAction;
