import { IDictionariesState } from './dictionaries';
import { AdminEndpointState } from './endpoints';
import { AdminInstitutionsState } from './institutions';
import { AdminInterfaceState } from './interfaces';
import { AdminUserState } from './permissions/users';
import { AdminUsersGroupState } from './permissions/usersGroups';
import { AdminSchedulerState } from './scheduler';
import { AdminSysPropsState } from './systemProperties';

export interface AdministrationState {
  dictionaries: IDictionariesState;
  endpoints: AdminEndpointState;
  institutions: AdminInstitutionsState;
  interfaces: AdminInterfaceState;
  scheduler: AdminSchedulerState;
  systemProperties: AdminSysPropsState;
  userGroups: AdminUsersGroupState;
  users: AdminUserState;
}
