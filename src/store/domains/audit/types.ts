import { AuditApiCallsState } from './apiCalls';
import { AuditUserActivityState } from './userActivity';

export interface AuditState {
  userActivity: AuditUserActivityState;
  apiCalls: AuditApiCallsState;
}
