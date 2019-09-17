import { AuditApiCallsState } from './apiCalls';
import { AuditUserActivitiesState } from './userActivity';

export interface AuditState {
  userActivities: AuditUserActivitiesState;
  apiCalls: AuditApiCallsState;
}
