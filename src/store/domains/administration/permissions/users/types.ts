import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType, SelectValues } from 'types';

interface AdminUserPlainInfo {
  id: number;
  username: string;
  email: string;
}

export interface AdminUserItem extends AdminUserPlainInfo {
  first_name: string;
  last_name: string;
  password: string;
  password_entry_counter: number | string;
  datetime_of_last_login: string;
  status: string | number;
  requires_2fa_flag: string;
}

export interface AdminUserItemPreparedPlain extends AdminUserPlainInfo {
  firstName: string;
  lastName: string;
  passwordEntryCounter: number | string;
  datetimeOfLastLogin: string;
  requires2faFlag: boolean;
}

export interface AdminUserItemPrepared extends AdminUserItemPreparedPlain {
  status: string | number;
}

export interface AdminUserItemDetails extends AdminUserItemPreparedPlain {
  status: SelectValues;
  password: string;
}

export interface UsersFilterParams {
  statusActiveFlag: boolean;
}

export interface UsersFilterParamsPrepared {
  status: string;
}

export interface AdminUserDataResp extends ResponseStatusType {
  users: Array<AdminUserItem>;
}

export interface AdminUserState {
  users: ImmutableArray<AdminUserItem>;
  currentUserId: number;
}
