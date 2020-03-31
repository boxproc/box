import { RepaymentHierarchyItems } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_REPAYMENT_HIERARCHY = 'products/GET_REPAYMENT_HIERARCHY',
  GET_REPAYMENT_HIERARCHY_FULFILLED = 'products/GET_REPAYMENT_HIERARCHY_FULFILLED',
  GET_REPAYMENT_HIERARCHY_REJECTED = 'products/GET_REPAYMENT_HIERARCHY_REJECTED',

  UPDATE_REPAYMENT_HIERARCHY = 'products/UPDATE_REPAYMENT_HIERARCHY',
  UPDATE_REPAYMENT_HIERARCHY_FULFILLED = 'products/UPDATE_REPAYMENT_HIERARCHY_FULFILLED',
  UPDATE_REPAYMENT_HIERARCHY_REJECTED = 'products/UPDATE_REPAYMENT_HIERARCHY_REJECTED',
}

export interface GetRepaymentHierarchyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_REPAYMENT_HIERARCHY;
}

export interface GetRepaymentHierarchyFulfilledAction {
  readonly payload: RepaymentHierarchyItems;
  readonly type: ActionTypeKeys.GET_REPAYMENT_HIERARCHY_FULFILLED;
}

export interface GetRepaymentHierarchyRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_REPAYMENT_HIERARCHY_REJECTED;
}

export interface UpdateRepaymentHierarchyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY;
}

export interface UpdateRepaymentHierarchyFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY_FULFILLED;
}

export interface UpdateRepaymentHierarchyRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY_REJECTED;
}

export type TRepaymentHierarchyAction =
  | GetRepaymentHierarchyFulfilledAction
  | UpdateRepaymentHierarchyFulfilledAction;
