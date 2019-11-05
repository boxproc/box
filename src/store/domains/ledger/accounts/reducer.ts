import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerAccountsActionTypes } from './actionTypes';
import { LedgerAccountsState } from './types';

export const ledgerAccountsInitialState: ImmutableObject<LedgerAccountsState> = Immutable({
  accounts: Immutable([]),
  cards: Immutable([]),
  lastStatement: null,
});

const ledgerAccountsReducer =
  (state = ledgerAccountsInitialState, action: LedgerAccountsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_FULFILLED:
        return state
          .set('accounts', action.payload.accounts);

      case ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_BY_ID_FULFILLED:
        return state
          .set('accounts', action.payload.accounts);

      case ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS_FULFILLED:
        return state
          .set('cards', action.payload.cards);

      case ActionTypeKeys.GET_LEDGER_LAST_STATEMENT_FULFILLED:
        return state
          .set('lastStatement', action.payload.statement);

      case ActionTypeKeys.RESET_ACCOUNTS:
        return state = ledgerAccountsInitialState;

      default: return state;
    }
  };

export default ledgerAccountsReducer;
