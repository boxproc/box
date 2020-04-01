import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  UPDATE_PRODUCT_AUX_COUNTERS = 'products/UPDATE_PRODUCT_AUX_COUNTERS',
  UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED = 'products/UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED',
  UPDATE_PRODUCT_AUX_COUNTERS_REJECTED = 'products/UPDATE_PRODUCT_AUX_COUNTERS_REJECTED',
}

export interface IUpdateProductAuxCountersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS;
}

export interface IUpdateProductAuxCountersFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS_FULFILLED;
}

export interface IUpdateProductAuxCountersRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS_REJECTED;
}
