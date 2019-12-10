import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerLimitAdjustmentActionTypes } from './actionTypes';
import { LedgerLimitAdjustmentState } from './types';

export const ledgerLimitAdjustmentInitialState:
  ImmutableObject<LedgerLimitAdjustmentState> = Immutable({
    transactionResult: Immutable([]),
  });

const ledgerLimitAdjustmentReducer =
  (state = ledgerLimitAdjustmentInitialState, action: LedgerLimitAdjustmentActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.LEDGER_LIMIT_ADJUSTMENT_FULFILLED:
        return state.set('transactionResult', action.payload.transaction_result);

      default: return state;
    }
  };

export default ledgerLimitAdjustmentReducer;
