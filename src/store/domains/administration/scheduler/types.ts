import { ImmutableArray } from 'seamless-immutable';

import { IIdNamePair, ISelectValue } from 'types';

interface IPlainInfo extends IIdNamePair {
  description: string;
  executable: string;
  parameters: string;
}

export interface ISchedulerJobData extends IPlainInfo {
  cron_expression: string;
  executable_type: string | number;
  institution_id: string | number;
  last_execution_datetime: string;
  last_execution_result: string | number;
  log_location: string;
  status: string | number;
}

export interface ISchedulerJobsData {
  s_scheduler: Array<ISchedulerJobData>;
}

interface ISchedulerPlain extends IPlainInfo {
  cronExpression: string;
  lastExecutionDatetime: string;
  logLocation: string;
}

export interface ISchedulerJob extends ISchedulerPlain {
  executableType: string | number;
  institutionId: string | number;
  lastExecutionResult: string | number;
  status: string | number;
}

export interface ISchedulerJobEditable extends ISchedulerPlain {
  executableType: ISelectValue;
  institutionId: ISelectValue;
  lastExecutionResult: ISelectValue;
  status: ISelectValue;
}

export interface ISchedulerJobsNames {
  scheduler_names: Array<IIdNamePair>;
}

/** Scheduler job execution request interfaces */

export interface ISchedulerJobExecReq {
  taskId: number;
  taskCommand: string;
}

export interface ISchedulerJobExecReqToSend {
  task_id: number;
  task_command: string;
}

/** Scheduler jobs filter interfaces */

export interface ISchedulerJobsFilter {
  name: string;
  activeStatusFlag: boolean;
  institutionId: ISelectValue;
}

export interface ISchedulerJobsFilterToSend {
  institution_id: string | number;
  name: string;
  status: Array<string>;
}

/** Scheduler state interface */
export interface ISchedulerState {
  scheduler: ImmutableArray<ISchedulerJobData>;
  schedulerNames: ImmutableArray<IIdNamePair>;
}
