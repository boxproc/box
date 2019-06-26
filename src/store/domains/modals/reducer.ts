import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ModalActionTypes } from './actionTypes';
import { ModalsState } from './types';

export const modalsInitialState: ImmutableObject<ModalsState> = Immutable({
  isMessageModal: false,
  messageModalFields: null,
});

const modalsReducer = (state = modalsInitialState, action: ModalActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.OPEN_MODAL:
      console.log(action.payload);
      return state
        .set(`is${action.payload.name}`, true)
        .set('messageModalFields', action.payload.messageModalFields);

    case ActionTypeKeys.CLOSE_MODAL:
      return state
        .set(`is${action.payload}`, false);

    default: return state;
  }
};

export default modalsReducer;
