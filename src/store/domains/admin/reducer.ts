import { combineReducers } from 'redux-seamless-immutable';

import dictionariesReducer from './dictionaries/reducer';
import endpointsReducer from './endpoints/reducer';
import institutionsReducer from './institutions/reducer';
import interfacesReducer from './interfaces/reducer';
import usersReducer from './permissions/users/reducer';
import usersGroupsReducer from './permissions/usersGroups/reducer';
import schedulerReducer from './scheduler/reducer';
import sysPropsReducer from './systemProperties/reducer';

const adminReducer = combineReducers({
  dictionaries: dictionariesReducer,
  endpoints: endpointsReducer,
  institutions: institutionsReducer,
  interfaces: interfacesReducer,
  scheduler: schedulerReducer,
  systemProperties: sysPropsReducer,
  userGroups: usersGroupsReducer,
  users: usersReducer,
});

export default adminReducer;
