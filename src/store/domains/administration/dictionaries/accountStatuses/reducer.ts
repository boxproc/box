import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryAccountStatusesActionTypes } from './actionTypes';
import { DictionaryAccountStatusesState } from './types';

export const dictionaryAccountStatusesInitialState:
  ImmutableObject<DictionaryAccountStatusesState> = Immutable({
    accountStatuses: Immutable([]),
  });

const dictionaryAccountStatusesReducer = (
  state = dictionaryAccountStatusesInitialState,
  action: DictionaryAccountStatusesActionTypes
) => {
  switch (action.type) {
    case ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES_FULFILLED:
      return state.set('accountStatuses', action.payload.account_statuses);

    default: return state;
  }
};

export default dictionaryAccountStatusesReducer;
