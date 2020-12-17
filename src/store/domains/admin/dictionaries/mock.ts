import {
  IDictionaryAccountStatusesData,
  IDictionaryCardStatusesData,
  IDictionaryCountriesData,
  IDictionaryCurrenciesData,
  IDictionaryEndpointTypesData,
  IDictionaryEventDataElemsData,
  IDictionaryEventsData,
  IDictionaryInterfaceTypesData,
  IDictionaryTransactionTypesData,
} from './types';

/** Dictionary account statuses mock */
export const dictionaryAccountStatusesMock: IDictionaryAccountStatusesData = {
  account_statuses: [
    { status: 'A', name: 'Active' },
    { status: 'B', name: 'Bankrupt' },
    { status: 'C', name: 'Closed' },
    { status: 'D', name: 'Deleted' },
    { status: 'E', name: 'Overdue' },
    { status: 'I', name: 'Inactive' },
    { status: 'L', name: 'Lost' },
    { status: 'O', name: 'Over-limit' },
    { status: 'R', name: 'Recency' },
    { status: 'Q', name: 'Delinquency' },
    { status: 'S', name: 'Stolen' },
    { status: 'V', name: 'Vulnerable customer' },
  ],
};

/** Dictionary card statuses mock */
export const dictionaryCardStatusesMock: IDictionaryCardStatusesData = {
  card_statuses: [
    { id: 0, name: 'Unspecified' },
    { id: 1, name: 'Active' },
    { id: 2, name: 'Inactive' },
    { id: 3, name: 'Card lost' },
    { id: 4, name: 'Card stolen' },
    { id: 5, name: 'PIN tries exceeded' },
    { id: 6, name: 'Suspected fraud' },
    { id: 7, name: 'Card replaced' },
  ],
};

/** Dictionary endpoint types mock */
export const dictionaryEndpointTypesMock: IDictionaryEndpointTypesData = {
  endpoint_types: [
    { id: 1, name: 'BOX API' },
    { id: 2, name: 'Tutuka' },
    { id: 3, name: 'Tribe' },
    { id: 4, name: 'QRails' },
    { id: 5, name: 'GoCardless' },
  ],
};

/** Dictionary interface types mock */
export const dictionaryInterfaceTypesMock: IDictionaryInterfaceTypesData = {
  interface_types: [
    { id: 1, name: 'Reserved' },
    { id: 2, name: 'Tutuka' },
    { id: 3, name: 'Tribe' },
    { id: 4, name: 'QRails' },
    { id: 5, name: 'GoCardless' },
  ],
};

/** Dictionary transaction types mock */
export const dictionaryTransactionTypesMock: IDictionaryTransactionTypesData = {
  transaction_types: [
    { description: 'Unspecified', id: 0, debit_credit_indicator: 'U' },
    { description: 'Purchase - card payment', id: 1, debit_credit_indicator: 'D' },
    { description: 'Purchase - money transfer', id: 2, debit_credit_indicator: 'D' },
    { description: 'Cash withdrawal - ATM', id: 3, debit_credit_indicator: 'D' },
    { description: 'Cash withdrawal - vault', id: 4, debit_credit_indicator: 'D' },
    { description: 'Cash withdrawal - money transfer', id: 5, debit_credit_indicator: 'D' },
    { description: 'Balance inquiry', id: 6, debit_credit_indicator: 'U' },
    { description: 'Balance adjustement - debit', id: 7, debit_credit_indicator: 'D' },
    { description: 'Balance adjustement - credit', id: 8, debit_credit_indicator: 'C' },
    { description: 'Repayment - direct debit', id: 9, debit_credit_indicator: 'C' },
    { description: 'Repayment - debit card', id: 10, debit_credit_indicator: 'C' },
    { description: 'Repayment - bank transfer', id: 11, debit_credit_indicator: 'C' },
    { description: 'Repayment - card money send', id: 12, debit_credit_indicator: 'C' },
    { description: 'Refund', id: 13, debit_credit_indicator: 'C' },
    { description: 'Limit adjustement', id: 14, debit_credit_indicator: 'U' },
    { description: 'Fee - 1', id: 15, debit_credit_indicator: 'D' },
    { description: 'Fee - 2', id: 16, debit_credit_indicator: 'D' },
    { description: 'Reward - 1', id: 21, debit_credit_indicator: 'C' },
    { description: 'Reward - 2', id: 22, debit_credit_indicator: 'C' },
    { description: 'Balance transfer - Debit', id: 27, debit_credit_indicator: 'D' },
    { description: 'Balance transfer - Credit', id: 28, debit_credit_indicator: 'C' },
  ],
};

/** Dictionary countries mock */
export const dictionaryCountriesMock: IDictionaryCountriesData = {
  countries: [
    { country_code: 'ABW', numeric_code: 533, name: 'Aruba', alpha2_code: 'AW' },
    { country_code: 'AFG', numeric_code: 4, name: 'Afghanistan', alpha2_code: 'AF' },
  ],
};

/** Dictionary currencies mock */
export const dictionaryCurrenciesMock: IDictionaryCurrenciesData = {
  currencies: [
    { currency_code: 'United States dollar', numeric_code: 840, name: 'USD' },
    { currency_code: 'Australian dollar', numeric_code: 36, name: 'AUD' },
    { currency_code: 'South African rand', numeric_code: 710, name: 'ZAR' },
    { currency_code: 'Japanese yen', numeric_code: 392, name: 'JPY' },
    { currency_code: 'Ukrainian hryvnia', numeric_code: 980, name: 'UAH' },
    { currency_code: 'Pound sterling', numeric_code: 826, name: 'GBP' },
  ],
};

/** Dictionary event data elements mock */
export const dictionaryEventDataElemsMock: IDictionaryEventDataElemsData = {
  event_data_elements: [
    {
      event_id: 1,
      name: 'account_balance_limit',
      description: 'Account limit',
      data_type: 'F',
    },
    {
      event_id: 1,
      name: 'product_currency',
      description: 'Currency of the product',
      data_type: 'S',
    },
    {
      event_id: 1,
      name: 'product_scheme',
      description: 'Scheme of the product',
      data_type: 'S',
    },
    {
      event_id: 1,
      name: 'product_type',
      description: 'Type of the product',
      data_type: 'S',
    },
  ],
};

/** Dictionary events mock */
export const dictionaryEventsMock: IDictionaryEventsData = {
  events: [
    { id: 1, name: 'Account create' },
    { id: 2, name: 'Account close' },
    { id: 3, name: 'Account limit changed' },
    { id: 4, name: 'Transaction - Card' },
    { id: 5, name: 'Transaction - Adjustment' },
    { id: 6, name: 'Transaction - Repayment' },
    { id: 7, name: 'Daily Settlement' },
    { id: 8, name: 'Cycle Settlement' },
  ],
};
