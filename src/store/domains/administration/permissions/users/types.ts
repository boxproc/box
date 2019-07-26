import { ImmutableArray } from 'seamless-immutable';

import { SelectValues, SuccessResponseStatusType } from 'types';

export interface AdminUserItemResp {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string | number;
  password_hash: string;
  password_entry_counter: number | string;
  datetime_of_last_login: string;
}

export interface AdminUserEditableItemId {
  id: number;
}
export interface AdminUserEditableItemPrepared extends AdminUserEditableItemId {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  status: string | number;
  password_hash: string;
  password_entry_counter: number | string;
  datetime_of_last_login: string;
}

export interface AdminUserItem {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string | number;
  passwordHash: string;
  passwordEntryCounter: number | string;
  datetimeOfLastLogin: string;
}

export interface AdminUserEditableItem {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  status?: SelectValues;
  passwordHash?: string;
  passwordEntryCounter?: number | string;
  datetimeOfLastLogin?: string;
}

export interface AdminUserDataResp extends SuccessResponseStatusType {
  users: Array<AdminUserItemResp>;
}

export interface AdminUserState {
  users: ImmutableArray<AdminUserItemResp>;
}
