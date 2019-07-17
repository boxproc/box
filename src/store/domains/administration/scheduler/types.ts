import { ImmutableArray } from 'seamless-immutable';

export interface AdminSchedulerItem {
  id: number;
  institutionId: number;
  name: string;
  description: string;
  status: string;
  cronExpression: string;
  executableType: string;
  executable: string;
  logLocation: string;
  lastExecutionDatetime: string;
  lastExecutionResult: string;
}

export interface AdminSchedulerItemResp {
  id: number;
  institution_id: number;
  name: string;
  description: string;
  status: string;
  cron_expression: string;
  executable_type: string;
  executable: string;
  log_location: string;
  last_execution_datetime: string;
  last_execution_result: string;
}

export interface AdminSchedulerDataResp {
  s_scheduler: Array<AdminSchedulerItemResp>;
}

export interface AdminSchedulerData {
  scheduler: Array<AdminSchedulerItem>;
}

export interface AdminSchedulerState {
  scheduler: ImmutableArray<AdminSchedulerItemResp>;
}
export interface AdminSchedulerJobDataResp {
  scheduler: AdminSchedulerDataResp;
}
export interface AdminSchedulerIdDataResp {
  job_id: string | number;
}
