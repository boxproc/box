import { createSelector } from 'reselect';

import { createLoadingSelector } from 'store/domains/loader';
import { defaultCurrentProductSelector } from './../products';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const productRepaymentSelector = createSelector(
  defaultCurrentProductSelector,
  data => prepareDataToRender(data)
);

export const isProductRepaymentUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_PRODUCT_REPAYMENT,
]);
