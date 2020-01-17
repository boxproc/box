import { combineReducers } from 'redux-seamless-immutable';

import dictionaryAccountStatusesReducer from './dictionaries/accountStatuses/reducer';
import dictionaryConstsReducer from './dictionaries/consts/reducer';
import dictionaryCountriesReducer from './dictionaries/countries/reducer';
import dictionaryCurrenciesReducer from './dictionaries/currencies/reducer';
import dictionaryEventDataElemsReducer from './dictionaries/eventDataElems/reducer';
import dictionaryEventsReducer from './dictionaries/events/reducer';
import dictionaryTransactionTypesReducer from './dictionaries/transactionTypes/reducer';
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
  consts: dictionaryConstsReducer,
  countries: dictionaryCountriesReducer,
  currencies: dictionaryCurrenciesReducer,
  events: dictionaryEventsReducer,
  eventDataElements: dictionaryEventDataElemsReducer,
  transactionTypes: dictionaryTransactionTypesReducer,
  accountStatuses: dictionaryAccountStatusesReducer,
  users: adminUserReducer,
  userGroups: adminUsersGroupReducer,
  endpoints: adminEndpointsReducer,
  interfaces: adminInterfacesReducer,
  institutions: adminInstitutionsReducer,
});

export default administrationReducer;
