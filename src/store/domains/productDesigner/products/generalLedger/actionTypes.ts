import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  UPDATE_GENERAL_LEDGER = 'products/UPDATE_GENERAL_LEDGER',
  UPDATE_GENERAL_LEDGER_FULFILLED = 'products/UPDATE_GENERAL_LEDGER_FULFILLED',
  UPDATE_GENERAL_LEDGER_REJECTED = 'products/UPDATE_GENERAL_LEDGER_REJECTED',
}

export interface IUpdateProductGLAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER;
}

export interface IUpdateProductGLFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER_FULFILLED;
}

export interface IUpdateProductGLRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER_REJECTED;
}
