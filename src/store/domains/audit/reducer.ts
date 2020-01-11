import { combineReducers } from 'redux-seamless-immutable';
import auditApiCallsReducer from './apiCalls/reducer';
import auditScheduledJobsReducer from './scheduledJobs/reducer';
import auditSystemMonitorReducer from './systemMonitor/reducer';
import auditUiSessionsReducer from './uiSessions/reducer';
import auditUserActivityReducer from './userActivity/reducer';

const auditReducer = combineReducers({
  userActivity: auditUserActivityReducer,
  apiCalls: auditApiCallsReducer,
  scheduledJobs: auditScheduledJobsReducer,
  systemMonitor: auditSystemMonitorReducer,
  uiSessions: auditUiSessionsReducer,
});

export default auditReducer;
