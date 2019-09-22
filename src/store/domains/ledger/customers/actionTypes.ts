import { LedgerCustomerItems } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  DELETE_LEDGER_CUSTOMER = 'ledger/customers/DELETE_LEDGER_CUSTOMER',
  DELETE_LEDGER_CUSTOMER_FULFILLED = 'ledger/customers/DELETE_LEDGER_CUSTOMER_FULFILLED',
  DELETE_LEDGER_CUSTOMER_REJECTED = 'ledger/customers/DELETE_LEDGER_CUSTOMER_REJECTED',

  ADD_LEDGER_CUSTOMER = 'ledger/customers/ADD_LEDGER_CUSTOMER',
  ADD_LEDGER_CUSTOMER_FULFILLED = 'ledger/customers/ADD_LEDGER_CUSTOMER_FULFILLED',
  ADD_LEDGER_CUSTOMER_REJECTED = 'ledger/customers/ADD_LEDGER_CUSTOMER_REJECTED',

  UPDATE_LEDGER_CUSTOMER = 'ledger/customers/UPDATE_LEDGER_CUSTOMER',
  UPDATE_LEDGER_CUSTOMER_FULFILLED = 'ledger/customers/UPDATE_LEDGER_CUSTOMER_FULFILLED',
  UPDATE_LEDGER_CUSTOMER_REJECTED = 'ledger/customers/UPDATE_LEDGER_CUSTOMER_REJECTED',

  FILTER_LEDGER_CUSTOMERS = 'ledger/customers/FILTER_LEDGER_CUSTOMERS',
  FILTER_LEDGER_CUSTOMERS_FULFILLED = 'ledger/customers/FILTER_LEDGER_CUSTOMERS_FULFILLED',
  FILTER_LEDGER_CUSTOMERS_REJECTED = 'ledger/customers/FILTER_LEDGER_CUSTOMERS_REJECTED',
}

export interface DeleteLedgerCustomerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_LEDGER_CUSTOMER;
}

export interface DeleteLedgerCustomerFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_LEDGER_CUSTOMER_FULFILLED;
  readonly meta: {
    id: number;
  };
}

export interface DeleteLedgerCustomerRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_LEDGER_CUSTOMER_REJECTED;
}

export interface AddLedgerCustomerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_LEDGER_CUSTOMER;
}

export interface AddLedgerCustomerFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_LEDGER_CUSTOMER_FULFILLED;
}

export interface AddLedgerCustomerRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_LEDGER_CUSTOMER_REJECTED;
}

export interface UpdateLedgerCustomerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_CUSTOMER;
}

export interface UpdateLedgerCustomerFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_CUSTOMER_FULFILLED;
}

export interface UpdateLedgerCustomerRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_CUSTOMER_REJECTED;
}

export interface FilterLedgerCustomersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS;
}

export interface FilterLedgerCustomersFulfilledAction {
  readonly payload: LedgerCustomerItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS_FULFILLED;
}

export interface FilterLedgerCustomersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS_REJECTED;
}

export type LedgerCustomersActionTypes =
  | AddLedgerCustomerFulfilledAction
  | DeleteLedgerCustomerFulfilledAction
  | UpdateLedgerCustomerFulfilledAction
  | FilterLedgerCustomersFulfilledAction;
