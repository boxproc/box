import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminCycleEditorActionTypes } from './actionTypes';
import { AdminCyclesEditorState } from './types';

export const adminCyclesEditorInitialState:
  seamlessImmutable.ImmutableObject<AdminCyclesEditorState> = Immutable({
    cycleEditor: Immutable([]),
    currentCycleEditorId: null,
  });

const adminCyclesEditorReducer =
  (state = adminCyclesEditorInitialState, action: AdminCycleEditorActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.DELETE_ADMIN_CYCLE_EDITOR_FULFILLED:
        return state
          .set(
            'cycleEditor',
            state.cycleEditor.filter(el => el.id !== action.meta.id)
          );

      case ActionTypeKeys.FILTER_ADMIN_CYCLES_EDITOR_FULFILLED:
        return state
          .set('cycleEditor', action.payload.cycle_editor);

      case ActionTypeKeys.SET_ADMIN_CYCLE_EDITOR_ID:
        return state
          .set('currentCycleEditorId', action.payload);

      default:
        return state;
    }
  };

export default adminCyclesEditorReducer;
