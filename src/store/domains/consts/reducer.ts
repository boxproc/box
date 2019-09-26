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
      case ActionTypeKeys.GET_INSTITUTIONS_FULFILLED:
        return state
          .set('institutions', action.payload.institutions);

      default: return state;
    }
  };

export default constsReducer;
