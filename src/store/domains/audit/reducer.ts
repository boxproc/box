import { combineReducers } from 'redux-seamless-immutable';
import apiCallsReducer from './apiCalls/reducer';
import scheduledJobsReducer from './scheduledJobs/reducer';
import sysMonitorReducer from './systemMonitor/reducer';
import uiSessionsReducer from './uiSessions/reducer';
import usersActivityReducer from './usersActivity/reducer';

const auditReducer = combineReducers({
  apiCalls: apiCallsReducer,
  scheduledJobs: scheduledJobsReducer,
  systemMonitor: sysMonitorReducer,
  uiSessions: uiSessionsReducer,
  usersActivity: usersActivityReducer,
});

export default auditReducer;
