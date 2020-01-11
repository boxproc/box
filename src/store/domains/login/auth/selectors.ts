import { createSelector } from 'reselect';

import { statusCodes, yesNoTypesCodes } from 'consts';

import { StoreState } from 'store/StoreState';
import { prepareUserDataToRender } from './utils';

export const selectDefaultLoginData = (state: StoreState) => state.login.auth.loginData;

export const selectLoginData = createSelector(
  selectDefaultLoginData,
  data => prepareUserDataToRender(data)
);

export const selectAuthStatus = (state: StoreState) =>
  state.login.auth.loginData && state.login.auth.loginData.status;

export const selectAuthRequires2faFlag = (state: StoreState) =>
  state.login.auth.loginData.requires_2fa_flag;

export const selectIs2faAuthenticationPending = createSelector(
  selectAuthStatus,
  selectAuthRequires2faFlag,
  (status, requiresFlag) => status === statusCodes.ACTIVE && requiresFlag === yesNoTypesCodes.YES
);

export const selectUserCurrentRegisterStep = (state: StoreState) =>
  state.login.auth.currentRegisterStep;

export const selectDefaultUserCode = (state: StoreState) =>
  state.login.auth.data2fa && state.login.auth.data2fa.secret_key;

export const selectUserCode = createSelector(
  selectDefaultUserCode,
  code => code && code.match(/.{1,4}/g).join(' ')
);

export const selectUserDataUrl = (state: StoreState) =>
  state.login.auth.data2fa && state.login.auth.data2fa.data_url;
