import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerStatementsActionTypes } from './actionTypes';
import { LedgerStatementsState } from './types';

export const ledgerStatementsInitialState: ImmutableObject<LedgerStatementsState> = Immutable({
  statements: Immutable([]),
});

const ledgerStatementsReducer =
  (state = ledgerStatementsInitialState, action: LedgerStatementsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_LEDGER_STATEMENTS_FULFILLED:
        return state
          .set('statements', action.payload.statements);

      case ActionTypeKeys.RESET_STATEMENTS:
        return state = ledgerStatementsInitialState;

      default: return state;
    }
  };

export default ledgerStatementsReducer;
