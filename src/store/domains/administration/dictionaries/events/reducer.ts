import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryEventsActionTypes } from './actionTypes';
import { DictionaryEventsState } from './types';

export const dictionaryEventsInitialState: ImmutableObject<DictionaryEventsState> = Immutable({
  events: Immutable([]),
});

const dictionaryEventsReducer =
  (state = dictionaryEventsInitialState, action: DictionaryEventsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_DICTIONARY_EVENTS_FULFILLED:
        return state.set('events', action.payload.events);

      default: return state;
    }
  };

export default dictionaryEventsReducer;
