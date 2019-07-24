export interface PayloadMessageModal {
  title: string;
  message?: string;
  details?: string;
}

export interface ModalsData {
  name: string;
  payload?: any;
}

export interface ModalsState {
  isMessageModal: boolean;
  payloadMessageModal?: PayloadMessageModal;

  isAddAdminSystemPropertyModal: boolean;

  isAddProductModal: boolean;
  isEditProductModal: boolean;
  payloadEditProductModal?: any;

  isAddAdminSchedulerModal: boolean;
  isEditAdminSchedulerModal: boolean;
  payloadEditAdminSchedulerModal?: any;

  isAddAdminCycleEditorModal: boolean;
  isEditCycleEditorRecordsModal: boolean;
  payloadEditCycleEditorRecordsModal?: any;
}
