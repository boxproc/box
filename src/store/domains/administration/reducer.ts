import { combineReducers } from 'redux-seamless-immutable';

import dictionariesReducer from './dictionaries/reducer';
import adminEndpointsReducer from './endpoints/reducer';
import adminInstitutionsReducer from './institutions/reducer';
import adminInterfacesReducer from './interfaces/reducer';
import adminUserReducer from './permissions/users/reducer';
import adminUsersGroupReducer from './permissions/usersGroups/reducer';
import adminSchedulerJobsReducer from './scheduler/reducer';
import adminSysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  systemProperties: adminSysPropsReducer,
  scheduler: adminSchedulerJobsReducer,
  dictionaries: dictionariesReducer,
  users: adminUserReducer,
  userGroups: adminUsersGroupReducer,
  endpoints: adminEndpointsReducer,
  interfaces: adminInterfacesReducer,
  institutions: adminInstitutionsReducer,
});

export default administrationReducer;
