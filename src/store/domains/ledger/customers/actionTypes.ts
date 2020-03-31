import { ICustomersData, IRepaymentDebitCardsData, IRepaymentDirectDebitsData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  DELETE_CUSTOMER = 'customers/DELETE_CUSTOMER',
  DELETE_CUSTOMER_FULFILLED = 'customers/DELETE_CUSTOMER_FULFILLED',
  DELETE_CUSTOMER_REJECTED = 'customers/DELETE_CUSTOMER_REJECTED',

  ADD_CUSTOMER = 'customers/ADD_CUSTOMER',
  ADD_CUSTOMER_FULFILLED = 'customers/ADD_CUSTOMER_FULFILLED',
  ADD_CUSTOMER_REJECTED = 'customers/ADD_CUSTOMER_REJECTED',

  UPDATE_CUSTOMER = 'customers/UPDATE_CUSTOMER',
  UPDATE_CUSTOMER_FULFILLED = 'customers/UPDATE_CUSTOMER_FULFILLED',
  UPDATE_CUSTOMER_REJECTED = 'customers/UPDATE_CUSTOMER_REJECTED',

  FILTER_CUSTOMERS = 'customers/FILTER_CUSTOMERS',
  FILTER_CUSTOMERS_FULFILLED = 'customers/FILTER_CUSTOMERS_FULFILLED',
  FILTER_CUSTOMERS_REJECTED = 'customers/FILTER_CUSTOMERS_REJECTED',

  FILTER_CUSTOMERS_BY_ID = 'customers/FILTER_CUSTOMERS_BY_ID',
  FILTER_CUSTOMERS_BY_ID_FULFILLED = 'customers/FILTER_CUSTOMERS_BY_ID_FULFILLED',
  FILTER_CUSTOMERS_BY_ID_REJECTED = 'customers/FILTER_CUSTOMERS_BY_ID_REJECTED',

  GET_REPAYMENT_DEBIT_CARDS = 'customers/GET_REPAYMENT_DEBIT_CARDS',
  GET_REPAYMENT_DEBIT_CARDS_FULFILLED = 'customers/GET_REPAYMENT_DEBIT_CARDS_FULFILLED',
  GET_REPAYMENT_DEBIT_CARDS_REJECTED = 'customers/GET_REPAYMENT_DEBIT_CARDS_REJECTED',

  ADD_REPAYMENT_DEBIT_CARD = 'customers/ADD_REPAYMENT_DEBIT_CARD',
  ADD_REPAYMENT_DEBIT_CARD_FULFILLED = 'customers/ADD_REPAYMENT_DEBIT_CARD_FULFILLED',
  ADD_REPAYMENT_DEBIT_CARD_REJECTED = 'customers/ADD_REPAYMENT_DEBIT_CARD_REJECTED',

  GET_REPAYMENT_DIRECT_DEBITS = 'customers/GET_REPAYMENT_DIRECT_DEBITS',
  GET_REPAYMENT_DIRECT_DEBITS_FULFILLED = 'customers/GET_REPAYMENT_DIRECT_DEBITS_FULFILLED',
  GET_REPAYMENT_DIRECT_DEBITS_REJECTED = 'customers/GET_REPAYMENT_DIRECT_DEBITS_REJECTED',

  ADD_REPAYMENT_DIRECT_DEBIT = 'customers/ADD_REPAYMENT_DIRECT_DEBIT',
  ADD_REPAYMENT_DIRECT_DEBIT_FULFILLED = 'customers/ADD_REPAYMENT_DIRECT_DEBIT_FULFILLED',
  ADD_REPAYMENT_DIRECT_DEBIT_REJECTED = 'customers/ADD_REPAYMENT_DIRECT_DEBIT_REJECTED',

  RESET_CUSTOMERS = 'customers/RESET_CUSTOMERS',
}

/** Delete customer action interface */

export interface IDeleteCustomerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_CUSTOMER;
}

export interface IDeleteCustomerFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_CUSTOMER_FULFILLED;
  readonly meta: {
    id: number;
  };
}

export interface IDeleteCustomerRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_CUSTOMER_REJECTED;
}

/** Add customer action interface */

export interface IAddCustomerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_CUSTOMER;
}

export interface IAddCustomerFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_CUSTOMER_FULFILLED;
}

export interface IAddCustomerRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_CUSTOMER_REJECTED;
}

/** Update customer action interface */

export interface IUpdateCustomerAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_CUSTOMER;
}

export interface IUpdateCustomerFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_CUSTOMER_FULFILLED;
}

export interface IUpdateCustomerRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_CUSTOMER_REJECTED;
}

/** Filter customers action interface */

export interface IFilterCustomersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_CUSTOMERS;
}

export interface IFilterCustomersFulfilledAction {
  readonly payload: ICustomersData;
  readonly type: ActionTypeKeys.FILTER_CUSTOMERS_FULFILLED;
}

export interface IFilterCustomersRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_CUSTOMERS_REJECTED;
}

/** Filter customers by ID action interface */

export interface IFilterCustomersByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_CUSTOMERS_BY_ID;
}

export interface IFilterCustomersByIdFulfilledAction {
  readonly payload: ICustomersData;
  readonly type: ActionTypeKeys.FILTER_CUSTOMERS_BY_ID_FULFILLED;
}

export interface IFilterCustomersByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_CUSTOMERS_BY_ID_REJECTED;
}

/** Get repayment debit cards action interface */

export interface IGetRepaymentDebitCardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS;
}

export interface IGetRepaymentDebitCardsFulfilledAction {
  readonly payload: IRepaymentDebitCardsData;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS_FULFILLED;
}

export interface IGetRepaymentDebitCardsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS_REJECTED;
}

/** Add repayment debit card action interface */

export interface IAddRepaymentDebitCardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD;
}

export interface IAddRepaymentDebitCardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD_FULFILLED;
}

export interface IAddRepaymentDebitCardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD_REJECTED;
}

/** Get repayment direct debits action interface */

export interface IGetRepaymentDirectDebitsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS;
}

export interface IGetRepaymentDirectDebitsFulfilledAction {
  readonly payload: IRepaymentDirectDebitsData;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS_FULFILLED;
}

export interface IGetRepaymentDirectDebitsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS_REJECTED;
}

/** Add repayment direct debit action interface */

export interface IAddRepaymentDirectDebitAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT;
}

export interface IAddRepaymentDirectDebitFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT_FULFILLED;
}

export interface IAddRepaymentDirectDebitRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT_REJECTED;
}

/** Reset customers action interface */

export interface IResetCustomersAction {
  readonly type: ActionTypeKeys.RESET_CUSTOMERS;
}

export type TCustomersAction =
  | IAddCustomerFulfilledAction
  | IDeleteCustomerFulfilledAction
  | IUpdateCustomerFulfilledAction
  | IFilterCustomersFulfilledAction
  | IFilterCustomersByIdFulfilledAction
  | IGetRepaymentDebitCardsFulfilledAction
  | IAddRepaymentDebitCardFulfilledAction
  | IGetRepaymentDirectDebitsFulfilledAction
  | IAddRepaymentDirectDebitFulfilledAction
  | IResetCustomersAction;
