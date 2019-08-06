import { LedgerCustomerItems } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_LEDGER_CUSTOMERS = 'ledger/customers/GET_LEDGER_CUSTOMERS',
  GET_LEDGER_CUSTOMERS_FULFILLED = 'ledger/customers/GET_LEDGER_CUSTOMERS_FULFILLED',
  GET_LEDGER_CUSTOMERS_REJECTED = 'ledger/customers/GET_LEDGER_CUSTOMERS_REJECTED',

  GET_LEDGER_CUSTOMER_ID = 'ledger/customers/GET_LEDGER_CUSTOMER_ID',

  DELETE_LEDGER_CUSTOMER = 'ledger/customers/DELETE_LEDGER_CUSTOMER',
  DELETE_LEDGER_CUSTOMER_FULFILLED = 'ledger/customers/DELETE_LEDGER_CUSTOMER_FULFILLED',
  DELETE_LEDGER_CUSTOMER_REJECTED = 'ledger/customers/DELETE_LEDGER_CUSTOMER_REJECTED',

  ADD_LEDGER_CUSTOMER = 'ledger/customers/ADD_LEDGER_CUSTOMER',
  ADD_LEDGER_CUSTOMER_FULFILLED = 'ledger/customers/ADD_LEDGER_CUSTOMER_FULFILLED',
  ADD_LEDGER_CUSTOMER_REJECTED = 'ledger/customers/ADD_LEDGER_CUSTOMER_REJECTED',

  UPDATE_LEDGER_CUSTOMER = 'ledger/customers/UPDATE_LEDGER_CUSTOMERS',
  UPDATE_LEDGER_CUSTOMER_FULFILLED = 'ledger/customers/UPDATE_LEDGER_CUSTOMERS_FULFILLED',
  UPDATE_LEDGER_CUSTOMER_REJECTED = 'ledger/customers/UPDATE_LEDGER_CUSTOMERS_REJECTED',

  FILTER_LEDGER_CUSTOMERS = 'ledger/customers/FILTER_LEDGER_CUSTOMERS',
  FILTER_LEDGER_CUSTOMERS_FULFILLED =
  'ledger/customers/FILTER_LEDGER_CUSTOMERS_FULFILLED',
  FILTER_LEDGER_CUSTOMERS_REJECTED =
  'ledger/customers/FILTER_LEDGER_CUSTOMERS_REJECTED',
}

// Get all customers
export interface GetLedgerCustomersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_CUSTOMERS;
}

export interface GetLedgerCustomersFulfilledAction {
  readonly payload: LedgerCustomerItems;
  readonly type: ActionTypeKeys.GET_LEDGER_CUSTOMERS_FULFILLED;
}

export interface GetLedgerCustomersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_CUSTOMERS_REJECTED;
}

// Get customer by id
export interface GetLedgerCustomerIdAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.GET_LEDGER_CUSTOMER_ID;
}

// Delete customer by id
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

// Add new customer
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

// Edit customer
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

// Filter customers
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
  | GetLedgerCustomersFulfilledAction
  | AddLedgerCustomerFulfilledAction
  | DeleteLedgerCustomerFulfilledAction
  | UpdateLedgerCustomerFulfilledAction
  | FilterLedgerCustomersFulfilledAction
  | GetLedgerCustomerIdAction;
