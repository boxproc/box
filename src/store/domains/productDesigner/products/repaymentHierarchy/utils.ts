import {
  ChangeRepaymentHierarchy,
  ChangeRepaymentHierarchyRequest,
  RepaymentHierarchy,
  RepaymentHierarchyItem,
} from './types';

import { elementIdentifierOptions, hierarchyElemsStatusOptions } from 'consts';

export const prepareRepaymentHierarchyToRender = (data: RepaymentHierarchyItem):
  RepaymentHierarchy => {
  if (!data) {
    return null;
  }

  const {
    id,
    repayment_priority,
    element_identifier,
    product_id,
    product_element_id,
    status,
    description,
  } = data;

  const elementIdentifier = elementIdentifierOptions.find(el => el.value === element_identifier);
  const elementStatus = hierarchyElemsStatusOptions.find(el => el.value === status);

  return {
    id,
    repaymentPriority: repayment_priority,
    elementIdentifier: elementIdentifier && elementIdentifier.label,
    productId: product_id,
    productElementId: product_element_id,
    status: elementStatus && elementStatus.label,
    description,
  };
};

export const prepareRepaymentHierarchyRequest = (data: ChangeRepaymentHierarchy):
  ChangeRepaymentHierarchyRequest => {
  const { id, productId, repaymentPriority } = data;

  return {
    id,
    product_id: productId,
    repayment_priority: repaymentPriority,
  };
};
