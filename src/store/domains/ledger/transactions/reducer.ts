import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TTransactionsActionTypes } from './actionTypes';
import { ITransactionsState } from './types';

export const transactionsInitialState: ImmutableObject<ITransactionsState> = Immutable({
  transactions: Immutable([]),
});

const transactionsReducer =
  (state = transactionsInitialState, action: TTransactionsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_TRANSACTIONS_FULFILLED:
        return state.set('transactions', action.payload.transactions);

      case ActionTypeKeys.FILTER_TRANSACTIONS_BY_ID_FULFILLED:
        return state.set('transactions', action.payload.transactions);

      case ActionTypeKeys.RESET_TRANSACTIONS:
        return state = transactionsInitialState;

      default: return state;
    }
  };

export default transactionsReducer;
