import { IDictionariesState } from './dictionaries';
import { IEndpointsState } from './endpoints';
import { IInstitutionsState } from './institutions';
import { IInterfacesState } from './interfaces';
import { AdminUserState } from './permissions/users';
import { AdminUsersGroupState } from './permissions/usersGroups';
import { AdminSchedulerState } from './scheduler';
import { ISysPropsState } from './systemProperties';

export interface AdministrationState {
  dictionaries: IDictionariesState;
  endpoints: IEndpointsState;
  institutions: IInstitutionsState;
  interfaces: IInterfacesState;
  scheduler: AdminSchedulerState;
  systemProperties: ISysPropsState;
  userGroups: AdminUsersGroupState;
  users: AdminUserState;
}
