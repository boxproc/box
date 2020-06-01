import {
  ICurrencyLimitItemData,
  ICustomersData,
  IDirectDebitAccountsData,
  IDirectDebitMandatesData,
  IRepaymentDebitCardsData,
} from './types';

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

  GET_DIRECT_DEBIT_ACCOUNTS = 'customers/GET_DIRECT_DEBIT_ACCOUNTS',
  GET_DIRECT_DEBIT_ACCOUNTS_FULFILLED = 'customers/GET_DIRECT_DEBIT_ACCOUNTS_FULFILLED',
  GET_DIRECT_DEBIT_ACCOUNTS_REJECTED = 'customers/GET_DIRECT_DEBIT_ACCOUNTS_REJECTED',

  ADD_DIRECT_DEBIT_ACCOUNT = 'customers/ADD_DIRECT_DEBIT_ACCOUNT',
  ADD_DIRECT_DEBIT_ACCOUNT_FULFILLED = 'customers/ADD_DIRECT_DEBIT_ACCOUNT_FULFILLED',
  ADD_DIRECT_DEBIT_ACCOUNT_REJECTED = 'customers/ADD_DIRECT_DEBIT_ACCOUNT_REJECTED',

  GET_DIRECT_DEBIT_MANDATES = 'customers/GET_DIRECT_DEBIT_MANDATES',
  GET_DIRECT_DEBIT_MANDATES_FULFILLED = 'customers/GET_DIRECT_DEBIT_MANDATES_FULFILLED',
  GET_DIRECT_DEBIT_MANDATES_REJECTED = 'customers/GET_DIRECT_DEBIT_MANDATES_REJECTED',

  ADD_DIRECT_DEBIT_MANDATE = 'customers/ADD_DIRECT_DEBIT_MANDATE',
  ADD_DIRECT_DEBIT_MANDATE_FULFILLED = 'customers/ADD_DIRECT_DEBIT_MANDATE_FULFILLED',
  ADD_DIRECT_DEBIT_MANDATE_REJECTED = 'customers/ADD_DIRECT_DEBIT_MANDATE_REJECTED',

  GET_CURRENCY_LIMIT = 'customers/GET_CURRENCY_LIMIT',
  GET_CURRENCY_LIMIT_FULFILLED = 'customers/GET_CURRENCY_LIMIT_FULFILLED',
  GET_CURRENCY_LIMIT_REJECTED = 'customers/GET_CURRENCY_LIMIT_REJECTED',

  UPDATE_CURRENCY_LIMIT = 'customers/UPDATE_CURRENCY_LIMIT',
  UPDATE_CURRENCY_LIMIT_FULFILLED = 'customers/UPDATE_CURRENCY_LIMIT_FULFILLED',
  UPDATE_CURRENCY_LIMIT_REJECTED = 'customers/UPDATE_CURRENCY_LIMIT_REJECTED',

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

/** Get direct debits accounts action interface */

export interface IGetDirectDebitAccountsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_ACCOUNTS;
}

export interface IGetDirectDebitAccountsFulfilledAction {
  readonly payload: IDirectDebitAccountsData;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_ACCOUNTS_FULFILLED;
}

export interface IGetDirectDebitAccountsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_ACCOUNTS_REJECTED;
}

/** Add direct debit accounts action interface */

export interface IAddDirectDebitAccountAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_DIRECT_DEBIT_ACCOUNT;
}

export interface IAddDirectDebitAccountFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_DIRECT_DEBIT_ACCOUNT_FULFILLED;
}

export interface IAddDirectDebitAccountRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_DIRECT_DEBIT_ACCOUNT_REJECTED;
}

/** Get direct debits mandates action interface */

export interface IGetDirectDebitMandatesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_MANDATES;
}

export interface IGetDirectDebitMandatesFulfilledAction {
  readonly payload: IDirectDebitMandatesData;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_MANDATES_FULFILLED;
}

export interface IGetDirectDebitMandatesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DIRECT_DEBIT_MANDATES_REJECTED;
}

/** Add direct debit mandate action interface */

export interface IAddDirectDebitMandateAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_DIRECT_DEBIT_MANDATE;
}

export interface IAddDirectDebitMandateFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_DIRECT_DEBIT_MANDATE_FULFILLED;
}

export interface IAddDirectDebitMandateRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_DIRECT_DEBIT_MANDATE_REJECTED;
}

/** Get customer currency limits action interfaces */

export interface IGetCurrencyLimitAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_CURRENCY_LIMIT;
}

export interface IGetCurrencyLimitFulfilledAction {
  readonly payload: ICurrencyLimitItemData;
  readonly type: ActionTypeKeys.GET_CURRENCY_LIMIT_FULFILLED;
}

export interface IGetCurrencyLimitRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_CURRENCY_LIMIT_REJECTED;
}

/** Get customer currency limits action interfaces */

export interface IUpdateCurrencyLimitAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_CURRENCY_LIMIT;
}

export interface IUpdateCurrencyLimitFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_CURRENCY_LIMIT_FULFILLED;
}

export interface IUpdateCurrencyLimitRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_CURRENCY_LIMIT_REJECTED;
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
  | IGetDirectDebitAccountsFulfilledAction
  | IAddDirectDebitAccountFulfilledAction
  | IGetDirectDebitMandatesFulfilledAction
  | IAddDirectDebitMandateFulfilledAction
  | IGetCurrencyLimitFulfilledAction
  | IUpdateCurrencyLimitFulfilledAction
  | IResetCustomersAction;
