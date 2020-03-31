import { RepaymentHierarchyItems } from './types';

export const repaymentHierarchyMock: RepaymentHierarchyItems = {
  repayment_hierarchy: [
    {
      id: 1,
      repayment_priority: 1,
      element_identifier: 'F',
      product_id: 1,
      product_element_id: 1,
      status: 'C',
      description: 'Description 1',
    },
    {
      id: 2,
      repayment_priority: 2,
      element_identifier: 'O',
      product_id: 1,
      product_element_id: null,
      status: 'P',
      description: 'Description 2',
    },
    {
      id: 3,
      repayment_priority: 3,
      element_identifier: 'A',
      product_id: 1,
      product_element_id: null,
      status: 'O',
      description: 'Description 3',
    },
    {
      id: 4,
      repayment_priority: 4,
      element_identifier: 'I',
      product_id: 1,
      product_element_id: 4,
      status: 'C',
      description: 'Description 4',
    },
  ],
};
