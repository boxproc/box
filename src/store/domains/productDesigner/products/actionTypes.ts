import {
  ProductDataResp,
  ProductFilterParams,
  ProductsDataResp,
} from './types';

import { ApiResponse, SuccessResponseStatusType, } from 'types';

export enum ActionTypeKeys {
  GET_PRODUCTS = 'productDesigner/products/GET_PRODUCTS',
  GET_PRODUCTS_FULFILLED = 'productDesigner/products/GET_PRODUCTS_FULFILLED',
  GET_PRODUCTS_REJECTED = 'productDesigner/products/GET_PRODUCTS_REJECTED',

  DELETE_PRODUCT = 'productDesigner/products/DELETE_PRODUCT',
  DELETE_PRODUCT_FULFILLED = 'productDesigner/products/DELETE_PRODUCT_FULFILLED',
  DELETE_PRODUCT_REJECTED = 'productDesigner/products/DELETE_PRODUCT_REJECTED',

  FILTER_PRODUCTS = 'productDesigner/products/FILTER_PRODUCTS',
  FILTER_PRODUCTS_FULFILLED = 'productDesigner/products/FILTER_PRODUCTS_FULFILLED',
  FILTER_PRODUCTS_REJECTED = 'productDesigner/products/FILTER_PRODUCTS_REJECTED',

  GET_PRODUCT = 'productDesigner/products/GET_PRODUCT',
  GET_PRODUCT_FULFILLED = 'productDesigner/products/GET_PRODUCT_FULFILLED',
  GET_PRODUCT_REJECTED = 'productDesigner/products/GET_PRODUCT_REJECTED',

  UPDATE_PRODUCT= 'productDesigner/products/UPDATE_PRODUCT',
  UPDATE_PRODUCT_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_FULFILLED',
  UPDATE_PRODUCT_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_REJECTED',

  ADD_PRODUCT = 'productDesigner/products/ADD_PRODUCT',
  ADD_PRODUCT_FULFILLED = 'productDesigner/products/ADD_PRODUCT_FULFILLED',
  ADD_PRODUCT_REJECTED = 'productDesigner/products/ADD_PRODUCT_REJECTED',
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

// Delete product by id
export interface DeleteProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT;
}

export interface DeleteProductFulfilledAction {
  readonly payload: SuccessResponseStatusType;
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

// Edit product
export interface UpdateProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT;
}

export interface UpdateProductFulfilledAction {
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FULFILLED;
}

export interface UpdateProductRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REJECTED;
}

// Add new product
export interface AddProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT;
}

export interface AddProductFulfilledAction {
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FULFILLED;
}

export interface AddProductRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REJECTED;
}

export type ProductsActionTypes =
  | GetProductsFulfilledAction
  | DeleteProductFulfilledAction
  | FilterProductsFulfilledAction
  | GetProductFulfilledAction
  | AddProductFulfilledAction
  | UpdateProductFulfilledAction;
