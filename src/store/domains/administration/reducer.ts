import { combineReducers } from 'redux-seamless-immutable';

import adminCyclesEditorReducer from './cycles/reducer';
import adminEventDataElemsReducer from './eventDataElems/reducer';
import adminEventsReducer from './events/reducer';
import adminSchedulerJobsReducer from './scheduler/reducer';
import adminSysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  adminSysProps: adminSysPropsReducer,
  adminSchedulerJobs: adminSchedulerJobsReducer,
  adminCyclesEditor: adminCyclesEditorReducer,
  adminEvents: adminEventsReducer,
  adminEventDataElems: adminEventDataElemsReducer,
});

export default administrationReducer;
