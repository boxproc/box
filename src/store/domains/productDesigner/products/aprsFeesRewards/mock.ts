import { ProductAprItems } from './types';

import { ResponseStatusType } from 'types';

export const productAprs: ProductAprItems = {
  product_aprs: [
    {
      product_id: 3,
      product_apr_id: 1,
      description: 'Base APR',
      calculation_method: 'A',
      rate: 2.5,
      grace_number_of_days: 1,
      repayment_order: 1,
    },
    {
      product_id: 3,
      product_apr_id: 2,
      description: 'APR',
      calculation_method: 'A',
      rate: 2.5,
      grace_number_of_days: 1,
      repayment_order: 3,
    },
    {
      product_id: 3,
      product_apr_id: 2,
      description: 'APR',
      calculation_method: 'A',
      rate: 2.5,
      grace_number_of_days: 1,
      repayment_order: 2,
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: '00',
  },
};
