import { IRepaymentHierarchyItemsData } from './types';

export const repaymentHierarchyMock: IRepaymentHierarchyItemsData = {
  repayment_hierarchy: [
    {
      id: 1,
      repayment_priority: 1,
      element_identifier: 'F',
      product_id: 1,
      status: 'C',
    },
    {
      id: 2,
      repayment_priority: 2,
      element_identifier: 'O',
      product_id: 1,
      status: 'P',
    },
    {
      id: 3,
      repayment_priority: 3,
      element_identifier: 'A',
      product_id: 1,
      status: 'O',
    },
    {
      id: 4,
      repayment_priority: 4,
      element_identifier: 'I',
      product_id: 1,
      status: 'C',
    },
  ],
};
