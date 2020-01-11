import Immutable, { ImmutableObject } from 'seamless-immutable';

// import { statusCodes } from 'consts';

import { ActionTypeKeys, LedgerCardsActionTypes } from './actionTypes';
import { LedgerCardsState } from './types';

export const ledgerCardsInitialState: ImmutableObject<LedgerCardsState> = Immutable({
  cards: Immutable([]),
});

const ledgerCardsReducer =
  (state = ledgerCardsInitialState, action: LedgerCardsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_LEDGER_CARDS_FULFILLED:
        return state
          .set('cards', action.payload.cards);

      case ActionTypeKeys.FILTER_LEDGER_CARDS_BY_ID_FULFILLED:
        return state
          .set('cards', action.payload.cards);

      case ActionTypeKeys.ACTIVATE_LEDGER_CARD_FULFILLED:
        // const updatedCard = {
        //   ...state.cards.find(card => card.id === state.currentCardId),
        //   status: statusCodes.ACTIVE,
        // };

        return state;
      // .set(
      //   'cards',
      //   [
      //     ...state.cards.filter(card => card.id !== state.currentCardId).asMutable(),
      //     updatedCard,
      //   ].sort((a, b) => (a.id > b.id) ? 1 : -1)
      // );

      case ActionTypeKeys.RESET_CARDS:
        return state = ledgerCardsInitialState;

      default: return state;
    }
  };

export default ledgerCardsReducer;
