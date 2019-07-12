import { StoreState } from 'store/StoreState';

export const selectSessionId = (state: StoreState) => state.auth.sessionId;

export const selectUserName = (state: StoreState) => state.auth.username;

export const selectIsRememberedMe = (state: StoreState) => state.auth.isRememberedMe;
