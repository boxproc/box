import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UtilsActionTypes } from './actionTypes';

import { UtilsState } from './types';

export const utilsInitialState: ImmutableObject<UtilsState> = Immutable({
  activeTableRowIndex: null,
});

const utilsReducer =
  (state = utilsInitialState, action: UtilsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX:
        return state
          .set('activeTableRowIndex', action.payload);

      default: return state;
    }
  };

export default utilsReducer;
