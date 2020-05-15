import Immutable, { ImmutableObject } from 'seamless-immutable';

import { cardStatusesConst, cardStatusesOptions } from 'consts';
import { ActionTypeKeys, TCardsAction } from './actionTypes';
import { ICardsState } from './types';

export const cardsInitialState: ImmutableObject<ICardsState> = Immutable({
  cards: Immutable([]),
});

const cardsReducer = (state = cardsInitialState, action: TCardsAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_CARDS_FULFILLED:
      return state.set('cards', action.payload.cards);

    case ActionTypeKeys.FILTER_CARDS_BY_ID_FULFILLED:
      return state.set('cards', action.payload.cards);

    case ActionTypeKeys.ACTIVATE_CARD_FULFILLED:
      const aCardInd = state.cards.findIndex(el => el.id === action.meta.cardId);
      const aCards = state.cards.asMutable();

      aCards[aCardInd] = {
        ...aCards[aCardInd],
        card_status_id: cardStatusesConst.ACTIVE,
        card_status_name: 'Active',
      };

      return state.set('cards', aCards);

    case ActionTypeKeys.CHANGE_CARD_STATUS_FULFILLED:
      const statusName = cardStatusesOptions.find(el => el.value === action.meta.card_status_id);
      const cCardInd = state.cards.findIndex(el => el.id === action.meta.card_id);
      const cCards = state.cards.asMutable();

      cCards[cCardInd] = {
        ...cCards[cCardInd],
        card_status_id: action.meta.card_status_id,
        card_status_name: statusName && statusName.label,
      };

      return state.set('cards', cCards);

    case ActionTypeKeys.RESET_CARDS:
      return state = cardsInitialState;

    default: return state;
  }
};

export default cardsReducer;
