import { combineReducers } from 'redux-seamless-immutable';

import adminEventDataElementsReducer from './eventDataElements/reducer';
import adminEventsReducer from './events/reducer';
import adminSchedulerJobsReducer from './scheduler/reducer';
import adminSysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  adminSysProps: adminSysPropsReducer,
  adminSchedulerJobs: adminSchedulerJobsReducer,
  adminEvents: adminEventsReducer,
  adminEventDataElements: adminEventDataElementsReducer,
});

export default administrationReducer;
