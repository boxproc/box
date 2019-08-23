import Immutable, { ImmutableObject } from 'seamless-immutable';

import { statusTypes } from 'consts';

import { ActionTypeKeys, LedgerCardsActionTypes } from './actionTypes';
import { LedgerCardsState } from './types';

export const ledgerCardsInitialState: ImmutableObject<LedgerCardsState> = Immutable({
  cards: Immutable([]),
  currentСardId: null,
});

const ledgerCardsReducer =
  (state = ledgerCardsInitialState, action: LedgerCardsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_LEDGER_CARDS_FULFILLED:
        return state
          .set('cards', action.payload.cards);

      case ActionTypeKeys.ACTIVATE_LEDGER_CARD_FULFILLED:
        const updatedCard = {
          ...state.cards.find(card => card.id === state.currentСardId),
          status: statusTypes.ACTIVE,
        };

        return state
          .set(
            'cards',
            [
              ...state.cards.filter(card => card.id !== state.currentСardId).asMutable(),
              updatedCard,
            ].sort((a, b) => (a.id > b.id) ? 1 : -1)
          );

      case ActionTypeKeys.SET_LEDGER_CARD_ID:
        return state
          .set('currentСardId', action.payload);

      default: return state;
    }
  };

export default ledgerCardsReducer;
