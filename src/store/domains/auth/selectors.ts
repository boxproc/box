import { createSelector } from 'reselect';

import { statusTypes } from 'consts';

import { StoreState } from 'store/StoreState';

export const selectUserSessionId = (state: StoreState) => state.auth.sessionId;

export const selectUserName = (state: StoreState) => state.auth.username;

export const selectUserIsRememberedMe = (state: StoreState) => state.auth.isRememberedMe;

export const selectUserFirstName = (state: StoreState) => state.auth.firstName;

export const selectUserLastName = (state: StoreState) => state.auth.lastName;

export const selectUserLastActivity = (state: StoreState) => state.auth.lastActivity;

export const selectAuthStatus = (state: StoreState) => state.auth.status;

export const selectIs2faRegistered = createSelector(
    selectAuthStatus,
    status => status === statusTypes.REGISTRATION_PENDING
);

export const selectUserCurrentRegisterStep = (state: StoreState) => state.auth.currentRegisterStep;

export const selectUserCode = (state: StoreState) => state.auth.code;

export const selectUserDataUrl = (state: StoreState) => state.auth.dataUrl;
