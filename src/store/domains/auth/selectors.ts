import { createSelector } from 'reselect';

import { yesNoTypes } from 'consts';

import { StoreState } from 'store/StoreState';

export const selectSessionId = (state: StoreState) => state.auth.sessionId;

export const selectUserName = (state: StoreState) => state.auth.username;

export const selectIsRememberedMe = (state: StoreState) => state.auth.isRememberedMe;

export const selectFirstName = (state: StoreState) => state.auth.firstName;

export const selectLastName = (state: StoreState) => state.auth.lastName;

export const selectLastActivity = (state: StoreState) => state.auth.lastActivity;

export const select2faRegistered = (state: StoreState) => state.auth.registered2fa;

export const selectIs2faRegistered = createSelector(
    select2faRegistered,
    registered => registered === yesNoTypes.YES
);
