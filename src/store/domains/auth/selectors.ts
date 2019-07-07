import { StoreState } from 'store/StoreState';

export const selectIsLoggedIn = (state: StoreState) => state.auth.isLoggedIn;

export const selectIsRememberedMe = (state: StoreState) => state.auth.isRememberedMe;

export const selectSessionId = (state: StoreState) => state.auth.sessionId;

export const selectUsername = (state: StoreState) => state.auth.username;
