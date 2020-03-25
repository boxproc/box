import {
  InstitutionProducts,
  ProductDataResp,
  ProductDetailsResp,
  ProductsDataResp,
} from './types';

import { IResponseStatus, TApiResponse } from 'types';

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

  GET_PRODUCT_DETAILS = 'productDesigner/products/GET_PRODUCT_DETAILS',
  GET_PRODUCT_DETAILS_FULFILLED = 'productDesigner/products/GET_PRODUCT_DETAILS_FULFILLED',
  GET_PRODUCT_DETAILS_REJECTED = 'productDesigner/products/GET_PRODUCT_DETAILS_REJECTED',

  UPDATE_PRODUCT = 'productDesigner/products/UPDATE_PRODUCT',
  UPDATE_PRODUCT_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_FULFILLED',
  UPDATE_PRODUCT_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_REJECTED',

  UPDATE_PRODUCT_DETAILS = 'productDesigner/products/UPDATE_PRODUCT_DETAILS',
  UPDATE_PRODUCT_DETAILS_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_DETAILS_FULFILLED',
  UPDATE_PRODUCT_DETAILS_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_DETAILS_REJECTED',

  ADD_PRODUCT = 'productDesigner/products/ADD_PRODUCT',
  ADD_PRODUCT_FULFILLED = 'productDesigner/products/ADD_PRODUCT_FULFILLED',
  ADD_PRODUCT_REJECTED = 'productDesigner/products/ADD_PRODUCT_REJECTED',

  RESET_PRODUCTS = 'productDesigner/products/RESET_PRODUCTS',
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
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_INSTITUTION_PRODUCTS_REJECTED;
}

export interface DeleteProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT;
}

export interface DeleteProductFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FULFILLED;
  readonly meta: { id: number };
}

export interface DeleteProductRejectedAction {
  readonly payload: TApiResponse;
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
  readonly payload: TApiResponse;
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
  readonly payload: TApiResponse;
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
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_DETAILS_REJECTED;
}

export interface UpdateProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT;
}

export interface UpdateProductFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FULFILLED;
}

export interface UpdateProductRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REJECTED;
}

export interface UpdateProductDetailsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS;
}

export interface UpdateProductDetailsFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS_FULFILLED;
  readonly meta: object;
}

export interface UpdateProductDetailsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS_REJECTED;
}

export interface AddProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT;
}

export interface AddProductFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FULFILLED;
}

export interface AddProductRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REJECTED;
}

export interface ResetProductsAction {
  readonly type: ActionTypeKeys.RESET_PRODUCTS;
}

export type ProductsActionTypes =
  | GetInstitutionProductsFulfilledAction
  | DeleteProductFulfilledAction
  | FilterProductsFulfilledAction
  | GetProductFulfilledAction
  | GetProductDetailsFulfilledAction
  | AddProductFulfilledAction
  | UpdateProductFulfilledAction
  | UpdateProductDetailsFulfilledAction
  | ResetProductsAction;
