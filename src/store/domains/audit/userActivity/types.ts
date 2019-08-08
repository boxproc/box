import { ImmutableArray } from "seamless-immutable";
import { ResponseStatusType } from "types";

export interface AuditUserActivitiesItemResp {
    id: number;
    user_id: number;
    api_name: string;
    description: string;
}

export interface AuditUserActivitiesItem {
    id: number;
    userId: number;
    apiName: string;
    description: string;
}

export interface AuditUserActivitiesDataResp extends ResponseStatusType {
    users_activity: Array<AuditUserActivitiesItemResp>;
}

export interface AuditUserActivitiesState {
    users_activity: ImmutableArray<AuditUserActivitiesItemResp>;
}
