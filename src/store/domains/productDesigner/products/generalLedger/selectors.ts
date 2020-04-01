import { createSelector } from 'reselect';

import { createLoadingSelector } from 'store/domains/loader';
import { selectDefaultCurrentProduct } from '../products';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const productGLSelector = createSelector(
  selectDefaultCurrentProduct,
  data => prepareDataToRender(data)
);

export const isProductGLUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_GENERAL_LEDGER,
]);
