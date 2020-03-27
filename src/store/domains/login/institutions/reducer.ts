import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TInstitutionsActionTypes } from './actionTypes';

import { InstitutionsState } from './types';

export const institutionsInitialState: ImmutableObject<InstitutionsState> = Immutable({
  institutions: Immutable([]),
});

const userInstitutionsReducer =
  (state = institutionsInitialState, action: TInstitutionsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_USER_INSTITUTIONS_FULFILLED:
        return state.set('institutions', action.payload.institutions);

      default: return state;
    }
  };

export default userInstitutionsReducer;
