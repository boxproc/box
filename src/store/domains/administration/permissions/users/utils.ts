import { status2faLoginOptions, statusCodes, yesNoTypesCodes } from 'consts';
import { AdminUserItem, AdminUserItemDetails, UsersFilter } from './types';

import { SelectValues } from 'types';

export const prepareAdminUserDataToSend = (data: Partial<AdminUserItemDetails>) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    username: data.username,
    email: data.email,
    first_name: data.firstName,
    last_name: data.lastName,
    password: data.password,
    password_entry_counter: data.passwordEntryCounter,
    datetime_of_last_login: data.datetimeOfLastLogin,
    status: data.status && data.status.value,
    institution_id: data.institution.value,
    requires_2fa_flag: data.requires2faFlag ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
    change_profile_allowed_flag: data.changeProfileAllowedFlag
      ? yesNoTypesCodes.YES
      : yesNoTypesCodes.NO,
  };
};

export const prepareAdminUserDataToRender = (
  data: Partial<AdminUserItem>,
  institution?: SelectValues
) => {
  if (!data) {
    return null;
  }

  const status = status2faLoginOptions.find(el => el.value === data.status);

  return {
    id: data.id,
    username: data.username,
    firstName: data.first_name,
    lastName: data.last_name,
    institution: institution && institution.label,
    email: data.email,
    status: status && status.label,
    requires2faFlag: data.requires_2fa_flag === yesNoTypesCodes.YES,
    changeProfileAllowedFlag: data.change_profile_allowed_flag === yesNoTypesCodes.YES,
    passwordEntryCounter: data.password_entry_counter,
    datetimeOfLastLogin: data.datetime_of_last_login,
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
