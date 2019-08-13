export interface ModalsData {
  name: string;
  payload?: object;
}

export interface PayloadMessageModal {
  title: string;
  message?: string;
  details?: string;
}

export interface PayloadConfirmationModal {
  confirmationAction: () => void;
  confirmationText?: string;
}

export interface ModalsState {
  isMessageModal: boolean;
  payloadMessageModal: PayloadMessageModal;

  isConfirmationModal: boolean;
  payloadConfirmationModal: PayloadConfirmationModal;

  isAddProductModal: boolean;
  isEditProductModal: boolean;

  isAddLedgerCustomerModal: boolean;
  isEditLedgerCustomerModal: boolean;
  isEditLedgerAccountModal: boolean;
  isAddLedgerAccountModal: boolean;
  isLedgerTransactionModal: boolean;

  isAddAdminSystemPropertyModal: boolean;

  isAddAdminSchedulerModal: boolean;
  isEditAdminSchedulerModal: boolean;
  payloadEditAdminSchedulerModal: any;

  isAddAdminCycleEditorModal: boolean;
  isEditCycleEditorRecordsModal: boolean;
  payloadEditCycleEditorRecordsModal: any;

  isAddAdminUserModal: boolean;
  isEditAdminUserModal: boolean;
  payloadEditAdminUserModal: any;

  isAddAdminUsersGroupModal: boolean;
  isEditAdminUsersGroupModal: boolean;
  payloadEditAdminUsersGroupModal: any;
}
