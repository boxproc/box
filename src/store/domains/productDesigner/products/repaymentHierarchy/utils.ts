import { RepaymentHierarchy, RepaymentHierarchyItem } from './types';

import { elementIdentifierOptions } from 'consts';

export const prepareRepaymentHierarchyToRender = (data: RepaymentHierarchyItem):
  RepaymentHierarchy => {
  if (!data) {
    return null;
  }

  const {
    repayment_priority,
    element_identifier,
    product_id,
    product_element_id,
    description,
  } = data;

  const elementIdentifier = elementIdentifierOptions.find(el => el.value === element_identifier);

  return {
    repaymentPriority: repayment_priority,
    elementIdentifier: elementIdentifier && elementIdentifier.label,
    productId: product_id,
    productElementId: product_element_id,
    description,
  };
};
