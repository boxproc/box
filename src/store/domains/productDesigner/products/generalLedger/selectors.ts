import { createSelector } from 'reselect';

import { createLoadingSelector } from 'store/domains/loader';
import { defaultCurrentProductSelector } from '../products';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const productGLSelector = createSelector(
  defaultCurrentProductSelector,
  data => prepareDataToRender(data)
);

export const isProductGLUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_GENERAL_LEDGER,
]);
