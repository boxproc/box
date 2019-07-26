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
