import {
  ProductOptionsResp,
  ProductsDataResp,
} from './types';

import { ApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_PRODUCTS = 'productDesigner/products/GET_PRODUCTS',
  GET_PRODUCTS_FULFILLED = 'productDesigner/products/GET_PRODUCTS_FULFILLED',
  GET_PRODUCTS_REJECTED = 'productDesigner/products/GET_PRODUCTS_REJECTED',

  GET_PRODUCTS_OPTIONS = 'productDesigner/products/GET_PRODUCTS_OPTIONS',
  GET_PRODUCTS_OPTIONS_FULFILLED = 'productDesigner/products/GET_PRODUCTS_OPTIONS_FULFILLED',
  GET_PRODUCTS_OPTIONS_REJECTED = 'productDesigner/products/GET_PRODUCTS_OPTIONS_REJECTED',
}

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

export interface GetProductsOptionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCTS_OPTIONS;
}

export interface GetProductsOptionsFulfilledAction {
  readonly payload: ProductOptionsResp;
  readonly type: ActionTypeKeys.GET_PRODUCTS_OPTIONS_FULFILLED;
}

export interface GetProductsOptionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCTS_OPTIONS_REJECTED;
}

export type ProductsActionTypes =
  | GetProductsFulfilledAction
  | GetProductsOptionsFulfilledAction;
