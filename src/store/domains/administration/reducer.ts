import { combineReducers } from 'redux-seamless-immutable';

import adminCyclesEditorReducer from './cycles/reducer';
import dictionaryCardStatusesReducer from './dictionaries/cardStatuses/reducer';
import dictionaryCountriesReducer from './dictionaries/countries/reducer';
import dictionaryCurrenciesReducer from './dictionaries/currencies/reducer';
import dictionaryEventDataElemsReducer from './dictionaries/eventDataElems/reducer';
import dictionaryEventsReducer from './dictionaries/events/reducer';
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
  cardStatuses: dictionaryCardStatusesReducer,
  countries: dictionaryCountriesReducer,
  currencies: dictionaryCurrenciesReducer,
  events: dictionaryEventsReducer,
  eventDataElements: dictionaryEventDataElemsReducer,
  users: adminUserReducer,
  userGroups: adminUsersGroupReducer,
  endpoints: adminEndpointsReducer,
  interfaces: adminInterfacesReducer,
  institutions: adminInstitutionsReducer,
});

export default administrationReducer;
