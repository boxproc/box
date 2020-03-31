import { statusConst, userStatusWith2faOptions, yesNoConst } from 'consts';
import { IUserData, IUserDetails, IUsersFilter } from './types';

import { ISelectValue } from 'types';

export const prepareDataToSend = (data: Partial<IUserDetails>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    username,
    email,
    firstName,
    lastName,
    password,
    passwordEntryCounter,
    datetimeOfLastLogin,
    status,
    institution,
    requires2faFlag,
    changeProfileAllowedFlag,
  } = data;

  return {
    id,
    username,
    email,
    first_name: firstName,
    last_name: lastName,
    password: password ? password : null,
    password_entry_counter: passwordEntryCounter,
    datetime_of_last_login: datetimeOfLastLogin,
    status: status && status.value,
    institution_id: institution && institution.value,
    requires_2fa_flag: requires2faFlag ? yesNoConst.YES : yesNoConst.NO,
    change_profile_allowed_flag: changeProfileAllowedFlag
      ? yesNoConst.YES
      : yesNoConst.NO,
  };
};

export const prepareDataToRender = (data: Partial<IUserData>, institution?: ISelectValue) => {
  if (!data) {
    return null;
  }

  const {
    id,
    username,
    first_name,
    last_name,
    email,
    status,
    requires_2fa_flag,
    change_profile_allowed_flag,
    password_entry_counter,
    datetime_of_last_login,
  } = data;

  const userStatus = userStatusWith2faOptions.find(el => el.value === status);

  return {
    id,
    username,
    firstName: first_name,
    lastName: last_name,
    institution: institution && institution.label,
    email,
    status: userStatus && userStatus.label,
    requires2faFlag: requires_2fa_flag === yesNoConst.YES,
    changeProfileAllowedFlag: change_profile_allowed_flag === yesNoConst.YES,
    passwordEntryCounter: password_entry_counter,
    datetimeOfLastLogin: datetime_of_last_login,
  };
};

export const prepareFilterToSend = (data: Partial<IUsersFilter>) => {
  if (!data) {
    return null;
  }

  const { statusActiveFlag, institutionId } = data;

  return {
    status: statusActiveFlag ? statusConst.ACTIVE : null,
    institution_id: institutionId && institutionId.value,
  };
};
