import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminCycleEditorActionTypes } from './actionTypes';
import { AdminCyclesEditorState } from './types';

export const adminCyclesEditorInitialState:
  seamlessImmutable.ImmutableObject<AdminCyclesEditorState> = Immutable({
    cycleEditor: Immutable([]),
    cyclesDescriptions: Immutable([]),
  });

const adminCyclesEditorReducer =
  (state = adminCyclesEditorInitialState, action: AdminCycleEditorActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_ADMIN_CYCLES_EDITOR_FULFILLED:
        return state
          .set('cycleEditor', action.payload.cycle_editor);

      case ActionTypeKeys.GET_ADMIN_STATEMENTS_DESCRIPTIONS_FULFILLED:
        return state
          .set('cyclesDescriptions', action.payload.statement_cycles_descriptions);

      case ActionTypeKeys.RESET_ADMIN_STATEMENTS_DESCRIPTIONS:
        return state
          .set('cyclesDescriptions', adminCyclesEditorInitialState.cyclesDescriptions);

      case ActionTypeKeys.RESET_CYCLES:
        return state = adminCyclesEditorInitialState;

      default:
        return state;
    }
  };

export default adminCyclesEditorReducer;
