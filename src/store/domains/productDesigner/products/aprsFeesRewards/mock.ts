import { IProductAprsData } from './types';

export const productAprsMock: IProductAprsData = {
  product_aprs: [
    {
      product_id: 3,
      product_apr_id: 1,
      description: 'Base APR',
      calculation_method: 'A',
      rate: 2.5,
      initial_interest_free_days: 1,
      repayment_priority: 1,
    },
    {
      product_id: 3,
      product_apr_id: 2,
      description: 'APR',
      calculation_method: 'A',
      rate: 2.5,
      initial_interest_free_days: 1,
      repayment_priority: 2,
    },
    {
      product_id: 3,
      product_apr_id: 2,
      description: 'APR',
      calculation_method: 'A',
      rate: 2.5,
      initial_interest_free_days: 1,
      repayment_priority: 3,
    },
  ],
};
