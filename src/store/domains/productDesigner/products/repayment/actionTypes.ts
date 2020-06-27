import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  UPDATE_PRODUCT_REPAYMENT = 'products/UPDATE_PRODUCT_REPAYMENT',
  UPDATE_PRODUCT_REPAYMENT_FULFILLED = 'products/UPDATE_PRODUCT_REPAYMENT_FULFILLED',
  UPDATE_PRODUCT_REPAYMENT_REJECTED = 'products/UPDATE_PRODUCT_REPAYMENT_REJECTED',
}

export interface IUpdateProductRepaymentAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REPAYMENT;
}

export interface IUpdateProductRepaymentFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REPAYMENT_FULFILLED;
}

export interface IUpdateProductRepaymentRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_REPAYMENT_REJECTED;
}
