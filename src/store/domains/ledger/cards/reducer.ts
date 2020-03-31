import Immutable, { ImmutableObject } from 'seamless-immutable';

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

    case ActionTypeKeys.RESET_CARDS:
      return state = cardsInitialState;

    default: return state;
  }
};

export default cardsReducer;
