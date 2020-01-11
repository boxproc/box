import { AuditApiCallsState } from './apiCalls';
import { AuditScheduledJobsState } from './scheduledJobs';
import { SystemMonitorState } from './systemMonitor';
import { AuditUiSessionsState } from './uiSessions';
import { AuditUserActivityState } from './userActivity';

export interface AuditState {
  userActivity: AuditUserActivityState;
  apiCalls: AuditApiCallsState;
  scheduledJobs: AuditScheduledJobsState;
  systemMonitor: SystemMonitorState;
  uiSessions: AuditUiSessionsState;
}
