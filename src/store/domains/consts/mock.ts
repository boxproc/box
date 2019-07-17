import { CurrencyCodesResp, InstitutionsDataResp } from './types';

export const currencyCodesData: CurrencyCodesResp = {
  currency_options: [
    { key: 784, value: 'AED' },
    { key: 971, value: 'AFN' },
    { key: 8, value: 'ALL' },
    { key: 51, value: 'AMD' },
    { key: 532, value: 'ANG' },
    { key: 973, value: 'AOA' },
  ],
};

export const institutionsData: InstitutionsDataResp = {
  institutions: [
    {
      id: 1,
      institution_name: 'BOX',
      status: 'A',
    },
    {
      id: 2,
      institution_name: 'Test customer',
      status: 'A',
    },
  ],
};
