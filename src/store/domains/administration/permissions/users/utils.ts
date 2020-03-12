import { status2faLoginOptions, statusCodes, yesNoTypesCodes } from 'consts';
import { AdminUserItem, AdminUserItemDetails, UsersFilter } from './types';

import { SelectValue } from 'types';

export const prepareAdminUserDataToSend = (data: Partial<AdminUserItemDetails>) => {
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
    requires_2fa_flag: requires2faFlag ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    change_profile_allowed_flag: changeProfileAllowedFlag
      ? yesNoTypesCodes.YES
      : yesNoTypesCodes.NO,
  };
};

export const prepareAdminUserDataToRender = (
  data: Partial<AdminUserItem>,
  institution?: SelectValue
) => {
  if (!data) {
    return null;
  }

  const {
    id,
    username,
    first_name,
    last_name,
    email,
    requires_2fa_flag,
    change_profile_allowed_flag,
    password_entry_counter,
    datetime_of_last_login,
  } = data;

  const status = status2faLoginOptions.find(el => el.value === data.status);

  return {
    id,
    username,
    firstName: first_name,
    lastName: last_name,
    institution: institution && institution.label,
    email,
    status: status && status.label,
    requires2faFlag: requires_2fa_flag === yesNoTypesCodes.YES,
    changeProfileAllowedFlag: change_profile_allowed_flag === yesNoTypesCodes.YES,
    passwordEntryCounter: password_entry_counter,
    datetimeOfLastLogin: datetime_of_last_login,
  };
};

export const prepareUsersFiltersDataToSend = (data: Partial<UsersFilter>) => {
  if (!data) {
    return null;
  }

  const { statusActiveFlag, institutionId } = data;

  return {
    status: statusActiveFlag ? statusCodes.ACTIVE : null,
    institution_id: institutionId && institutionId.value,
  };
};
