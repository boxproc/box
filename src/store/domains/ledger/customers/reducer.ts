import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TCustomersAction } from './actionTypes';
import { ICustomersState } from './types';

export const customersInitialState: ImmutableObject<ICustomersState> = Immutable({
  customers: Immutable([]),
  repaymentDebitCards: Immutable([]),
  directDebitMandates: Immutable([]),
  currencyLimit: null,
});

const customersReducer = (state = customersInitialState, action: TCustomersAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_CUSTOMERS_FULFILLED:
      return state.set('customers', action.payload.customers);

    case ActionTypeKeys.FILTER_CUSTOMERS_BY_ID_FULFILLED:
      return state.set('customers', action.payload.customers);

    case ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS_FULFILLED:
      return state.set('repaymentDebitCards', action.payload.repayment_debit_cards);

    case ActionTypeKeys.GET_DIRECT_DEBIT_MANDATES_FULFILLED:
      return state.set('directDebitMandates', action.payload.direct_debit_mandates);

    case ActionTypeKeys.GET_CURRENCY_LIMIT_FULFILLED:
      return state.set('currencyLimit', action.payload.currency_limit[0]);

    case ActionTypeKeys.RESET_CUSTOMERS:
      return state = customersInitialState;

    default: return state;
  }
};

export default customersReducer;
