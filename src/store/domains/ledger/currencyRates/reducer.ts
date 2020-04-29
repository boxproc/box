import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TCurrencyRatesAction } from './actionTypes';
import { ICurrencyRatesState } from './types';

export const currencyRatesInitialState: ImmutableObject<ICurrencyRatesState> = Immutable({
  currencyRates: Immutable([]),
});

const currencyRatesReducer = (state = currencyRatesInitialState, action: TCurrencyRatesAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_CURRENCY_RATES_FULFILLED:
      return state.set('currencyRates', action.payload.currency_rates);

    case ActionTypeKeys.RESET_CURRENCY_RATES:
      return state = currencyRatesInitialState;

    default: return state;
  }
};

export default currencyRatesReducer;
