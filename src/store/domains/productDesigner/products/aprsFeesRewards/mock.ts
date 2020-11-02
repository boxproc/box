import { IProductAprsData } from './types';

export const productAprsMock: IProductAprsData = {
  product_aprs: [
    {
      product_id: 3,
      product_apr_id: 3,
      description: 'Base APR',
      calculation_method: 'A',
      rate: 2.5,
      initial_interest_free_days: 1,
      repayment_priority: 1,
      always_charge_interest: 'Y',
      default_flag: 'N',
    },
    {
      product_id: 3,
      product_apr_id: 2,
      description: 'APR for fee',
      calculation_method: 'A',
      rate: 2.5,
      initial_interest_free_days: 1,
      repayment_priority: 2,
      always_charge_interest: 'N',
      default_flag: 'N',
    },
    {
      product_id: 3,
      product_apr_id: 1,
      description: 'Default APR',
      calculation_method: 'A',
      rate: 0,
      initial_interest_free_days: 0,
      repayment_priority: 255,
      always_charge_interest: 'N',
      default_flag: 'Y',
    },
  ],
};
