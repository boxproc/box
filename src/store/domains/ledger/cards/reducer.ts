import Immutable, { ImmutableObject } from 'seamless-immutable';

// import { cardStatusesConst, cardStatusesOptions } from 'consts';
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

    // case ActionTypeKeys.ACTIVATE_CARD_FULFILLED:
    //   const updatedCard = {
    //     ...state.cards.find(card => card.id === action.meta.cardId),
    //     status: cardStatusesConst.ACTIVE,
    //     card_status_name: 'Active',
    //   };

    //   return state.set(
    //     'cards',
    //     [
    //       ...state.cards.filter(card => card.id !== action.meta.cardId).asMutable(),
    //       updatedCard,
    //     ].sort((a, b) => (a.id > b.id) ? 1 : -1)
    //   );

    // case ActionTypeKeys.CHANGE_CARD_STATUS_FULFILLED:
    //   const statusName = cardStatusesOptions.find(card => card.value === action.meta.cardStatusId);
    //   const sUpdatedCard = {
    //     ...state.cards.find(card => card.id === action.meta.cardId),
    //     status: action.meta.cardStatusId,
    //     card_status_name: statusName && statusName.label,
    //   };

    //   return state.set(
    //     'cards',
    //     [
    //       ...state.cards.filter(card => card.id !== action.meta.cardId).asMutable(),
    //       sUpdatedCard,
    //     ].sort((a, b) => (a.id > b.id) ? 1 : -1)
    //   );

    case ActionTypeKeys.RESET_CARDS:
      return state = cardsInitialState;

    default: return state;
  }
};

export default cardsReducer;
