import { createSelector } from 'reselect';

import { statusConst, yesNoConst } from 'consts';

import { StoreState } from 'store';
import { createLoadingSelector } from '../loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareUserDataToRender } from './utils';

export const defaultLoginDataSelector = (state: StoreState) => state.login.loginData;

export const loginDataSelector = createSelector(
  defaultLoginDataSelector,
  data => prepareUserDataToRender(data)
);

export const authStatusSelector = (state: StoreState) =>
  state.login.loginData && state.login.loginData.status;

export const authRequires2faFlagSelector = (state: StoreState) =>
  state.login.loginData.requires_2fa_flag;

export const is2faAuthPendingSelector = createSelector(
  authStatusSelector,
  authRequires2faFlagSelector,
  (status, requiresFlag) => status === statusConst.ACTIVE && requiresFlag === yesNoConst.YES
);

export const userCurrentRegisterStepSelector = (state: StoreState) =>
  state.login.currentRegisterStep;

export const defaultAuthCodeSelector = (state: StoreState) =>
  state.login.data2fa && state.login.data2fa.secret_key;

export const userAuthCodeSelector = createSelector(
  defaultAuthCodeSelector,
  code => code && code.match(/.{1,4}/g).join(' ')
);

export const userDataUrlSelector = (state: StoreState) =>
  state.login.data2fa && state.login.data2fa.data_url;

/**
 * User institutions selectors
 */

export const defaultUserInstitutionsSelector = (state: StoreState) =>
  state.login.institutions;

export const userInstitutionsSelector = createSelector(
  defaultUserInstitutionsSelector,
  institutions => institutions && institutions.map(institution => {
    return {
      id: institution.id,
      institutionName: institution.institution_name,
      masterInstitutionFlag: institution.master_institution_flag === yesNoConst.YES,
    };
  })
);

export const userInstitutionsOptionsSelector = createSelector(
  defaultUserInstitutionsSelector,
  data => data && data.asMutable().map(el => {
    return {
      value: el.id,
      label: el.institution_name,
    };
  })
);

export const isUserInstitutionsLoadedSelector = createSelector(
  defaultUserInstitutionsSelector,
  data => data && data.length > 0
);

/**
 * Loading login selectors
 */

export const isLoggingInSelector = createLoadingSelector([
  ActionTypeKeys.USER_LOGIN,
]);

export const isEnteringAuthKeySelector = createLoadingSelector([
  ActionTypeKeys.USER_ENTER_AUTH_KEY,
]);

export const isChangingPasswordSelector = createLoadingSelector([
  ActionTypeKeys.CHANGE_PASSWORD,
]);

export const isChangingProfileSelector = createLoadingSelector([
  ActionTypeKeys.CHANGE_PROFILE,
]);

export const isGettingAuthKeySelector = createLoadingSelector([
  ActionTypeKeys.USER_GET_AUTH_KEY,
]);
