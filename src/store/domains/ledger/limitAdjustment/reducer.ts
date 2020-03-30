import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TLimitAdjustmentActionTypes } from './actionTypes';
import { ILimitAdjustmentState } from './types';

export const limitAdjustmentInitialState:
  ImmutableObject<ILimitAdjustmentState> = Immutable({
    transactionResult: Immutable([]),
  });

const limitAdjustmentReducer =
  (state = limitAdjustmentInitialState, action: TLimitAdjustmentActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.LIMIT_ADJUSTMENT_FULFILLED:
        return state.set('transactionResult', action.payload.transaction_result);

      default: return state;
    }
  };

export default limitAdjustmentReducer;
