import { ImmutableArray } from 'seamless-immutable';

export interface RepaymentHierarchyItem {
  id: number;
  repayment_priority: number;
  element_identifier: string;
  product_id: number;
  product_element_id: number;
  status: string;
  description: string;
}

export interface RepaymentHierarchy {
  id: number;
  repaymentPriority: number;
  elementIdentifier: string;
  productId: number;
  productElementId: number;
  status: string;
  description: string;
}

export interface RepaymentHierarchyItems {
  repayment_hierarchy: Array<RepaymentHierarchyItem>;
}

export interface ChangeRepaymentHierarchy {
  id: number;
  productId: number;
  repaymentPriority: number;
}

export interface ChangeRepaymentHierarchyRequest {
  id: number;
  product_id: number;
  repayment_priority: number;
}

export interface RepaymentHierarchyState {
  repaymentHierarchy: ImmutableArray<RepaymentHierarchyItem>;
}
