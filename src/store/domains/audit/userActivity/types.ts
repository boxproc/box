import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

export interface AuditUserActivitiesItemResp {
    id: number;
    user_id: number;
    api_name: string;
    description: string;
    event_datetime: string;
    institution_id: number;
    username: string | number;
    first_name: string;
    last_name: string;
}

export interface AuditUserActivitiesItem {
    id: number;
    institutionId: number;
    userId: number;
    apiName: string;
    eventDatetime: string;
    description: string;
    username: string | number;
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
    users_activity: ImmutableArray<AuditUserActivitySelectInstitutionResponse>;
    filtered_users: ImmutableArray<AuditUserActivitiesItemResp>;
}
