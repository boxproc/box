import { ImmutableArray } from 'seamless-immutable';

import { ISelectValue } from 'types';

interface IPlainInfo {
  id: number;
  username: string;
  email: string;
}

export interface IUserData extends IPlainInfo {
  first_name: string;
  last_name: string;
  password_entry_counter: number | string;
  datetime_of_last_login: string;
  status: string | number;
  requires_2fa_flag: string;
  change_profile_allowed_flag: string;
  institution_id: number | string;
}

export interface IUsersData {
  users: Array<IUserData>;
}

interface IUserPlain extends IPlainInfo {
  firstName: string;
  lastName: string;
  passwordEntryCounter: number | string;
  datetimeOfLastLogin: string;
  requires2faFlag: boolean;
  changeProfileAllowedFlag: boolean;
}

export interface IUser extends IUserPlain {
  status: string | number;
  institution: string | number;
}

export interface IUserDetails extends IUserPlain {
  status: ISelectValue;
  institution: ISelectValue;
  password: string;
}

/** Users filter interfaces */

export interface IUsersFilter {
  statusActiveFlag: boolean;
  institutionId: ISelectValue;
}

export interface IUsersFilterToSend {
  status: string;
  institution_id: string | number;
}

/** Users state interface */
export interface IUsersState {
  users: ImmutableArray<IUserData>;
  usernames: ImmutableArray<IUserData>;
}
