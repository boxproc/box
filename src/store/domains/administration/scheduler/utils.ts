import { executableTypeOptions, statusTypesOptions } from 'consts';

import {
  AdminSchedulerEditableItem,
  AdminSchedulerItem,
  AdminSchedulerJobActionPrepared
} from './types';

export const prepareValuesToSend =
  (values: Partial<AdminSchedulerEditableItem>) => {
    return {
      id: values.id,
      name: values.name,
      description: values.description,
      cron_expression: values.cronExpression,
      executable: values.executable,
      log_location: values.logLocation,
      last_execution_datetime: values.lastExecutionDatetime,
      last_execution_result: values.lastExecutionResult,
      institution_id: values.institutionId && values.institutionId.value,
      executable_type: values.institutionId && values.executableType.value,
      status: values.status && values.status.value,
    };
  };
export const prepareValuesToSendActions =
  (values: Partial<AdminSchedulerJobActionPrepared>) => {
    return {
      task_id: values.taskId,
      task_command: values.taskCommand,
    };
  };

export const prepareValuesToRender = (item: AdminSchedulerItem) => {
  if (!item) {
    return null;
  }

  return {
    id: item.id,
    name: item.name,
    description: item.description,
    cronExpression: item.cron_expression,
    executable: item.executable,
    logLocation: item.log_location,
    lastExecutionDatetime: item.last_execution_datetime,
    lastExecutionResult: item.last_execution_result,
    status: statusTypesOptions.find(el => el.value === item.status)
      && statusTypesOptions.find(el => el.value === item.status).label,
    executableType: executableTypeOptions.find(el => el.value === item.executable_type).label,
  };
};

export const prepareDetailsToRender = (item: AdminSchedulerItem) => {
  if (!item) {
    return null;
  }

  return {
    ...prepareValuesToRender(item),
    status: statusTypesOptions.find(el => el.value === item.status),
    executableType: executableTypeOptions.find(el => el.value === item.executable_type),
  };
};
