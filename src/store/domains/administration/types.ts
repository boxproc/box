import { AdminSchedulerState } from './scheduler';
import { AdminSysPropsState } from './systemProperties';

export interface AdministrationState {
  adminSysProps: AdminSysPropsState;
  adminSchedulerJobs: AdminSchedulerState;
}
