import { statusTypes2faLoginOptions, statusTypesCodes, yesNoTypesCodes } from 'consts';
import { AdminUserItem, AdminUserItemDetails, UsersFilter } from './types';

export const prepareAdminUserValuesToSend = (values: Partial<AdminUserItemDetails>) => {
    if (!values) {
      return null;
    }

    return {
      id: values.id,
      username: values.username,
      email: values.email,
      first_name: values.firstName,
      last_name: values.lastName,
      password: values.password,
      password_entry_counter: values.passwordEntryCounter,
      datetime_of_last_login: values.datetimeOfLastLogin,
      status: values.status && values.status.value,
      institutionId: values.userInstitution.value,
      requires_2fa_flag: values.requires2faFlag ? yesNoTypesCodes.YES : yesNoTypesCodes.NO,
      change_profile_allowed_flag: values.changeProfileAllowedFlag
        ? yesNoTypesCodes.YES
        : yesNoTypesCodes.NO,
    };
  };

export const prepareAdminUserValuesToRender = (values: Partial<AdminUserItem>) => {
  if (!values) {
    return null;
  }

  const status = statusTypes2faLoginOptions.find(el => el.value === values.status);

  return {
    id: values.id,
    username: values.username,
    firstName: values.first_name,
    lastName: values.last_name,
    email: values.email,
    status: status && status.label,
    passwordEntryCounter: values.password_entry_counter,
    datetimeOfLastLogin: values.datetime_of_last_login,
    requires2faFlag: values.requires_2fa_flag === yesNoTypesCodes.YES,
    changeProfileAllowedFlag: values.change_profile_allowed_flag === yesNoTypesCodes.YES,
  };
};

export const prepareUsersFiltersParamsToSend = (params: Partial<UsersFilter>) => {
    if (!params) {
      return null;
    }

    const { statusActiveFlag, institutionId } = params;

    return {
      status: statusActiveFlag ? statusTypesCodes.ACTIVE : null,
      institution_id: institutionId && institutionId.value,
    };
  };
