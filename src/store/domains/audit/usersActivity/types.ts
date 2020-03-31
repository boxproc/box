import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

interface IPlainInfo {
  id: number;
  description: string;
  username: string | number;
}

export interface IUsersActivityItemData extends IPlainInfo {
  user_id: number;
  api_name: string;
  event_datetime: string;
  first_name: string;
  last_name: string;
}

export interface IUsersActivityItemsData {
  users_activity: Array<IUsersActivityItemData>;
}

export interface IUsersActivityItem extends IPlainInfo {
  userId: number;
  apiName: string;
  eventDatetime: string;
}

export interface IUserId {
  user_id: number;
}

export interface IUsersActivityUser {
  id: number;
  username: string | number;
  first_name: string;
  last_name: string;
}

export interface IUsersActivityUsersData {
  users_activity: Array<IUsersActivityUser>;
}

/**
 * User activity filter interfaces
 */

export interface IUsersActivityFilter {
  institutionId: ISelectValue;
  username: ISelectValue;
  usersActivityDateTimeFrom: string;
  usersActivityDateTimeTo: string;
}

export interface IUsersActivityFilterToSend {
  institution_id: string | number;
  username: string | number;
  datetime_from: string;
  datetime_to: string;
}

/** User activity state interface */
export interface IUsersActivityState {
  usersActivity: ImmutableArray<IUsersActivityUser>;
  filteredUsers: ImmutableArray<IUsersActivityItemData>;
}
