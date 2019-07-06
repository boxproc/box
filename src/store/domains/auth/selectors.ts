import { StoreState } from 'store/StoreState';

export const selectIsLoggedIn = (state: StoreState) => state.auth.isLoggedIn;

export const selectIsRememberedMe = (state: StoreState) => state.auth.isRememberedMe;

export const selectSessionId = (state: StoreState) => state.auth.sessionId;
