import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TInstitutionsAction } from './actionTypes';
import { IInstitutionsState } from './types';

export const institutionsInitialState: ImmutableObject<IInstitutionsState> = Immutable({
  institutions: Immutable([]),
});

const institutionsReducer = (state = institutionsInitialState, action: TInstitutionsAction) => {
  switch (action.type) {
    case ActionTypeKeys.GET_INSTITUTIONS_FULFILLED:
      return state.set('institutions', action.payload.institutions);

    case ActionTypeKeys.DELETE_INSTITUTION_FULFILLED:
      return state.set('institutions', state.institutions.filter(el => el.id !== action.meta.id));

    case ActionTypeKeys.RESET_INSTITUTIONS:
      return state = institutionsInitialState;

    default: return state;
  }
};

export default institutionsReducer;
