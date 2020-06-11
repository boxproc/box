import { ImmutableArray } from 'seamless-immutable';

import { IIdNamePair, ISelectValue } from 'types';

/**
 * Account statuses interfaces
 */

export interface IDictionaryAccountStatus {
  name: string;
  status: string;
}

export interface IDictionaryAccountStatusesData {
  account_statuses: Array<IDictionaryAccountStatus>;
}

/**
 * Card statuses interfaces
 */

export interface IDictionaryCardStatusesData {
  card_statuses: Array<IIdNamePair>;
}

/**
 * Endpoint types interfaces
 */

export interface IDictionaryEndpointTypesData {
  endpoint_types: Array<IIdNamePair>;
}

/**
 * Interface types interfaces
 */

export interface IDictionaryInterfaceTypesData {
  interface_types: Array<IIdNamePair>;
}

/**
 * Statement cycle types interfaces
 */

export interface IDictionaryStatementCycleTypesData {
  statement_cycle_types: Array<IIdNamePair>;
}

/**
 * Transaction types interfaces
 */

export interface IDictionaryTransactionType {
  debit_credit_indicator: string;
  description: string;
  id: number;
}

export interface IDictionaryTransactionTypePrepared {
  debitCreditIndicator: string;
  description: string;
  id: number;
}

export interface IDictionaryTransactionTypesData {
  transaction_types: Array<IDictionaryTransactionType>;
}

/**
 * Countries interfaces
 */

export interface IDictionaryCountry {
  alpha2_code: string;
  country_code: string;
  name: string;
  numeric_code: number;
}

export interface IDictionaryCountryPrepared {
  alpha2Code: string;
  countryCode: string;
  name: string;
  numericCode: string;
}

export interface IDictionaryCountriesData {
  countries: Array<IDictionaryCountry>;
}

/**
 * Currencies interfaces
 */

export interface IDictionaryCurrency {
  currency_code: string;
  name: string;
  numeric_code: number;
}

export interface IDictionaryCurrencyPrepared {
  currencyCode: string;
  name: string;
  numericCode: string;
}

export interface IDictionaryCurrenciesData {
  currencies: Array<IDictionaryCurrency>;
}

/**
 * Event data element interfaces
 */

export interface IDictionaryEventDataElem {
  data_type: string;
  description: string;
  event_id: number;
  name: string;
}

export interface IDictionaryEventDataElemPrepared {
  dataType: string;
  description: string;
  event: string;
  eventId: number;
  name: string;
}

export interface IDictionaryEventDataElemsData {
  event_data_elements: Array<IDictionaryEventDataElem>;
}

export interface IDictionaryEventDataElemsFilter {
  eventId?: ISelectValue;
}

export interface IDictionaryEventDataElemsFilterToSend {
  event_id?: number | string;
}

/**
 * Events interfaces
 */

export interface IDictionaryEventsData {
  events: Array<IIdNamePair>;
}

/**
 * Dictionaries state interface
 */
export interface IDictionariesState {
  accountStatuses: ImmutableArray<IDictionaryAccountStatus>;
  cardStatuses: ImmutableArray<IIdNamePair>;
  countries: ImmutableArray<IDictionaryCountry>;
  currencies: ImmutableArray<IDictionaryCurrency>;
  endpointTypes: ImmutableArray<IIdNamePair>;
  eventDataElems: ImmutableArray<IDictionaryEventDataElem>;
  events: ImmutableArray<IIdNamePair>;
  interfaceTypes: ImmutableArray<IIdNamePair>;
  statementCycleTypes: ImmutableArray<IIdNamePair>;
  transactionTypes: ImmutableArray<IDictionaryTransactionType>;
}
