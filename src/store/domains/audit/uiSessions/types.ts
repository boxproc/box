import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

export interface IUiSessionData {
  user_id: number;
  first_name: string;
  last_name: string;
  last_datetime: string;
  ip_address: string;
  user_agent: string;
  status: string;
  username: string;
  institution_id: number;
  institution_name: string;
}

export interface IUiSessionsData {
  ui_sessions: Array<IUiSessionData>;
}

export interface IUiSession {
  id: number; // user id
  firstName: string;
  lastName: string;
  lastDatetime: string;
  ipAddress: string;
  userAgent: string;
  status: string;
  username: string;
  institutionId: number;
  institutionName: string;
}

export interface IUiSessionsFilter {
  institutionId: Array<ISelectValue>;
}

export interface IUiSessionsFilterToSend {
  institution_id: Array<number>;
}

export interface IUiSessionsState {
  uiSessions: ImmutableArray<IUiSessionData>;
}
