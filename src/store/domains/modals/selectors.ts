import { StoreState } from 'store/StoreState';

export const selectModalsStateList = (state: StoreState) => state.modals;

export const selectIsMessageModal = (state: StoreState) => state.modals.isMessageModal;

export const selectPayloadMessageModal = (state: StoreState) => state.modals.payloadMessageModal;

export const selectPayloadConfirmationModal = (state: StoreState) =>
  state.modals.payloadConfirmationModal;

export const selectIsEditModalOpened = (state: StoreState) => state.modals.isEditModalOpened;
