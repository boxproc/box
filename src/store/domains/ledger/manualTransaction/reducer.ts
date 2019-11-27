import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerManualTransactionActionTypes } from './actionTypes';
import { LedgerManualTransactionState } from './types';

export const ledgerManualTransactionInitialState:
  ImmutableObject<LedgerManualTransactionState> = Immutable({
    transactionResult: Immutable([]),
  });

const ledgerManualTransactionReducer =
  (state = ledgerManualTransactionInitialState, action: LedgerManualTransactionActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.MAKE_LEDGER_TRANSACTION_FULFILLED:
        return state.set('transactionResult', action.payload.transaction_result);

      default: return state;
    }
  };

export default ledgerManualTransactionReducer;
