import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryCountriesActionTypes } from './actionTypes';
import { DictionaryCountriesState } from './types';

export const dictionaryCountriesInitialState:
  ImmutableObject<DictionaryCountriesState> = Immutable({
  countries: Immutable([]),
});

const dictionaryCountriesReducer =
  (state = dictionaryCountriesInitialState, action: DictionaryCountriesActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_DICTIONARY_COUNTRIES_FULFILLED:
        return state.set('countries', action.payload.countries);

      default: return state;
    }
  };

export default dictionaryCountriesReducer;
