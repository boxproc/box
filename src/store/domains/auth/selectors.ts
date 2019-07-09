import { StoreState } from 'store/StoreState';

export const selectIsRememberedMe = (state: StoreState) => state.auth.isRememberedMe;

export const selectUsername = (state: StoreState) => state.auth.username;
