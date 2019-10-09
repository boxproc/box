import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

interface PlainInfo {
  id: number;
  description: string;
  username: string | number;
}

export interface AuditUserActivityItemResp extends PlainInfo {
  user_id: number;
  api_name: string;
  event_datetime: string;
  institution_id: number;
  first_name: string;
  last_name: string;
}

export interface AuditUserActivityItem extends PlainInfo {
  institutionId: number;
  userId: number;
  apiName: string;
  eventDatetime: string;
  firstName: string;
  lastName: string;
}

export interface AuditUserActivityFilter {
  institutionId: SelectValues;
  username: SelectValues;
  dateTimeFrom: string;
  dateTimeTo: string;
}

export interface AuditUserActivityFilterPrepared {
  institution_id: string | number;
  username: string | number;
  datetime_from: string;
  datetime_to: string;
}

export interface AuditUserActivitySelectInstitution {
  institution_id: number | string;
}

export interface AuditUserActivitySelectInstitutionResponse {
  id: number;
  username: string | number;
  first_name: string;
  last_name: string;
}

export interface AuditUsersDataResp extends ResponseStatusType {
  users_activity: Array<AuditUserActivitySelectInstitutionResponse>;
}

export interface AuditUserActivityDataResp extends ResponseStatusType {
  users_activity: Array<AuditUserActivityItemResp>;
}

export interface AuditUserActivityState {
  usersActivity: ImmutableArray<AuditUserActivitySelectInstitutionResponse>;
  filteredUsers: ImmutableArray<AuditUserActivityItemResp>;
}
