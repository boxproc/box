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

export interface PayloadManualTransactionModal {
  accountId?: number;
  currencyCode?: string;
  balanceLimit: string;
  balanceLimitShared: string;
  isLimitAdjustmentMode?: boolean;
}

export interface PayloadTransactionModal {
  activeTab?: number;
}

export interface PayloadSettleTransactionModal {
  transactionId?: number;
}

export interface ModalsState {
  isMessageModal: boolean;
  payloadMessageModal: PayloadMessageModal;
  payloadConfirmationModal: PayloadConfirmationModal;
  payloadLogModal: PayloadLogModal;
  payloadManualTransactionModal: PayloadManualTransactionModal;
  payloadTransactionModal: PayloadTransactionModal;
  payloadSettleTransactionModal: PayloadSettleTransactionModal;
}
