import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryTransactionTypesActionTypes } from './actionTypes';
import { DictionaryTransactionTypesState } from './types';

export const dictionaryTransactionTypesInitialState:
  ImmutableObject<DictionaryTransactionTypesState> = Immutable({
    transactionTypes: Immutable([]),
  });

const dictionaryTransactionTypesReducer = (
  state = dictionaryTransactionTypesInitialState,
  action: DictionaryTransactionTypesActionTypes
) => {
  switch (action.type) {
    case ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES_FULFILLED:
      return state
        .set('transactionTypes', action.payload.transaction_types);

    default: return state;
  }
};

export default dictionaryTransactionTypesReducer;
