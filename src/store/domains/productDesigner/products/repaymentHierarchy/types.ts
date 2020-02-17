import { ImmutableArray } from 'seamless-immutable';

export interface RepaymentHierarchyItem {
  repayment_priority: number;
  element_identifier: string;
  product_id: number;
  product_element_id: number;
  description: string;
}

export interface RepaymentHierarchy {
  repaymentPriority: number;
  elementIdentifier: string;
  productId: number;
  productElementId: number;
  description: string;
}

export interface RepaymentHierarchyItems {
  repayment_hierarchy: Array<RepaymentHierarchyItem>;
}

export interface ChangeRepaymentHierarchy {
  productElementId: number;
  repaymentPriority: number;
}

export interface ChangeRepaymentHierarchyRequest {
  product_element_id: number;
  repayment_priority: number;
}

export interface RepaymentHierarchyState {
  repaymentHierarchy: ImmutableArray<RepaymentHierarchyItem>;
}
