import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ModalActionTypes } from './actionTypes';
import { ModalsState } from './types';

export const modalsInitialState: ImmutableObject<ModalsState> = Immutable({
  isMessageModal: false,
  payloadMessageModal: null,

  isConfirmationModal: false,
  payloadConfirmationModal: null,

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
  payloadEditCycleEditorRecordsModal: null,

  isAddAdminUsersGroupModal: false,
  isEditAdminUsersGroupModal: false,
  payloadEditAdminUsersGroupModal: null,

  isAddLedgerCustomerModal: false,
  isEditLedgerCustomerModal: false,

  isEditLedgerAccountModal: false,

  isLedgerTransactionModal: false,
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

    default: return state;
  }
};

export default modalsReducer;
