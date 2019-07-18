import { StoreState } from 'store/StoreState';

export const selectModalsStateList = (state: StoreState) => state.modals;

export const selectIsMessageModal = (state: StoreState) => state.modals.isMessageModal;

export const selectFieldsMessageModal = (state: StoreState) => state.modals.fieldsMessageModal;

export const selectProductId = (state: StoreState) => state.modals.fieldsEditProductModal.id;

export const selectSchedulerJobId = (state: StoreState) =>
  state.modals.fieldsEditAdminSchedulerModal.id;
