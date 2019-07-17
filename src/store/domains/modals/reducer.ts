import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ModalActionTypes } from './actionTypes';
import { ModalsState } from './types';

export const modalsInitialState: ImmutableObject<ModalsState> = Immutable({
  isMessageModal: false,
  fieldsMessageModal: null,

  isAddAdminSystemPropertyModal: false,

  isAddProductModal: false,
  isEditProductModal: false,

  isAddSchedulerModal: false,
  isEditSchedulerModal: false,
  fieldsEditSchedulerModal: null,
});

const modalsReducer = (state = modalsInitialState, action: ModalActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.OPEN_MODAL:
      return state
        .set(`is${action.payload.name}`, true)
        .set(`fields${action.payload.name}`, action.payload.fields);

    case ActionTypeKeys.CLOSE_MODAL:
      return state
        .set(`is${action.payload}`, false)
        .set(`fields${action.payload}`, null);

    default: return state;
  }
};

export default modalsReducer;
