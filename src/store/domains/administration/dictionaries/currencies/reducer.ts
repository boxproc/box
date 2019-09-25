import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminCurrenciesActionTypes } from './actionTypes';
import { AdminCurrenciesState } from './types';

export const adminCurrenciesInitialState: ImmutableObject<AdminCurrenciesState> = Immutable({
  currencies: Immutable([]),
});

const adminCurrenciesReducer =
  (state = adminCurrenciesInitialState, action: AdminCurrenciesActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_CURRENCIES_FULFILLED:
        return state
          .set('currencies', action.payload.currencies);

      default: return state;
    }
  };

export default adminCurrenciesReducer;
