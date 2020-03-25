import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  UPDATE_GENERAL_LEDGER = 'productDesigner/products/UPDATE_GENERAL_LEDGER',
  UPDATE_GENERAL_LEDGER_FULFILLED = 'productDesigner/products/UPDATE_GENERAL_LEDGER_FULFILLED',
  UPDATE_GENERAL_LEDGER_REJECTED = 'productDesigner/products/UPDATE_GENERAL_LEDGER_REJECTED',
}

export interface UpdateGeneralLedgerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER;
}

export interface UpdateGeneralLedgerFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER_FULFILLED;
}

export interface UpdateGeneralLedgerRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_GENERAL_LEDGER_REJECTED;
}

export type ProductGeneralLedgerActionTypes =
  | UpdateGeneralLedgerFulfilledAction;
