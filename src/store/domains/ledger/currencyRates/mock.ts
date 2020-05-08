import { ICurrencyRatesData } from './types';

export const currencyRatesMock: ICurrencyRatesData = {
  currency_rates: [
    {
      id: 1,
      institution_id: 1,
      institution_name: 'BOX',
      rate_provider: 'custom',
      from_currency: 'USD',
      to_currency: 'GBP',
      spot_rate: 1.09365,
      buy_rate: null,
      sell_rate: null,
      provider_datetime: '29/04/2020 23:36:09',
      created_datetime: '29/04/2020 23:36:09',
    },
    {
      id: 2,
      institution_id: 1,
      institution_name: 'BOX',
      rate_provider: 'custom',
      from_currency: 'AUD',
      to_currency: 'GBP',
      spot_rate: 1.72232,
      buy_rate: null,
      sell_rate: null,
      provider_datetime: '29/04/2020 23:36:09',
      created_datetime: '29/04/2020 23:36:09',
    },
    {
      id: 3,
      institution_id: 1,
      institution_name: 'BOX',
      rate_provider: 'fixer.io',
      from_currency: 'NOK',
      to_currency: 'GBP',
      spot_rate: 9.74948,
      buy_rate: null,
      sell_rate: null,
      provider_datetime: '29/04/2020 23:36:09',
      created_datetime: '29/04/2020 23:36:09',
    },
  ],
};