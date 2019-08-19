import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, ModalActionTypes } from './actionTypes';
import { ModalsState } from './types';

export const modalsInitialState: ImmutableObject<ModalsState> = Immutable({
  isMessageModal: false,
  payloadMessageModal: null,

  isConfirmationModal: false,
  payloadConfirmationModal: null,

  isAddProductModal: false,
  isEditProductModal: false,

  isAddLedgerCustomerModal: false,
  isEditLedgerCustomerModal: false,

  isEditLedgerAccountModal: false,
  isAddLedgerAccountModal: false,

  isLedgerTransactionModal: false,

  isAddAdminSystemPropertyModal: false,

  isAddAdminSchedulerModal: false,
  isEditAdminSchedulerModal: false,

  isAddAdminUserModal: false,
  isEditAdminUserModal: false,

  isAddAdminCycleEditorModal: false,
  isEditCycleEditorRecordsModal: false,

  isAddAdminUsersGroupModal: false,
  isEditAdminUsersGroupModal: false,

  isAddAdminInstitution: false,
  isEditAdminInstitution: false,
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
