import { createSelector } from 'reselect';

import { statusTypesConst, yesNoTypesConst } from 'consts';

import { StoreState } from 'store/StoreState';
import { prepareUserDataToRender } from './utils';

export const selectDefaultLoginData = (state: StoreState) => state.auth.loginData;

export const selectLoginData = createSelector(
  selectDefaultLoginData,
  data => prepareUserDataToRender(data)
);

export const selectAuthStatus = (state: StoreState) =>
  state.auth.loginData && state.auth.loginData.status;

export const selectAuthRequires2faFlag = (state: StoreState) =>
  state.auth.loginData.requires_2fa_flag;

export const selectIs2faAuthenticationPending = createSelector(
  selectAuthStatus,
  selectAuthRequires2faFlag,
  (status, requiresFlag) =>
    status === statusTypesConst.ACTIVE && requiresFlag === yesNoTypesConst.YES
);

export const selectUserCurrentRegisterStep = (state: StoreState) => state.auth.currentRegisterStep;

export const selectDefaultUserCode = (state: StoreState) =>
state.auth.data2fa && state.auth.data2fa.secret_key;

export const selectUserCode = createSelector(
  selectDefaultUserCode,
  code => code && code.match(/.{1,4}/g).join(' ')
);

export const selectUserDataUrl = (state: StoreState) =>
state.auth.data2fa && state.auth.data2fa.data_url;
