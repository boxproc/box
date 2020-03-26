import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TStatementsActionTypes } from './actionTypes';
import { IStatementsState } from './types';

export const statementsInitialState: ImmutableObject<IStatementsState> = Immutable({
  accountStatements: Immutable([]),
  pendingTransactions: Immutable([]),
  statementAprs: Immutable([]),
  statements: Immutable([]),
  transactions: Immutable([]),
});

const statementsReducer = (state = statementsInitialState, action: TStatementsActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_STATEMENTS_FULFILLED:
      return state.set('statements', action.payload.statements);

    case ActionTypeKeys.FILTER_STATEMENTS_BY_ID_FULFILLED:
      return state.set('statements', action.payload.statements);

    case ActionTypeKeys.GET_STATEMENT_TRANSACTIONS_FULFILLED:
      return state
        .set('pendingTransactions', action.payload.pending_transactions)
        .set('transactions', action.payload.transactions);

    case ActionTypeKeys.GET_ACCOUNT_STATEMENTS_FULFILLED:
      return state.set('accountStatements', action.payload.statements);

    case ActionTypeKeys.GET_STATEMENT_APRS_FULFILLED:
      return state.set('statementAprs', action.payload.statement_aprs);

    case ActionTypeKeys.RESET_STATEMENTS:
      return state = statementsInitialState;

    default: return state;
  }
};

export default statementsReducer;
