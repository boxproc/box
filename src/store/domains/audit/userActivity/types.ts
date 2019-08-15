import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

interface PlainInfo {
  id: number;
  description: string;
  username: string | number;
}

export interface AuditUserActivitiesItemResp extends PlainInfo {
  user_id: number;
  api_name: string;
  event_datetime: string;
  institution_id: number;
  first_name: string;
  last_name: string;
}

export interface AuditUserActivitiesItem extends PlainInfo {
  institutionId: number;
  userId: number;
  apiName: string;
  eventDatetime: string;
  firstName: string;
  lastName: string;

}

export interface AuditUserActivitiesFilter {
  institutionId: SelectValues;
  username: SelectValues;
  datetimeFrom: string;
  datetimeTo: string;
}

export interface AuditUserActivitiesFilterPrepared {
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

export interface AuditUserActivitiesDataResp extends ResponseStatusType {
  users_activity: Array<AuditUserActivitiesItemResp>;
}

export interface AuditUserActivitiesState {
  usersActivity: ImmutableArray<AuditUserActivitySelectInstitutionResponse>;
  filteredUsers: ImmutableArray<AuditUserActivitiesItemResp>;
}
