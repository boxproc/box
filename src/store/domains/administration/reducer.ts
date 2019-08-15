import { combineReducers } from 'redux-seamless-immutable';

import adminCyclesEditorReducer from './cycles/reducer';
import adminEventDataElemsReducer from './dictionaries/eventDataElems/reducer';
import adminEventsReducer from './dictionaries/events/reducer';
import adminEndpointsReducer from './endpoints/reducer';
import adminInterfacesReducer from './interfaces/reducer';
import adminUserReducer from './permissions/users/reducer';
import adminUsersGroupReducer from './permissions/usersGroups/reducer';
import adminSchedulerJobsReducer from './scheduler/reducer';
import adminSysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  adminSysProps: adminSysPropsReducer,
  adminSchedulerJobs: adminSchedulerJobsReducer,
  adminCyclesEditor: adminCyclesEditorReducer,
  adminEvents: adminEventsReducer,
  adminEventDataElems: adminEventDataElemsReducer,
  adminUsers: adminUserReducer,
  adminUsersGroup: adminUsersGroupReducer,
  adminEndpoints: adminEndpointsReducer,
  adminInterfaces: adminInterfacesReducer,
});

export default administrationReducer;
