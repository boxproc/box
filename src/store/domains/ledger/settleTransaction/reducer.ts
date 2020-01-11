import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerSettleTransactionActionTypes } from './actionTypes';
import { LedgerSettleTransactionState } from './types';

export const ledgerSettleTransactionInitialState:
  ImmutableObject<LedgerSettleTransactionState> = Immutable({
    transaction: null,
  });

const ledgerSettleTransactionReducer =
  (state = ledgerSettleTransactionInitialState, action: LedgerSettleTransactionActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.RETRIEVE_TRANSACTION_FULFILLED:
        return state.set('transaction', action.payload.transaction);

      case ActionTypeKeys.SETTLE_TRANSACTION_FULFILLED:
        return state = ledgerSettleTransactionInitialState;

      case ActionTypeKeys.RESET_RETRIEVED_TRANSACTION:
        return state = ledgerSettleTransactionInitialState;

      default: return state;
    }
  };

export default ledgerSettleTransactionReducer;
