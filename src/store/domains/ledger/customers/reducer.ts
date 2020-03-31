import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TCustomersAction } from './actionTypes';
import { ICustomersState } from './types';

export const customersInitialState: ImmutableObject<ICustomersState> = Immutable({
  customers: Immutable([]),
  repaymentDebitCards: Immutable([]),
  repaymentDirectDebits: Immutable([]),
});

const customersReducer = (state = customersInitialState, action: TCustomersAction) => {
  switch (action.type) {
    case ActionTypeKeys.DELETE_CUSTOMER_FULFILLED:
      return state
        .set(
          'customers',
          state.customers.filter(el => el.id !== action.meta.id)
        );

    case ActionTypeKeys.FILTER_CUSTOMERS_FULFILLED:
      return state.set('customers', action.payload.customers);

    case ActionTypeKeys.FILTER_CUSTOMERS_BY_ID_FULFILLED:
      return state.set('customers', action.payload.customers);

    case ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS_FULFILLED:
      return state.set('repaymentDebitCards', action.payload.repayment_debit_cards);

    case ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS_FULFILLED:
      return state.set('repaymentDirectDebits', action.payload.repayment_debit_cards);

    case ActionTypeKeys.RESET_CUSTOMERS:
      return state = customersInitialState;

    default: return state;
  }
};

export default customersReducer;
