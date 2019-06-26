import { StoreState } from 'store/StoreState';

export const selectModalsStateList = (state: StoreState) => state.modals;

export const selectMessageModalFields = (state: StoreState) => state.modals.messageModalFields;
