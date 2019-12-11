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
export interface PayloadLedgerManualTransactionModal {
  accountId?: number;
  currencyCode?: string;
  isLimitAdjustmentMode?: boolean;
}

export interface ModalsState {
  isMessageModal: boolean;
  isEditModalOpened: boolean;
  payloadMessageModal: PayloadMessageModal;
  payloadConfirmationModal: PayloadConfirmationModal;
  payloadLogModal: PayloadLogModal;
  payloadLedgerManualTransactionModal: PayloadLedgerManualTransactionModal;
}
