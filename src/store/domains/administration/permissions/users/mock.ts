import { AdminUserDataResp } from './types';

export const usersData: AdminUserDataResp = {
  users: [
    {
      change_profile_allowed_flag: 'Y',
      datetime_of_last_login: '26/11/2019 14:25:39',
      email: 'admin@test.yet',
      first_name: 'Admin',
      id: 1,
      last_name: 'Lastname',
      password_entry_counter: 0,
      requires_2fa_flag: 'N',
      status: 'A',
      username: 'admin',
      institution_id: 1,
    },
    {
      change_profile_allowed_flag: 'N',
      datetime_of_last_login: '26/11/2019 10:48:50',
      email: 'operator@test.yet',
      first_name: 'Operator',
      id: 2,
      last_name: 'Lastname',
      password_entry_counter: 0,
      requires_2fa_flag: 'Y',
      status: 'F',
      username: 'operator',
      institution_id: 2,
    },
  ],
};
