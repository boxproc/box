import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ConstsActionTypes } from './actionTypes';

import { ConstsState } from './types';

export const constsInitialState: ImmutableObject<ConstsState> = Immutable({
  currencyCodes: Immutable([]),
  institutions: Immutable([]),
});

const constsReducer =
  (state = constsInitialState, action: ConstsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_CURRENCY_CODES_FULFILLED:
        return state
          .set('currencyCodes', action.payload.currency_options);

      case ActionTypeKeys.GET_INSTITUTIONS_FULFILLED:
        return state
          .set('institutions', action.payload.institutions);

      default: return state;
    }
  };

export default constsReducer;
