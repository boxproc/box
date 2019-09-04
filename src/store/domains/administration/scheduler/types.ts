import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType, SelectValues } from 'types';

interface PlainInfo {
  id: number;
  name: string;
  description: string;
  executable: string;
}

export interface AdminSchedulerItem extends PlainInfo {
  institution_id: string | number;
  status: string | number;
  cron_expression: string;
  executable_type: string | number;
  log_location: string;
  last_execution_datetime: string;
  last_execution_result: string;
}

export interface AdminSchedulerItemPreparedPlain extends PlainInfo {
  cronExpression: string;
  logLocation: string;
  lastExecutionDatetime: string;
  lastExecutionResult: string;
}

export interface AdminSchedulerItemPrepared extends AdminSchedulerItemPreparedPlain {
  institutionId: string | number;
  status: string | number;
  executableType: string | number;
}

export interface AdminSchedulerEditableItem extends AdminSchedulerItemPreparedPlain {
  status: SelectValues;
  institutionId: SelectValues;
  executableType: SelectValues;
}

export interface AdminSchedulerJobAction {
  task_id: number;
  task_command: string;
}

export interface AdminSchedulerJobActionPrepared {
  taskId: number;
  taskCommand: string;
}

export interface AdminSchedulerDataResp extends ResponseStatusType {
  s_scheduler: Array<AdminSchedulerItem>;
}

export interface AdminSchedulerState {
  scheduler: ImmutableArray<AdminSchedulerItem>;
  currentSchedulerId: number;
  generatedCronExpression: string;
}
