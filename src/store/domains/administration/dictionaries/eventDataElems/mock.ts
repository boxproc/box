import { DictionaryEventDataElemsDataResp } from './types';

export const dictionaryEventDataElemsData: DictionaryEventDataElemsDataResp = {
  event_data_elements: [
    {
      event_id: 1,
      name: 'account_balance_limit',
      description: 'Account limit',
      data_type: 'F',
    },
    {
      event_id: 1,
      name: 'account_balance_limit_shared',
      description: 'Account shared limit',
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

export const dictionaryEventDataElemsFilteredData: DictionaryEventDataElemsDataResp = {
  event_data_elements: [
    {
      event_id: 1,
      name: 'account_balance_limit_filtered',
      description: 'Account limit',
      data_type: 'F',
    },
    {
      event_id: 1,
      name: 'account_balance_limit_shared',
      description: 'Account shared limit',
      data_type: 'F',
    },
  ],
};
