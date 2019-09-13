import { createSelector } from 'reselect';

import { statusTypes, yesNoTypes } from 'consts';

import { StoreState } from 'store/StoreState';

export const selectSessionId = (state: StoreState) => state.auth.sessionId;

export const selectUserFirstName = (state: StoreState) => state.auth.firstName;

export const selectUserLastName = (state: StoreState) => state.auth.lastName;

export const selectUserName = (state: StoreState) => state.auth.username;

export const selectUserLastActivity = (state: StoreState) => state.auth.lastActivity;

export const selectAuthStatus = (state: StoreState) => state.auth.status;

export const selectAuthRequires2faFlag = (state: StoreState) => state.auth.requires2faFlag;

export const selectIs2faRegistrationPending = createSelector(
  selectAuthStatus,
  status => status === statusTypes.REGISTRATION_PENDING
);

export const selectIs2faAuthenticationPending = createSelector(
  selectAuthStatus,
  selectAuthRequires2faFlag,
  (status, requiresFlag) => status === statusTypes.ACTIVE && requiresFlag === yesNoTypes.YES
);

export const selectUserCurrentRegisterStep = (state: StoreState) => state.auth.currentRegisterStep;

export const selectDefaultUserCode = (state: StoreState) => state.auth.code;

export const selectUserCode = createSelector(
  selectDefaultUserCode,
  code => code && code.match(/.{1,4}/g).join(' ')
);

export const selectUserDataUrl = (state: StoreState) => state.auth.dataUrl;
