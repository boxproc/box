import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerStatementsActionTypes } from './actionTypes';
import { LedgerStatementsState } from './types';

export const ledgerStatementsInitialState: ImmutableObject<LedgerStatementsState> = Immutable({
  statements: Immutable([]),
  transactions: Immutable([]),
  accountStatements: Immutable([]),
  statementAprs: Immutable([]),
});

const ledgerStatementsReducer =
  (state = ledgerStatementsInitialState, action: LedgerStatementsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_LEDGER_STATEMENTS_FULFILLED:
        return state.set('statements', action.payload.statements);

      case ActionTypeKeys.FILTER_LEDGER_STATEMENTS_BY_ID_FULFILLED:
        return state.set('statements', action.payload.statements);

      case ActionTypeKeys.GET_LEDGER_STATEMENT_TRANSACTIONS_FULFILLED:
        return state.set('transactions', action.payload.transactions);

      case ActionTypeKeys.GET_LEDGER_ACCOUNT_STATEMENTS_FULFILLED:
        return state.set('accountStatements', action.payload.statements);

      case ActionTypeKeys.GET_LEDGER_STATEMENT_APRS_FULFILLED:
        return state.set('statementAprs', action.payload.statement_aprs);

      case ActionTypeKeys.RESET_STATEMENTS:
        return state = ledgerStatementsInitialState;

      default: return state;
    }
  };

export default ledgerStatementsReducer;
