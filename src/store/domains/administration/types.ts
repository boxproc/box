import { AdminCyclesEditorState } from './cycles';
import { AdminEventDataElemsState } from './eventDataElems';
import { AdminEventsState } from './events';
import { AdminUserState } from './permissions/users' ;
import { AdminUsersGroupState } from './permissions/usersGroups';
import { AdminSchedulerState } from './scheduler';
import { AdminSysPropsState } from './systemProperties';

export interface AdministrationState {
  adminCyclesEditor: AdminCyclesEditorState;
  adminSysProps: AdminSysPropsState;
  adminSchedulerJobs: AdminSchedulerState;
  adminUsers: AdminUserState;
  adminUsersGroup: AdminUsersGroupState;
  adminEvents: AdminEventsState;
  adminEventDataElems: AdminEventDataElemsState;
}
