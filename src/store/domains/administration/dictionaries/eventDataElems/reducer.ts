import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryEventDataElemsActionTypes } from './actionTypes';
import { DictionaryEventDataElemsState } from './types';

export const dictionaryEventsInitialState:
  ImmutableObject<DictionaryEventDataElemsState> = Immutable({
  eventDataElems: Immutable([]),
});

const dictionaryEventDataElemsReducer =
  (state = dictionaryEventsInitialState, action: DictionaryEventDataElemsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED:
        return state.set('eventDataElems', action.payload.event_data_elements);

      case ActionTypeKeys.RESET_EVENT_DATA_ELEMS:
        return state = dictionaryEventsInitialState;

      default: return state;
    }
  };

export default dictionaryEventDataElemsReducer;
