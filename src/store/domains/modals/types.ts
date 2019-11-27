export interface ModalsData {
  name: string;
  payload?: object;
}

export interface PayloadMessageModal {
  title: string;
  message?: string;
  details?: string;
  statusCode?: string;
  errorCode?: number;
  type?: string;
}

export interface PayloadConfirmationModal {
  confirmationAction: () => void;
  confirmationTitle?: string;
  confirmationText?: string;
}

export interface PayloadLogModal {
  title?: string;
  logData: string;
  logLocation?: string;
}

export interface ModalsState {
  isMessageModal: boolean;
  payloadMessageModal: PayloadMessageModal;
  payloadConfirmationModal: PayloadConfirmationModal;
  payloadLogModal: PayloadLogModal;
  isEditModalOpened: boolean;
}
