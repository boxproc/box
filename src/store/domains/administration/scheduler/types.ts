import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair, SelectValue } from 'types';

interface PlainInfo extends IdNamePair {
  description: string;
  executable: string;
  parameters: string;
}

export interface AdminSchedulerItem extends PlainInfo {
  institution_id: string | number;
  status: string | number;
  cron_expression: string;
  executable_type: string | number;
  log_location: string;
  last_execution_datetime: string;
  last_execution_result: string | number;
}

export interface AdminSchedulerItemPreparedPlain extends PlainInfo {
  cronExpression: string;
  logLocation: string;
  lastExecutionDatetime: string;
}

export interface AdminSchedulerItemPrepared extends AdminSchedulerItemPreparedPlain {
  institutionId: string | number;
  status: string | number;
  executableType: string | number;
  lastExecutionResult:  string | number;
}

export interface AdminSchedulerEditableItem extends AdminSchedulerItemPreparedPlain {
  status: SelectValue;
  institutionId: SelectValue;
  executableType: SelectValue;
  lastExecutionResult: SelectValue;
}

export interface AdminSchedulerJobAction {
  task_id: number;
  task_command: string;
}

export interface AdminSchedulerJobActionPrepared {
  taskId: number;
  taskCommand: string;
}

export interface AdminSchedulerDataResp {
  s_scheduler: Array<AdminSchedulerItem>;
}

export interface AdminSchedulerFilter {
  name: string;
  activeStatusFlag: boolean;
  institutionId: SelectValue;
}

export interface AdminSchedulerFilterPrepared {
  name: string;
  status: Array<string>;
  institution_id: string | number;
}

export interface AdminSchedulerNameItems {
  scheduler_names: Array<IdNamePair>;
}

export interface AdminSchedulerState {
  scheduler: ImmutableArray<AdminSchedulerItem>;
  schedulerNames: ImmutableArray<IdNamePair>;
}
