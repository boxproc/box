import { combineReducers } from 'redux-seamless-immutable';

import dictionariesReducer from './dictionaries/reducer';
import adminEndpointsReducer from './endpoints/reducer';
import institutionsReducer from './institutions/reducer';
import interfacesReducer from './interfaces/reducer';
import usersReducer from './permissions/users/reducer';
import adminUsersGroupReducer from './permissions/usersGroups/reducer';
import schedulerReducer from './scheduler/reducer';
import sysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  dictionaries: dictionariesReducer,
  endpoints: adminEndpointsReducer,
  institutions: institutionsReducer,
  interfaces: interfacesReducer,
  scheduler: schedulerReducer,
  systemProperties: sysPropsReducer,
  userGroups: adminUsersGroupReducer,
  users: usersReducer,
});

export default administrationReducer;
