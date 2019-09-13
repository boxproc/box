import { statusTypes, statusTypes2faOptions, yesNoTypes } from 'consts';
import {
  AdminUserItem,
  AdminUserItemDetails,
  UsersFilterParams,
  UsersFilterParamsPrepared,
} from './types';

export const prepareAdminUserValuesToSend =
  (values: Partial<AdminUserItemDetails>) => {
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
      requires_2fa_flag: values.requires2faFlag ? yesNoTypes.YES : yesNoTypes.NO,
      change_profile_allowed_flag: values.changeProfileAllowedFlag ? yesNoTypes.YES : yesNoTypes.NO,
    };
  };

export const prepareAdminUserValuesToRender = (values: Partial<AdminUserItem>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    username: values.username,
    firstName: values.first_name,
    lastName: values.last_name,
    email: values.email,
    status: statusTypes2faOptions.find(el => el.value === values.status).label,
    passwordEntryCounter: values.password_entry_counter,
    datetimeOfLastLogin: values.datetime_of_last_login,
    requires2faFlag: values.requires_2fa_flag === yesNoTypes.YES,
    changeProfileAllowedFlag: values.change_profile_allowed_flag === yesNoTypes.YES,
  };
};

export const prepareUsersFiltersParams =
  (params: Partial<UsersFilterParamsPrepared>): Partial<UsersFilterParams> => {
    return {
      statusActiveFlag: params.status === statusTypes.ACTIVE ? true : false,
    };
  };

export const prepareUsersFiltersParamsToSend =
  (params: Partial<UsersFilterParams>): Partial<UsersFilterParamsPrepared> => {
    if (!params) {
      return null;
    }
    const { statusActiveFlag } = params;

    return {
      status: statusActiveFlag ? statusTypes.ACTIVE : null,
    };
  };
