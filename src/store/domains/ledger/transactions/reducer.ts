import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerTransactionsActionTypes } from './actionTypes';
import { LedgerTransactionsState } from './types';

export const ledgerTransactionsInitialState: ImmutableObject<LedgerTransactionsState> = Immutable({
  transactions: Immutable([]),
  currentTransactionId: null,
});

const ledgerCustomersReducer =
  (state = ledgerTransactionsInitialState, action: LedgerTransactionsActionTypes) => {
    switch (action.type) {

      case ActionTypeKeys.GET_LEDGER_TRANSACTIONS_FULFILLED:
        return state
          .set('transactions', action.payload.transactions);

      case ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_FULFILLED:
        return state
          .set('transactions', action.payload.transactions);

      case ActionTypeKeys.SET_LEDGER_TRANSACTION_ID:
        return state
          .set('currentTransactionId', action.payload);

      default: return state;
    }
  };

export default ledgerCustomersReducer;
