import { IDictionariesState } from './dictionaries';
import { IEndpointsState } from './endpoints';
import { IInstitutionsState } from './institutions';
import { IInterfacesState } from './interfaces';
import { IUsersState } from './permissions/users';
import { IUsersGroupsState } from './permissions/usersGroups';
import { ISchedulerState } from './scheduler';
import { ISysPropsState } from './systemProperties';

export interface AdministrationState {
  dictionaries: IDictionariesState;
  endpoints: IEndpointsState;
  institutions: IInstitutionsState;
  interfaces: IInterfacesState;
  scheduler: ISchedulerState;
  systemProperties: ISysPropsState;
  userGroups: IUsersGroupsState;
  users: IUsersState;
}
