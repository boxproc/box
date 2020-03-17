import { StoreState } from 'store';

export const selectModalsStateList = (state: StoreState) => state.modals;

export const selectIsMessageModal = (state: StoreState) => state.modals.isMessageModal;

export const selectPayloadMessageModal = (state: StoreState) => state.modals.payloadMessageModal;

export const selectPayloadConfirmationModal = (state: StoreState) =>
  state.modals.payloadConfirmationModal;

export const selectPayloadLogModal = (state: StoreState) => state.modals.payloadLogModal;

export const selectPayloadManualTransactionModal = (state: StoreState) =>
  state.modals.payloadManualTransactionModal;

export const selectManualTransactionModalIsLimit = (state: StoreState) =>
  state.modals.payloadManualTransactionModal.isLimitAdjustmentMode;

export const selectPayloadTransactionModal = (state: StoreState) =>
  state.modals.payloadTransactionModal;

export const selectPayloadSettleTransactionModal = (state: StoreState) =>
  state.modals.payloadSettleTransactionModal;
