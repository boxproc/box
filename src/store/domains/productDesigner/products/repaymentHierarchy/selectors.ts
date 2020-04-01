import { createSelector } from 'reselect';

import { IStoreState } from 'store';

import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const defaultRepaymentHierarchySelector = (state: IStoreState) =>
  state.productDesigner.repaymentHierarchy.repaymentHierarchy;

export const repaymentHierarchySelector = createSelector(
  defaultRepaymentHierarchySelector,
  data => data && data.map(el => prepareDataToRender(el))
);

/**
 * Repayment hierarchy loading selectors
 */

export const isRepaymentHierarchyLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_REPAYMENT_HIERARCHY,
]);

export const isRepaymentHierarchyUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY,
]);
