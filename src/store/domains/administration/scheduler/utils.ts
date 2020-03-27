import {
  executableTypeOptions,
  lastExecutionResultOptions,
  schedulerStatusOptions,
  statusConst,
} from 'consts';

import {
  ISchedulerJobData,
  ISchedulerJobEditable,
  ISchedulerJobExecReq,
  ISchedulerJobsFilter,
} from './types';

import { ISelectValue } from 'types';

export const prepareDataToSend = (data: Partial<ISchedulerJobEditable>) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    description: data.description,
    cron_expression: data.cronExpression,
    executable: data.executable,
    log_location: data.logLocation,
    last_execution_datetime: data.lastExecutionDatetime,
    last_execution_result: data.lastExecutionResult && data.lastExecutionResult.value,
    institution_id: data.institutionId && data.institutionId.value,
    executable_type: data.institutionId && data.executableType.value,
    status: data.status && data.status.value,
    parameters: data.parameters,
  };
};

export const prepareDataToExec = (data: ISchedulerJobExecReq) => {
  if (!data) {
    return null;
  }

  return {
    task_id: data.taskId,
    task_command: data.taskCommand,
  };
};

export const prepareDataToRender = (item: ISchedulerJobData, institution?: ISelectValue) => {
  if (!item) {
    return null;
  }

  const status = schedulerStatusOptions.find(el => el.value === item.status);
  const lastExecutionResult = lastExecutionResultOptions
    .find(el => el.value === item.last_execution_result);
  const executableType = executableTypeOptions.find(el => el.value === item.executable_type);

  return {
    id: item.id,
    institutionId: institution && institution.label,
    name: item.name,
    description: item.description,
    status: status && status.label,
    lastExecutionDatetime: item.last_execution_datetime,
    lastExecutionResult: lastExecutionResult && lastExecutionResult.label,
    cronExpression: item.cron_expression,
    executableType: executableType && executableType.label,
    executable: item.executable,
    logLocation: item.log_location,
    parameters: item.parameters,
  };
};

export const prepareDetailsToRender = (item: ISchedulerJobData) => {
  if (!item) {
    return null;
  }

  return {
    ...prepareDataToRender(item),
    status: schedulerStatusOptions.find(el => el.value === item.status),
    lastExecutionResult:
      lastExecutionResultOptions.find(el => el.value === item.last_execution_result),
    executableType: executableTypeOptions.find(el => el.value === item.executable_type),
  };
};

export const prepareFilterToSend = (data: Partial<ISchedulerJobsFilter>) => {
  if (!data) {
    return null;
  }

  const {
    name,
    activeStatusFlag,
    institutionId,
  } = data;

  return {
    name: name ? name : null,
    status: activeStatusFlag ? [statusConst.ACTIVE, statusConst.EXECUTION_PENDING] : null,
    institution_id: institutionId ? institutionId.value : null,
  };
};
