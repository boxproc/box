import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectCardStatusesOptions } from 'store/domains/administration';
import { selectActiveItemId } from 'store/domains/utils';
import { prepareValuesToRender } from './utils';

export const selectDefaultLedgerCards = (state: StoreState) =>
  state.ledger.cards.cards.asMutable();

export const selectLedgerCards = createSelector(
  selectDefaultLedgerCards,
  items => items && items.map(item => prepareValuesToRender(item))
);

export const selectLedgerCardValues = createSelector(
  selectDefaultLedgerCards,
  selectActiveItemId,
  (cardsItems, currentId) => {
    const current = cardsItems && cardsItems.find(item => item.id === currentId);

    return prepareValuesToRender(current);
  }
);

export const selectCurrentCardStatusOption = createSelector(
  selectDefaultLedgerCards,
  selectActiveItemId,
  selectCardStatusesOptions,
  (cardsItems, currentId, cardStatusesOptions) => {
    const current = cardsItems && cardsItems.find(item => item.id === currentId);

    return {
      status: cardStatusesOptions.find(status => status.value === current.card_status_id),
    };
  }
);

export const selectCurrentCardStatus = createSelector(
  selectDefaultLedgerCards,
  selectActiveItemId,
  (cardsItems, currentId) => {
    const current = cardsItems && cardsItems.find(item => item.id === currentId);

    return current.card_status_id;
  }
);
