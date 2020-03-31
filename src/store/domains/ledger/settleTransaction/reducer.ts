import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TSettleTransactionAction } from './actionTypes';
import { ISettleTransactionState } from './types';

export const settleTransactionInitialState:
  ImmutableObject<ISettleTransactionState> = Immutable({
    transaction: Immutable([]),
  });

const settleTransactionReducer =
  (state = settleTransactionInitialState, action: TSettleTransactionAction) => {
    switch (action.type) {
      case ActionTypeKeys.RETRIEVE_TRANSACTION_FULFILLED:
        return state.set('transaction', action.payload.transaction);

      case ActionTypeKeys.SETTLE_TRANSACTION_FULFILLED:
        return state = settleTransactionInitialState;

      case ActionTypeKeys.RESET_RETRIEVED_TRANSACTION:
        return state = settleTransactionInitialState;

      default: return state;
    }
  };

export default settleTransactionReducer;
