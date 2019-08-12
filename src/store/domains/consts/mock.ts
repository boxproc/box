import { CurrencyCodes, InstitutionsDataResp } from './types';

export const currencyCodesData: CurrencyCodes = {
  currencies: [
    {
      currency_code: 'AED',
      name: 'United Arab Emirates dirham',
      number_digits_after_dec_point: 2,
      numeric_code: 784,
    },
    {
      currency_code: 'AFN',
      name: 'Afghan afghani',
      number_digits_after_dec_point: 2,
      numeric_code: 971,
    },
    {
      currency_code: 'ALL',
      name: 'Albanian lek',
      number_digits_after_dec_point: 2,
      numeric_code: 8,
    },
  ],
};

export const institutionsData: InstitutionsDataResp = {
  institutions: [
    {
      id: 1,
      institution_name: 'BOX Institution',
      status: 'A',
    },
    {
      id: 2,
      institution_name: 'Test customer',
      status: 'A',
    },
  ],
};
