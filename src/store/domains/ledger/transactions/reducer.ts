import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerTransactionsActionTypes } from './actionTypes';
import { LedgerTransactionsState } from './types';

export const ledgerTransactionsInitialState: ImmutableObject<LedgerTransactionsState> = Immutable({
  transactions: Immutable([]),
});

const ledgerCustomersReducer =
  (state = ledgerTransactionsInitialState, action: LedgerTransactionsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_FULFILLED:
        return state
          .set('transactions', action.payload.transactions);

      default: return state;
    }
  };

export default ledgerCustomersReducer;
