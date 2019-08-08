import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerAccountsActionTypes } from './actionTypes';
import { LedgerAccountsState } from './types';

export const ledgerAccountsInitialState: ImmutableObject<LedgerAccountsState> = Immutable({
  accounts: Immutable([]),
  currentAccountId: null,
});

const ledgerAccountsReducer =
  (state = ledgerAccountsInitialState, action: LedgerAccountsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_LEDGER_ACCOUNTS_FULFILLED:
        return state
          .set('accounts', action.payload.accounts);

      case ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_FULFILLED:
        return state
          .set('accounts', action.payload.accounts);

      case ActionTypeKeys.SET_LEDGER_ACCOUNT_ID:
        return state
          .set('currentAccountId', action.payload);

      default: return state;
    }
  };

export default ledgerAccountsReducer;
