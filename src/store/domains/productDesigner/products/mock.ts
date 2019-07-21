import { ProductsDataResp } from './types';

export const ProductItemsData: ProductsDataResp = {
  response_status: {
    status_code: 0,
  },
  products: [
    {
      currency_code: 'GBP',
      default_statement_cycle_id: '1',
      description: 'Test revolving credit product',
      history_retention_number_of_day: '90',
      id: 1,
      institution_id: 1,
      locked_flag: 'N',
      name: 'Product: revolving credit',
      product_type: 'C',
      scheme: 'V',
      status: 'A',
    },
    {
      currency_code: 'GBP',
      default_statement_cycle_id: '1',
      description: 'Test debit product',
      history_retention_number_of_day: '90',
      id: 2,
      institution_id: 2,
      locked_flag: 'N',
      name: 'Product: debit',
      product_type: 'D',
      scheme: 'M',
      status: 'D',
    },
    {
      currency_code: 'GBP',
      default_statement_cycle_id: '1',
      description: 'Test loan product',
      history_retention_number_of_day: '90',
      id: 3,
      institution_id: 1,
      locked_flag: 'Y',
      name: 'Product: loan',
      product_type: 'L',
      scheme: 'X',
      status: 'I',
    },
  ],
};

export const ProductItemsDataFiltered: ProductsDataResp = {
  response_status: {
    status_code: 0,
  },
  products: [
    {
      currency_code: 'GBP',
      default_statement_cycle_id: '1',
      description: 'Test revolving credit product',
      history_retention_number_of_day: '90',
      id: 1,
      institution_id: 1,
      locked_flag: 'N',
      name: 'Product: revolving credit filtered',
      product_type: 'C',
      scheme: 'V',
      status: 'A',
    },
    {
      currency_code: 'GBP',
      default_statement_cycle_id: '1',
      description: 'Test loan product',
      history_retention_number_of_day: '90',
      id: 3,
      institution_id: 1,
      locked_flag: 'Y',
      name: 'Product: loan',
      product_type: 'L',
      scheme: 'X',
      status: 'I',
    },
  ],
};
