export interface ModalsData {
  name: string;
  payload?: object;
}

export interface PayloadMessageModal {
  title: string;
  message?: string;
  details?: string;
  statusCode?: number;
  errorCode?: number;
}

export interface PayloadConfirmationModal {
  confirmationAction: () => void;
  confirmationTitle?: string;
  confirmationText?: string;
}

export interface ModalsState {
  isMessageModal: boolean;
  payloadMessageModal: PayloadMessageModal;
  payloadConfirmationModal: PayloadConfirmationModal;
}
