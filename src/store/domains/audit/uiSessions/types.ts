import { ImmutableArray } from 'seamless-immutable';
import { SelectValues } from 'types';

export interface AuditUiSessionsItemResp {
  user_id: number;
  first_name: string;
  last_name: string;
  last_datetime: string;
  ip_address: string;
  user_agent: string;
  status: string;
}

export interface AuditUiSessionsItem {
  userId: number;
  firstName: string;
  lastName: string;
  lastDatetime: string;
  ipAddress: string;
  userAgent: string;
  status: string;
}

export interface AuditUiSessionsDataResp {
  ui_sessions: Array<AuditUiSessionsItemResp>;
}

export interface AuditUiSessionsFilter {
  institutionId: Array<SelectValues>;
}

export interface AuditUiSessionsFilterPrepared {
  institution_id: Array<number>;
}

export interface AuditUiSessionsState {
  uiSessions: ImmutableArray<AuditUiSessionsItemResp>;
}
