import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType } from 'types';

export interface AuditUserActivitiesItemResp {
    id: number;
    user_id: number;
    api_name: string;
    description: string;
    event_datetime: string;
    institution_id: number;
    username: string;
}

export interface AuditUserActivitiesItem {
    id: number;
    institutionId: number;
    userId: number;
    apiName: string;
    eventDatetime: string;
    description: string;
    username: string;
}

export interface AuditUserActivitySelectInstitution {
    institution_id: number | string;
}
export interface AuditUserActivitySelectInstitutionResponse {
    id: number;
    username: string;
}

export interface AuditUserActivitiesDataResp extends ResponseStatusType {
    users_activity: Array<AuditUserActivitiesItemResp>;
}

export interface AuditUserActivitiesState {
    users_activity: ImmutableArray<AuditUserActivitiesItemResp>;
}
