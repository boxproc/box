import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminCountriesActionTypes } from './actionTypes';
import { AdminCountriesState } from './types';

export const adminCountriesInitialState: ImmutableObject<AdminCountriesState> = Immutable({
  countries: Immutable([]),
});

const adminCountriesReducer =
  (state = adminCountriesInitialState, action: AdminCountriesActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_COUNTRIES_FULFILLED:
        return state
          .set('countries', action.payload.countries);

      default: return state;
    }
  };

export default adminCountriesReducer;
