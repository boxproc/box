import { AdminCyclesEditorState } from './cycles';
import { AdminCountriesState } from './dictionaries/countries';
import { AdminCurrenciesState } from './dictionaries/currencies';
import { AdminEventDataElemsState } from './dictionaries/eventDataElems';
import { AdminEventsState } from './dictionaries/events';
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
  cyclesEditor: AdminCyclesEditorState;
  users: AdminUserState;
  userGroups: AdminUsersGroupState;
  countries: AdminCountriesState;
  currencies: AdminCurrenciesState;
  events: AdminEventsState;
  eventDataElements: AdminEventDataElemsState;
  endpoints: AdminEndpointState;
  interfaces: AdminInterfaceState;
  institutions: AdminInstitutionsState;
}
