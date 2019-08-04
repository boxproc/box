import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminCycleEditorActionTypes } from './actionTypes';
import { AdminCyclesEditorState } from './types';

export const adminCyclesEditorInitialState:
  seamlessImmutable.ImmutableObject<AdminCyclesEditorState> = Immutable({
    cycleEditor: Immutable([]),
  });

const adminCyclesEditorReducer =
  (state = adminCyclesEditorInitialState, action: AdminCycleEditorActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_CYCLE_EDITOR_FULFILLED:
        return state
          .set('cycleEditor', action.payload.cycle_editor);

      case ActionTypeKeys.DELETE_ADMIN_CYCLE_EDITOR_FULFILLED:
        return state
          .set(
            'cycleEditor',
            state.cycleEditor.filter(el => el.id !== action.meta)
          );

      default:
        return state;
    }
  };

export default adminCyclesEditorReducer;
