import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  UPDATE_PRODUCT_AUX_COUNTERS = 'productDesigner/products/UPDATE_PRODUCT_AUX_COUNTERS',
  UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED =
  'productDesigner/products/UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED',
  UPDATE_PRODUCT_AUX_COUNTERS_REJECTED =
  'productDesigner/products/UPDATE_PRODUCT_AUX_COUNTERS_REJECTED',
}

export interface UpdateProductAuxCountersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS;
}

export interface UpdateProductAuxCountersFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED;
}

export interface UpdateProductAuxCountersRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS_REJECTED;
}

export type ProductAuxCountersActionTypes =
  | UpdateProductAuxCountersFulfilledAction;
