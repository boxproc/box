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
  isAddAdminSystemPropertyModal: boolean;
  fieldsMessageModal?: FieldsMessageModal;
}
