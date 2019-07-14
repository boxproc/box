import { ProductOptionsResp, ProductsDataResp } from './types';

export const ProductItemsData: ProductsDataResp = {
  products: [
    {
      id: 1,
      institution_id: 101,
      name: 'name',
      description: 'description',
      status: 'status',
      product_type: 'Type 1',
      scheme: 'Scheme 1',
      currency_code: 'OMR',
      history_retention_number_of_days: 1,
      default_statement_cycle_id: 1,
      locked_flag: 'N',
    },
    {
      id: 1,
      institution_id: 102,
      name: 'name 2',
      description: 'description',
      status: 'status',
      product_type: 'Type 2',
      scheme: 'Scheme 2',
      currency_code: 'NZD',
      history_retention_number_of_days: 1,
      default_statement_cycle_id: 2,
      locked_flag: 'Y',
    },
    {
      id: 1,
      institution_id: 103,
      name: 'name 3',
      description: 'description',
      status: 'status',
      product_type: 'Type 3',
      scheme: 'Scheme 3',
      currency_code: 'NPR',
      history_retention_number_of_days: 1,
      default_statement_cycle_id: 3,
      locked_flag: 'Y',
    },
  ],
};

export const ProductOptionsData: ProductOptionsResp = {
  product_type: [
    {key: 1, value: 'Type 1'},
    {key: 2, value: 'Type 2'},
    {key: 3, value: 'Type 3'},
  ],
  scheme: [
    {key: 1, value: 'Schema 1'},
    {key: 2, value: 'Schema 2'},
    {key: 3, value: 'Schema 3'},
  ],
  currency_code: [
    { key: 524, value: 'NPR' },
    { key: 554, value: 'NZD' },
    { key: 512, value: 'OMR' },
  ],
};
