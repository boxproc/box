import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TCustomersAction } from './actionTypes';
import { ICustomersState, IDirectDebitMandateData } from './types';

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
      return state.set(
        'directDebitMandates',
        action.payload.direct_debit_mandates
          .sort((
            a: IDirectDebitMandateData,
            b: IDirectDebitMandateData
          ) => a.default_flag < b.default_flag ? 1 : -1)
      );

    case ActionTypeKeys.CHANGE_DIRECT_DEBIT_MANDATE_FULFILLED:
      const status = action.payload.status;
      const mandateId = action.meta.id;

      const mandateInd = state.directDebitMandates.findIndex(el => el.id === mandateId);
      const mandates = state.directDebitMandates.asMutable();

      mandates[mandateInd] = {
        ...mandates[mandateInd],
        status,
      };

      return state.set('directDebitMandates', mandates);

    case ActionTypeKeys.RESET_DIRECT_DEBIT_MANDATES:
      return state.set('directDebitMandates', Immutable([]));

    case ActionTypeKeys.GET_CURRENCY_LIMIT_FULFILLED:
      return state.set('currencyLimit', action.payload.currency_limit[0]);

    case ActionTypeKeys.RESET_CUSTOMERS:
      return state = customersInitialState;

    default: return state;
  }
};

export default customersReducer;
