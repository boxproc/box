import { combineReducers } from 'redux-seamless-immutable';

import adminCyclesEditorReducer from './cycles/reducer';
import adminEventDataElementsReducer from './eventDataElements/reducer';
import adminEventsReducer from './events/reducer';
import adminSchedulerJobsReducer from './scheduler/reducer';
import adminSysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  adminSysProps: adminSysPropsReducer,
  adminSchedulerJobs: adminSchedulerJobsReducer,
  adminCyclesEditor: adminCyclesEditorReducer,
  adminEvents: adminEventsReducer,
  adminEventDataElements: adminEventDataElementsReducer,
});

export default administrationReducer;
