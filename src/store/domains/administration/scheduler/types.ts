import { ImmutableArray } from 'seamless-immutable';

export interface AdminSchedulerData {
  id?: number;
  institutionId?: number;
  name?: string;
  description?: string;
  status?: string;
  cronExpression?: string;
  executableType?: string;
  executable?: string;
  logLocation?: string;
  lastExecutionDatetime?: string;
  lastExecutionResult?: string;
}

export interface AdminSchedulerDataResp {
    id?: number;
    institution_id?: number;
    name?: string;
    description?: string;
    status?: string;
    cron_expression?: string;
    executable_type?: string;
    executable?: string;
    log_location?: string;
    last_execution_datetime?: string;
    last_execution_result?: string;
  }

export interface AdminSchedulerData {
   s_scheduler: Array<AdminSchedulerDataResp>;
  }

export interface AdminSchedulerState {
    s_scheduler: ImmutableArray<AdminSchedulerDataResp>;
  }
