import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, InstitutionsActionTypes } from './actionTypes';

import { InstitutionsState } from './types';

export const institutionsInitialState: ImmutableObject<InstitutionsState> = Immutable({
  institutions: Immutable([]),
});

const institutionsReducer = (state = institutionsInitialState, action: InstitutionsActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.GET_INSTITUTIONS_FULFILLED:
      return state
        .set('institutions', action.payload.institutions);

    default: return state;
  }
};

export default institutionsReducer;
