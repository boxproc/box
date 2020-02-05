import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryRepaymentTypesActionTypes } from './actionTypes';
import { DictionaryRepaymentTypesState } from './types';

export const dictionaryRepaymentTypesInitialState:
  ImmutableObject<DictionaryRepaymentTypesState> = Immutable({
    repaymentTypes: Immutable([]),
  });

const dictionaryRepaymentTypesReducer = (
  state = dictionaryRepaymentTypesInitialState,
  action: DictionaryRepaymentTypesActionTypes
) => {
  switch (action.type) {
    case ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES_FULFILLED:
      return state.set('repaymentTypes', action.payload.repayment_types);

    default: return state;
  }
};

export default dictionaryRepaymentTypesReducer;
