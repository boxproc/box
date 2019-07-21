export interface FieldsMessageModal {
  title: string;
  message?: string;
  details?: string;
}

export interface ModalsData {
  name: string;
  fields?: any;
}

export interface ModalsState {
  isMessageModal: boolean;
  fieldsMessageModal?: FieldsMessageModal;

  isAddAdminSystemPropertyModal: boolean;

  isAddProductModal: boolean;
  isEditProductModal: boolean;
  fieldsEditProductModal?: { id: number };

  isAddAdminSchedulerModal: boolean;
  isEditAdminSchedulerModal: boolean;
  fieldsEditAdminSchedulerModal: { id: string | number };
}
