import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TManualTransactionActionTypes } from './actionTypes';
import { IManualTransactionState } from './types';

export const manualTransactionInitialState:
  ImmutableObject<IManualTransactionState> = Immutable({
    transactionResult: Immutable([]),
  });

const manualTransactionReducer =
  (state = manualTransactionInitialState, action: TManualTransactionActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.MAKE_TRANSACTION_FULFILLED:
        return state.set('transactionResult', action.payload.transaction_result);

      default: return state;
    }
  };

export default manualTransactionReducer;
