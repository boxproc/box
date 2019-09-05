import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, LedgerCustomersActionTypes } from './actionTypes';
import { LedgerCustomersState } from './types';

export const ledgerCustomersInitialState: ImmutableObject<LedgerCustomersState> = Immutable({
  customers: Immutable([]),
  currentCustomerId: null,
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
        return state
          .set('customers', action.payload.customers);

      case ActionTypeKeys.GET_LEDGER_CUSTOMER_ID:
        return state
          .set('currentCustomerId', action.payload);

      default: return state;
    }
  };

export default ledgerCustomersReducer;
