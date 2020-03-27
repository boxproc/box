import { StoreState } from 'store';

export const modalsStateListSelector = (state: StoreState) => state.modals;

export const isMessageModalSelector = (state: StoreState) => state.modals.isMessageModal;

export const payloadMessageModalSelector = (state: StoreState) => state.modals.payloadMessageModal;

export const payloadConfirmationModalSelector = (state: StoreState) =>
  state.modals.payloadConfirmationModal;

export const payloadLogModalSelector = (state: StoreState) => state.modals.payloadLogModal;

export const payloadManualTrModalSelector = (state: StoreState) =>
  state.modals.payloadManualTransactionModal;

export const manualTrModalIsLimitAdjSelector = (state: StoreState) =>
  state.modals.payloadManualTransactionModal.isLimitAdjustmentMode;

export const payloadTransactionModalSelector = (state: StoreState) =>
  state.modals.payloadTransactionModal;

export const payloadSettleTrModalSelector = (state: StoreState) =>
  state.modals.payloadSettleTransactionModal;
