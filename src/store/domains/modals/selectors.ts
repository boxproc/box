import { StoreState } from 'store/StoreState';

export const selectModalsStateList = (state: StoreState) => state.modals;

export const selectIsMessageModal = (state: StoreState) => state.modals.isMessageModal;

export const selectIsEditModalOpened = (state: StoreState) => state.modals.isEditModalOpened;

export const selectPayloadMessageModal = (state: StoreState) => state.modals.payloadMessageModal;

export const selectPayloadConfirmationModal = (state: StoreState) =>
  state.modals.payloadConfirmationModal;

export const selectPayloadLogModal = (state: StoreState) => state.modals.payloadLogModal;

export const selectPayloadLedgerManualTransactionModal = (state: StoreState) =>
  state.modals.payloadLedgerManualTransactionModal;

export const selectLedgerManualTransactionModalIsLimit = (state: StoreState) =>
  state.modals.payloadLedgerManualTransactionModal.isLimitAdjustmentMode;

export const selectPayloadLedgerTransactionModal = (state: StoreState) =>
  state.modals.payloadLedgerTransactionModal;

export const selectPayloadSettleTransactionModal = (state: StoreState) =>
  state.modals.payloadSettleTransactionModal;
