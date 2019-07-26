import { statusTypes } from 'consts';
import { UsersFilterParams,  UsersFilterParamsPrepared } from './types';

export const prepareAdminUserValuesCamel =
  (values: any): any => {
    return {
      id: values.id,
      username: values.username,
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      status: values.status.value,
      password_hash: values.passwordHash,
      password_entry_counter: values.passwordEntryCounter,
      datetime_of_last_login: values.datetimeOfLastLogin,
    };
  };

export const prepareUsersFiltersParams =
  (params: UsersFilterParamsPrepared): UsersFilterParams => {
    return {
      statusActiveFlag: params.status === statusTypes.ACTIVE ? true : false,
    };
  };

export const prepareUsersFiltersParamsToSend =
  (params: UsersFilterParams): UsersFilterParamsPrepared => {
    const { statusActiveFlag } = params;

    return {
      status: statusActiveFlag ? statusTypes.ACTIVE : null,
    };
  };
