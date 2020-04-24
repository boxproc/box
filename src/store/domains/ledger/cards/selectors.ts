import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { cardStatusesOptionsSelector } from 'store/domains/admin';
import { createLoadingSelector } from 'store/domains/loader';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const defaultCardsSelector = (state: IStoreState) => state.ledger.cards.cards;

export const cardsSelector = createSelector(
  defaultCardsSelector,
  data => data && data.map(el => prepareDataToRender(el))
);

export const currentCardSelector = createSelector(
  defaultCardsSelector,
  activeItemIdSelector,
  (cards, currentId) => {
    const currentCard = cards && cards.find(card => card.id === currentId);

    return prepareDataToRender(currentCard);
  }
);

export const currentCardStatusOptionSelector = createSelector(
  defaultCardsSelector,
  activeItemIdSelector,
  cardStatusesOptionsSelector,
  (cards, currentId, cardStatusesOptions) => {
    const currentCard = cards && cards.find(card => card.id === currentId);

    return {
      status: currentCard && cardStatusesOptions
        .find(status => status.value === currentCard.card_status_id),
    };
  }
);

export const currentCardStatusSelector = createSelector(
  defaultCardsSelector,
  activeItemIdSelector,
  (cards, currentId) => {
    const currentCard = cards && cards.find(card => card.id === currentId);

    return currentCard && currentCard.card_status_id;
  }
);

/**
 * Cards loading selectors
 */

export const isLoadingCardsSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_CARDS,
  ActionTypeKeys.FILTER_CARDS_BY_ID,
]);

export const isChangingCardStatusSelector = createLoadingSelector([
  ActionTypeKeys.CHANGE_CARD_STATUS,
]);

export const isActivatingCardSelector = createLoadingSelector([
  ActionTypeKeys.ACTIVATE_CARD,
]);
