import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryCurrenciesActionTypes } from './actionTypes';
import { DictionaryCurrenciesState } from './types';

export const dictionaryCurrenciesInitialState:
  ImmutableObject<DictionaryCurrenciesState> = Immutable({
  currencies: Immutable([]),
});

const dictionaryCurrenciesReducer =
  (state = dictionaryCurrenciesInitialState, action: DictionaryCurrenciesActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_DICTIONARY_CURRENCIES_FULFILLED:
        return state.set('currencies', action.payload.currencies);

      default: return state;
    }
  };

export default dictionaryCurrenciesReducer;
