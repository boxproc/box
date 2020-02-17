import { RepaymentHierarchyItems } from './types';

import { ResponseStatusType } from 'types';

export const repaymentHierarchy: RepaymentHierarchyItems = {
  repayment_hierarchy: [
    {
      repayment_priority: 1,
      element_identifier: 'F',
      product_id: 1,
      product_element_id: 2,
      description: 'Description 1',
    },
    {
      repayment_priority: 2,
      element_identifier: 'O',
      product_id: 1,
      product_element_id: 2,
      description: 'Description 2',
    },
    {
      repayment_priority: 3,
      element_identifier: 'A',
      product_id: 1,
      product_element_id: 2,
      description: 'Description 3',
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: '00',
  },
};
