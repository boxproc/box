import { createSelector } from 'reselect';

import { selectActiveItemId } from 'store/domains/utils';
import { selectDefaultProductItems } from '../products';
import { prepareGeneralLedgerToRender } from './utils';

export const selectProductGeneralLedger = createSelector(
  selectDefaultProductItems,
  selectActiveItemId,
  (products, activeId) => {
    const current = products.find(product => product.id === activeId);

    return prepareGeneralLedgerToRender(current);
  }
);
