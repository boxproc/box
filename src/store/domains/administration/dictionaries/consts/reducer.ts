import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryConstsActionTypes } from './actionTypes';
import { DictionaryConstsState } from './types';

export const dictionaryCardStatusesInitialState:
  ImmutableObject<DictionaryConstsState> = Immutable({
    cardStatuses: Immutable([]),
    endpointTypes: Immutable([]),
    interfaceTypes: Immutable([]),
    statementCycleTypes: Immutable([]),
  });

const dictionaryCardStatusesReducer =
  (state = dictionaryCardStatusesInitialState, action: DictionaryConstsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES_FULFILLED:
        return state.set('cardStatuses', action.payload.card_statuses);

      case ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES_FULFILLED:
        return state.set('endpointTypes', action.payload.endpoint_types);

      case ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES_FULFILLED:
        return state.set('interfaceTypes', action.payload.interface_types);

      case ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES_FULFILLED:
        return state.set('statementCycleTypes', action.payload.statement_cycle_types);

      default: return state;
    }
  };

export default dictionaryCardStatusesReducer;
