import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ModalActionTypes } from './actionTypes';
import { ModalsState } from './types';

export const modalsInitialState: ImmutableObject<ModalsState> = Immutable({
  isMessageModal: false,
  payloadMessageModal: null,
  payloadConfirmationModal: null,
  isEditModalOpened: false,
});

const modalsReducer = (state = modalsInitialState, action: ModalActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.OPEN_MODAL:
      return state
        .set(`is${action.payload.name}`, true)
        .set(`payload${action.payload.name}`, action.payload.payload);

    case ActionTypeKeys.CLOSE_MODAL:
      return state
        .set(`is${action.payload}`, false)
        .set(`payload${action.payload}`, null);

    case ActionTypeKeys.SET_IS_EDIT_MODAL_OPENED:
      return state.set('isEditModalOpened', action.payload);

    case ActionTypeKeys.CLOSE_ALL_MODALS:
      return state = modalsInitialState;

    default: return state;
  }
};

export default modalsReducer;
