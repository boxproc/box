import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ModalActionTypes } from './actionTypes';
import { ModalsState } from './types';

export const modalsInitialState: ImmutableObject<ModalsState> = Immutable({
  isMessageModal: false,
  payloadMessageModal: null,

  isAddAdminSystemPropertyModal: false,

  isAddProductModal: false,
  isEditProductModal: false,

  isAddAdminSchedulerModal: false,
  isEditAdminSchedulerModal: false,
  payloadEditAdminSchedulerModal: null,

  isAddAdminUserModal: false,
  isEditAdminUserModal: false,
  payloadEditAdminUserModal: null,

  isAddAdminCycleEditorModal: false,
  isEditCycleEditorRecordsModal: false,
  payloadEditAdminCycleEditorModal: null,

  isNotification: false,
  notificationMessage: null,
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

    case ActionTypeKeys.SHOW_NOTIFICATION:
      return state
        .set('isNotification', true)
        .set('notificationMessage', action.payload);

    case ActionTypeKeys.HIDE_NOTIFICATION:
      return state
        .set('isNotification', false)
        .set('notificationMessage', '');

    default: return state;
  }
};

export default modalsReducer;
