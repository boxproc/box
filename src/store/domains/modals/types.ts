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
  confirmationTitle?: string;
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

  isAddAdminUserModal: boolean;
  isEditAdminUserModal: boolean;

  isAddAdminCycleEditorModal: boolean;
  isEditCycleEditorRecordsModal: boolean;

  isAddAdminSchedulerModal: boolean;
  isEditAdminSchedulerModal: boolean;
  isGenerateCronExpressionModal: boolean;

  isAddAdminUsersGroupModal: boolean;
  isEditAdminUsersGroupModal: boolean;

  isAddAdminInstitutionModal: boolean;
  isEditAdminInstitutionModal: boolean;
}
