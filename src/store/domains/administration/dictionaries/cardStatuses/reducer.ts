import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryCardStatusesActionTypes } from './actionTypes';
import { DictionaryCardStatusesState } from './types';

export const dictionaryCardStatusesInitialState:
  ImmutableObject<DictionaryCardStatusesState> = Immutable({
  cardStatuses: Immutable([]),
});

const dictionaryCardStatusesReducer =
  (state = dictionaryCardStatusesInitialState, action: DictionaryCardStatusesActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES_FULFILLED:
        return state
          .set('cardStatuses', action.payload.card_statuses);

      default: return state;
    }
  };

export default dictionaryCardStatusesReducer;
