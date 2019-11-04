import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, CycleEditorActionTypes } from './actionTypes';
import { CyclesEditorState } from './types';

export const cyclesEditorInitialState:
  seamlessImmutable.ImmutableObject<CyclesEditorState> = Immutable({
    cycleEditor: Immutable([]),
    cyclesDescriptions: Immutable([]),
  });

const cyclesEditorReducer =
  (state = cyclesEditorInitialState, action: CycleEditorActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_CYCLES_EDITOR_FULFILLED:
        return state
          .set('cycleEditor', action.payload.cycle_editor);

      case ActionTypeKeys.GET_STATEMENTS_DESCRIPTIONS_FULFILLED:
        return state
          .set('cyclesDescriptions', action.payload.statement_cycles_descriptions);

      case ActionTypeKeys.RESET_STATEMENTS_DESCRIPTIONS:
        return state
          .set('cyclesDescriptions', cyclesEditorInitialState.cyclesDescriptions);

      case ActionTypeKeys.RESET_CYCLES:
        return state = cyclesEditorInitialState;

      default:
        return state;
    }
  };

export default cyclesEditorReducer;
