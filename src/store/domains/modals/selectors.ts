import { IStoreState } from 'store';

export const modalsStateListSelector = (state: IStoreState) => state.modals;

export const isMessageModalSelector = (state: IStoreState) => state.modals.isMessageModal;

export const payloadMessageModalSelector = (state: IStoreState) => state.modals.payloadMessageModal;

export const payloadConfirmationModalSelector = (state: IStoreState) =>
  state.modals.payloadConfirmationModal;

export const payloadLogModalSelector = (state: IStoreState) => state.modals.payloadLogModal;

export const payloadManualTrModalSelector = (state: IStoreState) =>
  state.modals.payloadManualTransactionModal;

export const manualTrModalIsLimitAdjSelector = (state: IStoreState) =>
  state.modals.payloadManualTransactionModal.isLimitAdjustmentMode;

export const payloadTransactionModalSelector = (state: IStoreState) =>
  state.modals.payloadTransactionModal;

export const payloadSettleTrModalSelector = (state: IStoreState) =>
  state.modals.payloadSettleTransactionModal;

export const payloadDirectDebitMandateModalSelector = (state: IStoreState) =>
  state.modals.payloadDirectDebitMandateModal;
