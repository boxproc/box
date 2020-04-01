import { IRepaymentHierarchyItemsData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_REPAYMENT_HIERARCHY = 'products/GET_REPAYMENT_HIERARCHY',
  GET_REPAYMENT_HIERARCHY_FULFILLED = 'products/GET_REPAYMENT_HIERARCHY_FULFILLED',
  GET_REPAYMENT_HIERARCHY_REJECTED = 'products/GET_REPAYMENT_HIERARCHY_REJECTED',

  UPDATE_REPAYMENT_HIERARCHY = 'products/UPDATE_REPAYMENT_HIERARCHY',
  UPDATE_REPAYMENT_HIERARCHY_FULFILLED = 'products/UPDATE_REPAYMENT_HIERARCHY_FULFILLED',
  UPDATE_REPAYMENT_HIERARCHY_REJECTED = 'products/UPDATE_REPAYMENT_HIERARCHY_REJECTED',
}

export interface IGetRepaymentHierarchyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_REPAYMENT_HIERARCHY;
}

export interface IGetRepaymentHierarchyFulfilledAction {
  readonly payload: IRepaymentHierarchyItemsData;
  readonly type: ActionTypeKeys.GET_REPAYMENT_HIERARCHY_FULFILLED;
}

export interface IGetRepaymentHierarchyRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_REPAYMENT_HIERARCHY_REJECTED;
}

export interface IUpdateRepaymentHierarchyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY;
}

export interface IUpdateRepaymentHierarchyFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY_FULFILLED;
}

export interface IUpdateRepaymentHierarchyRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY_REJECTED;
}

export type TRepaymentHierarchyAction =
  | IGetRepaymentHierarchyFulfilledAction
  | IUpdateRepaymentHierarchyFulfilledAction;
