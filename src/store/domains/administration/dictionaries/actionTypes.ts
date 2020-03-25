import {
  IDictionaryAccountStatusesData,
  IDictionaryCardStatusesData,
  IDictionaryCountriesData,
  IDictionaryCurrenciesData,
  IDictionaryEndpointTypesData,
  IDictionaryEventDataElemsData,
  IDictionaryEventsData,
  IDictionaryInterfaceTypesData,
  IDictionaryRepaymentTypesData,
  IDictionaryStatementCycleTypesData,
  IDictionaryTransactionTypesData,
} from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  /** Account statuses action type keys */
  GET_DICTIONARY_ACCOUNT_STATUSES = 'administration/dictionaries/GET_DICTIONARY_ACCOUNT_STATUSES',
  GET_DICTIONARY_ACCOUNT_STATUSES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_ACCOUNT_STATUSES_FULFILLED',
  GET_DICTIONARY_ACCOUNT_STATUSES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_ACCOUNT_STATUSES_REJECTED',

  /** Card statuses action type keys */
  GET_DICTIONARY_CARD_STATUSES = 'administration/dictionaries/GET_DICTIONARY_CARD_STATUSES',
  GET_DICTIONARY_CARD_STATUSES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_CARD_STATUSES_FULFILLED',
  GET_DICTIONARY_CARD_STATUSES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_CARD_STATUSES_REJECTED',

  /** Endpoint types action type keys */
  GET_DICTIONARY_ENDPOINT_TYPES = 'administration/dictionaries/GET_DICTIONARY_ENDPOINT_TYPES',
  GET_DICTIONARY_ENDPOINT_TYPES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_ENDPOINT_TYPES_FULFILLED',
  GET_DICTIONARY_ENDPOINT_TYPES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_ENDPOINT_TYPES_REJECTED',

  /** Interface types action type keys */
  GET_DICTIONARY_INTERFACE_TYPES = 'administration/dictionaries/GET_DICTIONARY_INTERFACE_TYPES',
  GET_DICTIONARY_INTERFACE_TYPES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_INTERFACE_TYPES_FULFILLED',
  GET_DICTIONARY_INTERFACE_TYPES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_INTERFACE_TYPES_REJECTED',

  /** Statement cycle types action type keys */
  GET_DICTIONARY_STATEMENT_CYCLE_TYPES =
  'administration/dictionaries/GET_DICTIONARY_STATEMENT_CYCLE_TYPES',
  GET_DICTIONARY_STATEMENT_CYCLE_TYPES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_STATEMENT_CYCLE_TYPES_FULFILLED',
  GET_DICTIONARY_STATEMENT_CYCLE_TYPES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_STATEMENT_CYCLE_TYPES_REJECTED',

  /** Repayment types action type keys */
  GET_DICTIONARY_REPAYMENT_TYPES = 'administration/dictionaries/GET_DICTIONARY_REPAYMENT_TYPES',
  GET_DICTIONARY_REPAYMENT_TYPES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_REPAYMENT_TYPES_FULFILLED',
  GET_DICTIONARY_REPAYMENT_TYPES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_REPAYMENT_TYPES_REJECTED',

  /** Transaction types action types keys */
  GET_DICTIONARY_TRANSACTION_TYPES =
  'administration/dictionaries/GET_DICTIONARY_TRANSACTION_TYPES',
  GET_DICTIONARY_TRANSACTION_TYPES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_TRANSACTION_TYPES_FULFILLED',
  GET_DICTIONARY_TRANSACTION_TYPES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_TRANSACTION_TYPES_REJECTED',

  /** Countries action types keys */
  GET_DICTIONARY_COUNTRIES = 'administration/dictionaries/GET_DICTIONARY_COUNTRIES',
  GET_DICTIONARY_COUNTRIES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_COUNTRIES_FULFILLED',
  GET_DICTIONARY_COUNTRIES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_COUNTRIES_REJECTED',

  /** Currencies action types keys */
  GET_DICTIONARY_CURRENCIES = 'administration/dictionaries/GET_DICTIONARY_CURRENCIES',
  GET_DICTIONARY_CURRENCIES_FULFILLED =
  'administration/dictionaries/GET_DICTIONARY_CURRENCIES_FULFILLED',
  GET_DICTIONARY_CURRENCIES_REJECTED =
  'administration/dictionaries/GET_DICTIONARY_CURRENCIES_REJECTED',

  /** Event data elements action types keys */
  FILTER_DICTIONARY_EVENT_DATA_ELEMS =
  'administration/dictionaries/FILTER_DICTIONARY_EVENT_DATA_ELEMS',
  FILTER_DICTIONARY_EVENT_DATA_ELEMS_FULFILLED =
  'administration/dictionaries/FILTER_DICTIONARY_EVENT_DATA_ELEMS_FULFILLED',
  FILTER_DICTIONARY_EVENT_DATA_ELEMS_REJECTED =
  'administration/dictionaries/FILTER_DICTIONARY_EVENT_DATA_ELEMS_REJECTED',

  RESET_EVENT_DATA_ELEMS = 'administration/eventDataElems/RESET_EVENT_DATA_ELEMS',

  /** Events action types keys */
  GET_DICTIONARY_EVENTS = 'administration/dictionaries/GET_DICTIONARY_EVENTS',
  GET_DICTIONARY_EVENTS_FULFILLED = 'administration/dictionaries/GET_DICTIONARY_EVENTS_FULFILLED',
  GET_DICTIONARY_EVENTS_REJECTED = 'administration/dictionaries/GET_DICTIONARY_EVENTS_REJECTED',
}

/** Account statuses action interfaces */

export interface IGetDictionaryAccountStatusesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES;
}

export interface IGetDictionaryAccountStatusesFulfilledAction {
  readonly payload: IDictionaryAccountStatusesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES_FULFILLED;
}

export interface IGetDictionaryAccountStatusesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES_REJECTED;
}

/** Card statuses action interfaces */

export interface IGetDictionaryCardStatusesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES;
}

export interface IGetDictionaryCardStatusesFulfilledAction {
  readonly payload: IDictionaryCardStatusesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES_FULFILLED;
}

export interface IGetDictionaryCardStatusesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES_REJECTED;
}

/** Endpoint types action interfaces */

export interface IGetDictionaryEndpointTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES;
}

export interface IGetDictionaryEndpointTypesFulfilledAction {
  readonly payload: IDictionaryEndpointTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES_FULFILLED;
}

export interface IGetDictionaryEndpointTypesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES_REJECTED;
}

/** Interface types action interfaces */

export interface IGetDictionaryInterfaceTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES;
}

export interface IGetDictionaryInterfaceTypesFulfilledAction {
  readonly payload: IDictionaryInterfaceTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES_FULFILLED;
}

export interface IGetDictionaryInterfaceTypesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES_REJECTED;
}

/** Statement cycle types action interfaces */

export interface IGetDictionaryStatementCycleTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES;
}

export interface IGetDictionaryStatementCycleTypesFulfilledAction {
  readonly payload: IDictionaryStatementCycleTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES_FULFILLED;
}

export interface IGetDictionaryStatementCycleTypesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES_REJECTED;
}

/** Repayment types action interfaces */

export interface IGetDictionaryRepaymentTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES;
}

export interface IGetDictionaryRepaymentTypesFulfilledAction {
  readonly payload: IDictionaryRepaymentTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES_FULFILLED;
}

export interface IGetDictionaryRepaymentTypesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES_REJECTED;
}

/** Transaction types action interfaces */

export interface IGetDictionaryTransactionTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES;
}

export interface IGetDictionaryTransactionTypesFulfilledAction {
  readonly payload: IDictionaryTransactionTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES_FULFILLED;
}

export interface IGetDictionaryTransactionTypesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES_REJECTED;
}

/** Countries action interfaces */

export interface IGetDictionaryCountriesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_COUNTRIES;
}

export interface IGetDictionaryCountriesFulfilledAction {
  readonly payload: IDictionaryCountriesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_COUNTRIES_FULFILLED;
}

export interface IGetDictionaryCountriesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_COUNTRIES_REJECTED;
}

/** Currencies action interfaces */

export interface IGetDictionaryCurrenciesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CURRENCIES;
}

export interface IGetDictionaryCurrenciesFulfilledAction {
  readonly payload: IDictionaryCurrenciesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CURRENCIES_FULFILLED;
}

export interface IGetDictionaryCurrenciesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CURRENCIES_REJECTED;
}

/** Event data elements action interfaces */

export interface IFilterDictionaryEventDataElemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_DICTIONARY_EVENT_DATA_ELEMS;
}

export interface IFilterDictionaryEventDataElemsFulfilledAction {
  readonly payload: IDictionaryEventDataElemsData;
  readonly type: ActionTypeKeys.FILTER_DICTIONARY_EVENT_DATA_ELEMS_FULFILLED;
}

export interface IFilterDictionaryEventDataElemsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_DICTIONARY_EVENT_DATA_ELEMS_REJECTED;
}

export interface IResetDataElemsAction {
  readonly type: ActionTypeKeys.RESET_EVENT_DATA_ELEMS;
}

/** Events action interfaces */

export interface IGetDictionaryEventsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_EVENTS;
}

export interface IGetDictionaryEventsFulfilledAction {
  readonly payload: IDictionaryEventsData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_EVENTS_FULFILLED;
}

export interface IGetDictionaryEventsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_EVENTS_REJECTED;
}

export type DictionaryActionTypes =
  | IGetDictionaryAccountStatusesFulfilledAction
  | IGetDictionaryCardStatusesFulfilledAction
  | IGetDictionaryEndpointTypesFulfilledAction
  | IGetDictionaryInterfaceTypesFulfilledAction
  | IGetDictionaryStatementCycleTypesFulfilledAction
  | IGetDictionaryTransactionTypesFulfilledAction
  | IGetDictionaryRepaymentTypesFulfilledAction
  | IGetDictionaryCountriesFulfilledAction
  | IGetDictionaryCurrenciesFulfilledAction
  | IFilterDictionaryEventDataElemsFulfilledAction
  | IResetDataElemsAction
  | IGetDictionaryEventsFulfilledAction;
