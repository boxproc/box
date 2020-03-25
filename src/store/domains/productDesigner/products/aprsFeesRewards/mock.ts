import { ProductAprItems } from './types';

import { IResponseStatus } from 'types';

export const productAprs: ProductAprItems = {
  product_aprs: [
    {
      product_id: 3,
      product_apr_id: 1,
      description: 'Base APR',
      calculation_method: 'A',
      rate: 2.5,
      grace_number_of_days: 1,
    },
    {
      product_id: 3,
      product_apr_id: 2,
      description: 'APR',
      calculation_method: 'A',
      rate: 2.5,
      grace_number_of_days: 1,
    },
    {
      product_id: 3,
      product_apr_id: 2,
      description: 'APR',
      calculation_method: 'A',
      rate: 2.5,
      grace_number_of_days: 1,
    },
  ],
};

export const successResponseStatus: IResponseStatus = {
  response_status: {
    status_code: '00',
  },
};
