import { statusTypes, statusTypesOptions } from 'consts';
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
      password_hash: values.passwordHash,
      password_entry_counter: values.passwordEntryCounter,
      datetime_of_last_login: values.datetimeOfLastLogin,
      status: values.status && values.status.value,
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
    status: statusTypesOptions.find(el => el.value === values.status).label,
    passwordEntryCounter: values.password_entry_counter,
    datetimeOfLastLogin: values.datetime_of_last_login,
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
