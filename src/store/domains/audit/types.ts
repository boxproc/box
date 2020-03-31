import { IApiCallsState } from './apiCalls';
import { IScheduledJobsState } from './scheduledJobs';
import { ISysMonitorState } from './systemMonitor';
import { IUiSessionsState } from './uiSessions';
import { IUsersActivityState } from './usersActivity';

export interface IAuditState {
  apiCalls: IApiCallsState;
  scheduledJobs: IScheduledJobsState;
  systemMonitor: ISysMonitorState;
  uiSessions: IUiSessionsState;
  usersActivity: IUsersActivityState;
}
