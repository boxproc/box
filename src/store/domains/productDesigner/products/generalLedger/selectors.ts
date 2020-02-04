import { createSelector } from 'reselect';

import { selectDefaultCurrentProduct } from '../products';
import { prepareGeneralLedgerToRender } from './utils';

export const selectProductGeneralLedger = createSelector(
  selectDefaultCurrentProduct,
  current => prepareGeneralLedgerToRender(current)
);
