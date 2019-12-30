import { LedgerCustomerItems, RepaymentDebitCardsItems, RepaymentDirectDebitsItems } from './types';

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

  FILTER_LEDGER_CUSTOMERS_BY_ID = 'ledger/customers/FILTER_LEDGER_CUSTOMERS_BY_ID',
  FILTER_LEDGER_CUSTOMERS_BY_ID_FULFILLED =
  'ledger/customers/FILTER_LEDGER_CUSTOMERS_BY_ID_FULFILLED',
  FILTER_LEDGER_CUSTOMERS_BY_ID_REJECTED =
  'ledger/customers/FILTER_LEDGER_CUSTOMERS_BY_ID_REJECTED',

  GET_REPAYMENT_DEBIT_CARDS = 'productDesigner/customers/GET_REPAYMENT_DEBIT_CARDS',
  GET_REPAYMENT_DEBIT_CARDS_FULFILLED =
  'productDesigner/customers/GET_REPAYMENT_DEBIT_CARDS_FULFILLED',
  GET_REPAYMENT_DEBIT_CARDS_REJECTED =
  'productDesigner/customers/GET_REPAYMENT_DEBIT_CARDS_REJECTED',

  ADD_REPAYMENT_DEBIT_CARD = 'productDesigner/customers/ADD_REPAYMENT_DEBIT_CARD',
  ADD_REPAYMENT_DEBIT_CARD_FULFILLED =
  'productDesigner/customers/ADD_REPAYMENT_DEBIT_CARD_FULFILLED',
  ADD_REPAYMENT_DEBIT_CARD_REJECTED = 'productDesigner/customers/ADD_REPAYMENT_DEBIT_CARD_REJECTED',

  GET_REPAYMENT_DIRECT_DEBITS = 'productDesigner/customers/GET_REPAYMENT_DIRECT_DEBITS',
  GET_REPAYMENT_DIRECT_DEBITS_FULFILLED =
  'productDesigner/customers/GET_REPAYMENT_DIRECT_DEBITS_FULFILLED',
  GET_REPAYMENT_DIRECT_DEBITS_REJECTED =
  'productDesigner/customers/GET_REPAYMENT_DIRECT_DEBITS_REJECTED',

  ADD_REPAYMENT_DIRECT_DEBIT = 'productDesigner/customers/ADD_REPAYMENT_DIRECT_DEBIT',
  ADD_REPAYMENT_DIRECT_DEBIT_FULFILLED =
  'productDesigner/customers/ADD_REPAYMENT_DIRECT_DEBIT_FULFILLED',
  ADD_REPAYMENT_DIRECT_DEBIT_REJECTED =
  'productDesigner/customers/ADD_REPAYMENT_DIRECT_DEBIT_REJECTED',

  RESET_CUSTOMERS = 'ledger/customers/RESET_CUSTOMERS',
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

export interface FilterLedgerCustomersByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS_BY_ID;
}

export interface FilterLedgerCustomersByIdFulfilledAction {
  readonly payload: LedgerCustomerItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS_BY_ID_FULFILLED;
}

export interface FilterLedgerCustomersByIdRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CUSTOMERS_BY_ID_REJECTED;
}

export interface GetRepaymentDebitCardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS;
}

export interface GetRepaymentDebitCardsFulfilledAction {
  readonly payload: RepaymentDebitCardsItems;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS_FULFILLED;
}

export interface GetRepaymentDebitCardsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS_REJECTED;
}

export interface AddRepaymentDebitCardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD;
}

export interface AddRepaymentDebitCardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD_FULFILLED;
}

export interface AddRepaymentDebitCardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD_REJECTED;
}

export interface GetRepaymentDirectDebitsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS;
}

export interface GetRepaymentDirectDebitsFulfilledAction {
  readonly payload: RepaymentDirectDebitsItems;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS_FULFILLED;
}

export interface GetRepaymentDirectDebitsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS_REJECTED;
}

export interface AddRepaymentDirectDebitAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT;
}

export interface AddRepaymentDirectDebitFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT_FULFILLED;
}

export interface AddRepaymentDirectDebitRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT_REJECTED;
}

export interface ResetCustomersAction {
  readonly type: ActionTypeKeys.RESET_CUSTOMERS;
}

export type LedgerCustomersActionTypes =
  | AddLedgerCustomerFulfilledAction
  | DeleteLedgerCustomerFulfilledAction
  | UpdateLedgerCustomerFulfilledAction
  | FilterLedgerCustomersFulfilledAction
  | FilterLedgerCustomersByIdFulfilledAction
  | GetRepaymentDebitCardsFulfilledAction
  | AddRepaymentDebitCardFulfilledAction
  | GetRepaymentDirectDebitsFulfilledAction
  | AddRepaymentDirectDebitFulfilledAction
  | ResetCustomersAction;
