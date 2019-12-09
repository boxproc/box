import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerLimitAdjustmentTransactionActionTypes } from './actionTypes';
import { LedgerLimitAdjustmentState } from './types';

export const ledgerLimitAdjustmentTransactionInitialState:
  ImmutableObject<LedgerLimitAdjustmentState> = Immutable({
    transactionResult: Immutable([]),
  });

const ledgerLimitAdjustmentTransactionReducer =
  (state = ledgerLimitAdjustmentTransactionInitialState, action:
    LedgerLimitAdjustmentTransactionActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.MAKE_LEDGER_LIMIT_ADJUSTMENT_TRANSACTION_FULFILLED:
        return state.set('transactionResult', action.payload.transaction_result);

      default: return state;
    }
  };

export default ledgerLimitAdjustmentTransactionReducer;
