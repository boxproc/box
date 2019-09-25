import { combineReducers } from 'redux-seamless-immutable';

import adminCyclesEditorReducer from './cycles/reducer';
import adminCountriesReducer from './dictionaries/countries/reducer';
import adminCurrenciesReducer from './dictionaries/currencies/reducer';
import adminEventDataElemsReducer from './dictionaries/eventDataElems/reducer';
import adminEventsReducer from './dictionaries/events/reducer';
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
  cyclesEditor: adminCyclesEditorReducer,
  countries: adminCountriesReducer,
  currencies: adminCurrenciesReducer,
  events: adminEventsReducer,
  eventDataElements: adminEventDataElemsReducer,
  users: adminUserReducer,
  userGroups: adminUsersGroupReducer,
  endpoints: adminEndpointsReducer,
  interfaces: adminInterfacesReducer,
  institutions: adminInstitutionsReducer,
});

export default administrationReducer;
