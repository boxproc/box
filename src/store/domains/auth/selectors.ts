import { StoreState } from 'store/StoreState';

export const selectSessionId = (state: StoreState) => state.auth.sessionId;

export const selectUserName = (state: StoreState) => state.auth.username;

export const selectIsRememberedMe = (state: StoreState) => state.auth.isRememberedMe;

export const selectFirstName = (state: StoreState) => state.auth.firstName;

export const selectLastName = (state: StoreState) => state.auth.lastName;

export const selectLastActivity = (state: StoreState) => state.auth.lastActivity;
