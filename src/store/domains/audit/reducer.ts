import { combineReducers } from 'redux-seamless-immutable';
import auditApiCallsReducer from './apiCalls/reducer';
import auditScheduledJobsReducer from './scheduledJobs/reducer';
import auditUserActivityReducer from './userActivity/reducer';

const auditReducer = combineReducers({
  userActivity: auditUserActivityReducer,
  apiCalls: auditApiCallsReducer,
  scheduledJobs: auditScheduledJobsReducer,
});

export default auditReducer;
