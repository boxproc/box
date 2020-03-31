import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  UPDATE_GENERAL_LEDGER = 'products/UPDATE_GENERAL_LEDGER',
  UPDATE_GENERAL_LEDGER_FULFILLED = 'products/UPDATE_GENERAL_LEDGER_FULFILLED',
  UPDATE_GENERAL_LEDGER_REJECTED = 'products/UPDATE_GENERAL_LEDGER_REJECTED',
}

export interface UpdateProductGLAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER;
}

export interface UpdateProductGLFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER_FULFILLED;
}

export interface UpdateProductGLRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER_REJECTED;
}

export type TProductGLAction =
  | UpdateProductGLFulfilledAction;
