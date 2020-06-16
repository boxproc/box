import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TTransactionsAction } from './actionTypes';
import { ITransactionsState } from './types';

export const transactionsInitialState: ImmutableObject<ITransactionsState> = Immutable({
  transactions: Immutable([]),
  settledTransaction: Immutable([]),
  directDebitPayment: Immutable([]),
});

const transactionsReducer = (state = transactionsInitialState, action: TTransactionsAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_TRANSACTIONS_FULFILLED:
      return state.set('transactions', action.payload.transactions);

    case ActionTypeKeys.FILTER_TRANSACTIONS_BY_ID_FULFILLED:
      return state.set('transactions', action.payload.transactions);

    case ActionTypeKeys.GET_DIRECT_DEBIT_PAYMENT_FULFILLED:
      return state.set('directDebitPayment', action.payload.payment);

    case ActionTypeKeys.RETRIEVE_TRANSACTION_FULFILLED:
      return state.set('settledTransaction', action.payload.transaction);

    case ActionTypeKeys.SETTLE_TRANSACTION_FULFILLED:
      const { transaction_id, ...settledTr } = action.payload.transaction_result[0];
      const settledTrInd = state.transactions.findIndex(el => el.id === transaction_id);
      const transactions = state.transactions.asMutable();

      transactions[settledTrInd] = {
        ...transactions[settledTrInd],
        ...settledTr,
      };

      return state
        .set('transactions', transactions)
        .set('settledTransaction', Immutable([]));

    case ActionTypeKeys.RESET_RETRIEVED_TRANSACTION:
      return state.set('settledTransaction', Immutable([]));

    case ActionTypeKeys.RESET_TRANSACTIONS:
      return state = transactionsInitialState;

    default: return state;
  }
};

export default transactionsReducer;
