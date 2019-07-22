import { ImmutableArray } from 'seamless-immutable';
import { ParsedSelectValues, SuccessResponseStatusType } from 'types';

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

export interface AdminSchedulerItem {
  id: number;
  institutionId: string | number;
  name: string;
  description: string;
  status: string | number;
  cronExpression: string;
  executableType: string | number;
  executable: string;
  logLocation: string;
  lastExecutionDatetime: string;
  lastExecutionResult: string;
}

export interface AdminSchedulerEditableItem {
  name?: string;
  description?: string;
  cronExpression?: string;
  executable?: string;
  logLocation?: string;
  status?: ParsedSelectValues;
  institutionId?: ParsedSelectValues;
  executableType?: ParsedSelectValues;
}

export interface AdminSchedulerEditableItemPrepared {
  name?: string;
  description?: string;
  cron_expression?: string;
  executable?: string;
  log_location?: string;
  status?: string | number;
  institution_id?: string | number;
  executable_type?: string | number;
}

export interface AdminSchedulerDataResp extends SuccessResponseStatusType {
  s_scheduler: Array<AdminSchedulerItemResp>;
}

export interface AdminSchedulerState {
  scheduler: ImmutableArray<AdminSchedulerItemResp>;
}
