import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ConstsActionTypes } from './actionTypes';

import { ConstsState } from './types';

export const constsInitialState: ImmutableObject<ConstsState> = Immutable({
  currencies: Immutable([]),
  countries: Immutable([]),
  institutions: Immutable([]),
});

const constsReducer =
  (state = constsInitialState, action: ConstsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_CURRENCY_CODES_FULFILLED:
        return state
          .set('currencies', action.payload.currencies);

      case ActionTypeKeys.GET_COUNTRY_CODES_FULFILLED:
        return state
          .set('countries', action.payload.countries);

      case ActionTypeKeys.GET_INSTITUTIONS_FULFILLED:
        return state
          .set('institutions', action.payload.institutions);

      default: return state;
    }
  };

export default constsReducer;
