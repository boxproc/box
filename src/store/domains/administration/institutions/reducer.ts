import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminInstitutionsActionTypes } from './actionTypes';
import { AdminInstitutionsState } from './types';

export const adminInstitutionsInitialState: ImmutableObject<AdminInstitutionsState> = Immutable({
  institutions: Immutable([]),
  currentInstitutionId: null,
});

const adminInstitutionsReducer =
  (state = adminInstitutionsInitialState, action: AdminInstitutionsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_INSTITUTIONS_FULFILLED:
        return state
          .set('institutions', action.payload.institutions);

      case ActionTypeKeys.DELETE_ADMIN_INSTITUTION_FULFILLED:
        return state
          .set(
            'institutions',
            state.institutions.filter(el => el.id !== action.meta.id)
          );

      case ActionTypeKeys.SET_ADMIN_INSTITUTION_ID:
        return state
          .set('currentInstitutionId', action.payload);

      default: return state;
    }
  };

export default adminInstitutionsReducer;
