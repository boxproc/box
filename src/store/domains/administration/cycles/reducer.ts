import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, AdminCycleEditorActionTypes } from './actionTypes';
import { AdminCyclesEditorState } from './types';

export const adminCyclesEditorInitialState:
  seamlessImmutable.ImmutableObject<AdminCyclesEditorState> = Immutable({
    cycle_editor: Immutable([]),
  });

const adminCyclesEditorReducer =
  (state = adminCyclesEditorInitialState, action: AdminCycleEditorActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_CYCLE_EDITOR_FULFILLED:
        console.log('-', action.payload);
        return state
          .set('cycle_editor', action.payload.cycle_editor);
      case ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR_FULFILLED:
        return state
          .set('cycle_editor', [
            action.meta,
             ...Object.values({
              ...state.cycle_editor,
            }),
          ]);
     default:
        return state;
    }
  };

export default adminCyclesEditorReducer;
