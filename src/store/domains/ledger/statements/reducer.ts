import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerStatementsActionTypes } from './actionTypes';
import { LedgerStatementsState } from './types';

export const ledgerStatementsInitialState: ImmutableObject<LedgerStatementsState> = Immutable({
  statements: Immutable([]),
  currentStatementId: null,
});

const ledgerStatementsReducer =
  (state = ledgerStatementsInitialState, action: LedgerStatementsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_LEDGER_STATEMENTS_FULFILLED:
        return state
          .set('statements', action.payload.statements);

      case ActionTypeKeys.SET_LEDGER_STATEMENT_ID:
        return state
          .set('currentStatementId', action.payload.id);

      default: return state;
    }
  };

export default ledgerStatementsReducer;
