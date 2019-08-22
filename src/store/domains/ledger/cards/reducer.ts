import Immutable, { ImmutableObject } from 'seamless-immutable';

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

      default: return state;
    }
  };

export default ledgerCardsReducer;
