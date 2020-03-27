import { combineReducers } from 'redux-seamless-immutable';

import dictionariesReducer from './dictionaries/reducer';
import adminEndpointsReducer from './endpoints/reducer';
import institutionsReducer from './institutions/reducer';
import interfacesReducer from './interfaces/reducer';
import adminUserReducer from './permissions/users/reducer';
import adminUsersGroupReducer from './permissions/usersGroups/reducer';
import adminSchedulerJobsReducer from './scheduler/reducer';
import sysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  dictionaries: dictionariesReducer,
  endpoints: adminEndpointsReducer,
  institutions: institutionsReducer,
  interfaces: interfacesReducer,
  scheduler: adminSchedulerJobsReducer,
  systemProperties: sysPropsReducer,
  userGroups: adminUsersGroupReducer,
  users: adminUserReducer,
});

export default administrationReducer;
