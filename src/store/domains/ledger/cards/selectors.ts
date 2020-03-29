import { createSelector } from 'reselect';

import { StoreState } from 'store';

import { cardStatusesOptionsSelector } from 'store/domains/administration';
import { activeItemIdSelector } from 'store/domains/utils';
import { prepareValuesToRender } from './utils';

export const selectDefaultLedgerCards = (state: StoreState) => state.ledger.cards.cards;

export const selectLedgerCards = createSelector(
  selectDefaultLedgerCards,
  items => items && items.map(item => prepareValuesToRender(item))
);

export const selectLedgerCardValues = createSelector(
  selectDefaultLedgerCards,
  activeItemIdSelector,
  (cardsItems, currentId) => {
    const current = cardsItems && cardsItems.find(item => item.id === currentId);

    return prepareValuesToRender(current);
  }
);

export const selectCurrentCardStatusOption = createSelector(
  selectDefaultLedgerCards,
  activeItemIdSelector,
  cardStatusesOptionsSelector,
  (cardsItems, currentId, cardStatusesOptions) => {
    const current = cardsItems && cardsItems.find(item => item.id === currentId);

    return {
      status: cardStatusesOptions.find(status => status.value === current.card_status_id),
    };
  }
);

export const selectCurrentCardStatus = createSelector(
  selectDefaultLedgerCards,
  activeItemIdSelector,
  (cardsItems, currentId) => {
    const current = cardsItems && cardsItems.find(item => item.id === currentId);

    return current.card_status_id;
  }
);
