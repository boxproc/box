import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerCustomersActionTypes } from './actionTypes';
import { LedgerCustomersState } from './types';

export const ledgerCustomersInitialState: ImmutableObject<LedgerCustomersState> = Immutable({
  customers: Immutable([]),
  repaymentDebitCards: Immutable([]),
  repaymentDirectDebits: Immutable([]),
});

const ledgerCustomersReducer =
  (state = ledgerCustomersInitialState, action: LedgerCustomersActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.DELETE_LEDGER_CUSTOMER_FULFILLED:
        return state
          .set(
            'customers',
            state.customers.filter(el => el.id !== action.meta.id)
          );

      case ActionTypeKeys.FILTER_LEDGER_CUSTOMERS_FULFILLED:
        return state.set('customers', action.payload.customers);

      case ActionTypeKeys.FILTER_LEDGER_CUSTOMERS_BY_ID_FULFILLED:
        return state.set('customers', action.payload.customers);

      case ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS_FULFILLED:
        return state.set('repaymentDebitCards', action.payload.repayment_debit_cards);

      case ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS_FULFILLED:
        return state.set('repaymentDirectDebits', action.payload.repayment_debit_cards);

      case ActionTypeKeys.RESET_CUSTOMERS:
        return state = ledgerCustomersInitialState;

      default: return state;
    }
  };

export default ledgerCustomersReducer;
