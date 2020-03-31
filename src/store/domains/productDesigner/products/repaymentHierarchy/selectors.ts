import { createSelector } from 'reselect';

import { IStoreState } from 'store';

import { prepareRepaymentHierarchyToRender } from './utils';

export const selectDefaultRepaymentHierarchy = (state: IStoreState) =>
  state.productDesigner.repaymentHierarchy.repaymentHierarchy;

export const selectRepaymentHierarchy = createSelector(
  selectDefaultRepaymentHierarchy,
  items => items && items.map(item => prepareRepaymentHierarchyToRender(item))
);
