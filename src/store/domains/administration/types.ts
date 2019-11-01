import { DictionaryCardStatusesState } from './dictionaries/cardStatuses';
import { DictionaryCountriesState } from './dictionaries/countries';
import { DictionaryCurrenciesState } from './dictionaries/currencies';
import { DictionaryEventDataElemsState } from './dictionaries/eventDataElems';
import { DictionaryEventsState } from './dictionaries/events';
import { AdminEndpointState } from './endpoints';
import { AdminInstitutionsState } from './institutions';
import { AdminInterfaceState } from './interfaces';
import { AdminUserState } from './permissions/users' ;
import { AdminUsersGroupState } from './permissions/usersGroups';
import { AdminSchedulerState } from './scheduler';
import { AdminSysPropsState } from './systemProperties';

export interface AdministrationState {
  systemProperties: AdminSysPropsState;
  scheduler: AdminSchedulerState;
  users: AdminUserState;
  userGroups: AdminUsersGroupState;
  cardStatuses: DictionaryCardStatusesState;
  countries: DictionaryCountriesState;
  currencies: DictionaryCurrenciesState;
  events: DictionaryEventsState;
  eventDataElements: DictionaryEventDataElemsState;
  endpoints: AdminEndpointState;
  interfaces: AdminInterfaceState;
  institutions: AdminInstitutionsState;
}
