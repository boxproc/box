import {
  IInstProductsData,
  IProductDataResp,
  IProductDetailsDataResp,
  IProductsDataResp,
} from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_INST_PRODUCTS = 'products/GET_INST_PRODUCTS',
  GET_INST_PRODUCTS_FULFILLED = 'products/GET_INST_PRODUCTS_FULFILLED',
  GET_INST_PRODUCTS_REJECTED = 'products/GET_INST_PRODUCTS_REJECTED',

  DELETE_PRODUCT = 'products/DELETE_PRODUCT',
  DELETE_PRODUCT_FULFILLED = 'products/DELETE_PRODUCT_FULFILLED',
  DELETE_PRODUCT_REJECTED = 'products/DELETE_PRODUCT_REJECTED',

  FILTER_PRODUCTS = 'products/FILTER_PRODUCTS',
  FILTER_PRODUCTS_FULFILLED = 'products/FILTER_PRODUCTS_FULFILLED',
  FILTER_PRODUCTS_REJECTED = 'products/FILTER_PRODUCTS_REJECTED',

  GET_PRODUCT = 'products/GET_PRODUCT',
  GET_PRODUCT_FULFILLED = 'products/GET_PRODUCT_FULFILLED',
  GET_PRODUCT_REJECTED = 'products/GET_PRODUCT_REJECTED',

  GET_PRODUCT_DETAILS = 'products/GET_PRODUCT_DETAILS',
  GET_PRODUCT_DETAILS_FULFILLED = 'products/GET_PRODUCT_DETAILS_FULFILLED',
  GET_PRODUCT_DETAILS_REJECTED = 'products/GET_PRODUCT_DETAILS_REJECTED',

  UPDATE_PRODUCT = 'products/UPDATE_PRODUCT',
  UPDATE_PRODUCT_FULFILLED = 'products/UPDATE_PRODUCT_FULFILLED',
  UPDATE_PRODUCT_REJECTED = 'products/UPDATE_PRODUCT_REJECTED',

  UPDATE_PRODUCT_DETAILS = 'products/UPDATE_PRODUCT_DETAILS',
  UPDATE_PRODUCT_DETAILS_FULFILLED = 'products/UPDATE_PRODUCT_DETAILS_FULFILLED',
  UPDATE_PRODUCT_DETAILS_REJECTED = 'products/UPDATE_PRODUCT_DETAILS_REJECTED',

  ADD_PRODUCT = 'products/ADD_PRODUCT',
  ADD_PRODUCT_FULFILLED = 'products/ADD_PRODUCT_FULFILLED',
  ADD_PRODUCT_REJECTED = 'products/ADD_PRODUCT_REJECTED',

  RESET_PRODUCTS = 'products/RESET_PRODUCTS',
}

export interface IGetInstProductsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_INST_PRODUCTS;
}

export interface IGetInstProductsFulfilledAction {
  readonly payload: IInstProductsData;
  readonly type: ActionTypeKeys.GET_INST_PRODUCTS_FULFILLED;
}

export interface IGetInstProductsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_INST_PRODUCTS_REJECTED;
}

export interface IDeleteProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_PRODUCT;
}

export interface IDeleteProductFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_FULFILLED;
  readonly meta: { id: number };
}

export interface IDeleteProductRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_PRODUCT_REJECTED;
}

export interface IFilterProductsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS;
}

export interface IFilterProductsFulfilledAction {
  readonly payload: IProductsDataResp;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS_FULFILLED;
}

export interface IFilterProductsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_PRODUCTS_REJECTED;
}

export interface IGetProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT;
}

export interface IGetProductFulfilledAction {
  readonly payload: IProductDataResp;
  readonly type: ActionTypeKeys.GET_PRODUCT_FULFILLED;
}

export interface IGetProductRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_REJECTED;
}

export interface IGetProductDetailsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_DETAILS;
}

export interface IGetProductDetailsFulfilledAction {
  readonly payload: IProductDetailsDataResp;
  readonly type: ActionTypeKeys.GET_PRODUCT_DETAILS_FULFILLED;
}

export interface IGetProductDetailsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_DETAILS_REJECTED;
}

export interface IUpdateProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT;
}

export interface IUpdateProductFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_FULFILLED;
}

export interface IUpdateProductRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REJECTED;
}

export interface IUpdateProductDetailsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS;
}

export interface IUpdateProductDetailsFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS_FULFILLED;
  readonly meta: object;
}

export interface IUpdateProductDetailsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_DETAILS_REJECTED;
}

export interface IAddProductAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT;
}

export interface IAddProductFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_PRODUCT_FULFILLED;
}

export interface IAddProductRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_REJECTED;
}

export interface IResetProductsAction {
  readonly type: ActionTypeKeys.RESET_PRODUCTS;
}

export type TProductsAction =
  | IGetInstProductsFulfilledAction
  | IDeleteProductFulfilledAction
  | IFilterProductsFulfilledAction
  | IGetProductFulfilledAction
  | IGetProductDetailsFulfilledAction
  | IAddProductFulfilledAction
  | IUpdateProductFulfilledAction
  | IUpdateProductDetailsFulfilledAction
  | IResetProductsAction;
