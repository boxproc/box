export interface IModalsData {
  name: string;
  payload?: object;
}

export interface IPayloadMessageModal {
  title: string;
  message?: string;
  details?: string;
  statusCode?: string;
  errorCode?: number;
}

export interface IPayloadConfirmationModal {
  confirmationAction: () => void;
  confirmationTitle?: string;
  confirmationText?: string;
}

export interface IPayloadLogModal {
  title?: string;
  logData: string;
  logLocation?: string;
}

export interface IPayloadManualTransactionModal {
  accountId?: number;
  currencyCode?: string;
  balanceLimit: string;
  balanceLimitShared: string;
  isLimitAdjustmentMode?: boolean;
}

export interface IPayloadTransactionModal {
  activeTab?: number;
}

export interface IPayloadSettleTransactionModal {
  transactionId?: number;
}

export interface IModalsState {
  isMessageModal: boolean;
  payloadMessageModal: IPayloadMessageModal;
  payloadConfirmationModal: IPayloadConfirmationModal;
  payloadLogModal: IPayloadLogModal;
  payloadManualTransactionModal: IPayloadManualTransactionModal;
  payloadTransactionModal: IPayloadTransactionModal;
  payloadSettleTransactionModal: IPayloadSettleTransactionModal;
}
