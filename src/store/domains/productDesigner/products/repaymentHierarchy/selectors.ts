import { createSelector } from 'reselect';

import { StoreState } from 'store';

import { prepareRepaymentHierarchyToRender } from './utils';

export const selectDefaultRepaymentHierarchy = (state: StoreState) =>
  state.productDesigner.repaymentHierarchy.repaymentHierarchy;

export const selectRepaymentHierarchy = createSelector(
  selectDefaultRepaymentHierarchy,
  items => items && items.asMutable().map(item => prepareRepaymentHierarchyToRender(item))
);
