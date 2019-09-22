import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectActiveItemId } from 'store/domains/utils';
import { prepareValuesToRender } from './utils';

export const selectDefaultLedgerCards = (state: StoreState) =>
  state.ledger.cards.cards;

export const selectLedgerCards = createSelector(
  selectDefaultLedgerCards,
  items => items && items.asMutable().map(item => prepareValuesToRender(item))
);

export const selectLedgerCardValues = createSelector(
  selectDefaultLedgerCards,
  selectActiveItemId,
  (cardsItems, currentId) => {
    const current = cardsItems && cardsItems.asMutable().find(item => item.id === currentId);

    return {
      ...prepareValuesToRender(current),
    };
  }
);

export const selectLedgerCardPanAlias = createSelector(
  selectLedgerCardValues,
  currentCard => currentCard && currentCard.panAlias
);
