import { ImmutableArray } from 'seamless-immutable';
import { SelectValue } from 'types';

interface PlainInfo {
  id: number;
  description: string;
  username: string | number;
}

export interface AuditUserActivityItemResp extends PlainInfo {
  user_id: number;
  api_name: string;
  event_datetime: string;
  first_name: string;
  last_name: string;
}

export interface AuditUserActivityItem extends PlainInfo {
  userId: number;
  apiName: string;
  eventDatetime: string;
}

export interface AuditUserActivityFilter {
  institutionId: SelectValue;
  username: SelectValue;
  userActivityDateTimeFrom: string;
  userActivityDateTimeTo: string;
}

export interface AuditUserActivityFilterPrepared {
  institution_id: string | number;
  username: string | number;
  datetime_from: string;
  datetime_to: string;
}

export interface AuditUserActivitySelectInstitutionResponse {
  id: number;
  username: string | number;
  first_name: string;
  last_name: string;
}

export interface AuditUsersDataResp {
  users_activity: Array<AuditUserActivitySelectInstitutionResponse>;
}

export interface AuditUserActivityDataResp {
  users_activity: Array<AuditUserActivityItemResp>;
}

export interface UserId {
  user_id: number;
}

export interface AuditUserActivityState {
  usersActivity: ImmutableArray<AuditUserActivitySelectInstitutionResponse>;
  filteredUsers: ImmutableArray<AuditUserActivityItemResp>;
}
