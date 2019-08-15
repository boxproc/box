import { combineReducers } from 'redux-seamless-immutable';

import adminCyclesEditorReducer from './cycles/reducer';
import adminEventDataElemsReducer from './dictionaries/eventDataElems/reducer';
import adminEventsReducer from './dictionaries/events/reducer';
import adminUserReducer from './permissions/users/reducer';
import adminUsersGroupReducer from './permissions/usersGroups/reducer';
import adminSchedulerJobsReducer from './scheduler/reducer';
import adminSysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  systemProperties: adminSysPropsReducer,
  scheduler: adminSchedulerJobsReducer,
  cyclesEditor: adminCyclesEditorReducer,
  events: adminEventsReducer,
  eventDataElements: adminEventDataElemsReducer,
  users: adminUserReducer,
  userGroups: adminUsersGroupReducer,
});

export default administrationReducer;
