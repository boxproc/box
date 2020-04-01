import { ImmutableArray } from 'seamless-immutable';

export interface IRepaymentHierarchyItemData {
  id: number;
  repayment_priority: number;
  element_identifier: string;
  product_id: number;
  product_element_id: number;
  status: string;
  description: string;
}

export interface IRepaymentHierarchy {
  id: number;
  repaymentPriority: number;
  elementIdentifier: string;
  productId: number;
  productElementId: number;
  status: string;
  description: string;
}

export interface IRepaymentHierarchyItemsData {
  repayment_hierarchy: Array<IRepaymentHierarchyItemData>;
}

export interface IRepaymentHierarchyReq {
  id: number;
  productId: number;
  repaymentPriority: number;
}

export interface IRepaymentHierarchyReqToSend {
  id: number;
  product_id: number;
  repayment_priority: number;
}

export interface IRepaymentHierarchyState {
  repaymentHierarchy: ImmutableArray<IRepaymentHierarchyItemData>;
}
