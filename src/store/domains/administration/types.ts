import { AdminEventDataElementsState } from './eventDataElements';
import { AdminEventsState } from './events';
import { AdminSchedulerState } from './scheduler';
import { AdminSysPropsState } from './systemProperties';

export interface AdministrationState {
  adminSysProps: AdminSysPropsState;
  adminSchedulerJobs: AdminSchedulerState;
  adminEvents: AdminEventsState;
  adminEventDataElements: AdminEventDataElementsState;
}
