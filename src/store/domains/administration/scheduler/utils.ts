import {
  executableTypeOptions,
  lastExecutionResultOptions,
  schedulerStatusTypesOptions,
  statusTypesCodes,
} from 'consts';

import {
  AdminSchedulerEditableItem,
  AdminSchedulerFilter,
  AdminSchedulerItem,
  AdminSchedulerJobActionPrepared
} from './types';

export const prepareValuesToSend = (values: Partial<AdminSchedulerEditableItem>) => {
    return {
      id: values.id,
      name: values.name,
      description: values.description,
      cron_expression: values.cronExpression,
      executable: values.executable,
      log_location: values.logLocation,
      last_execution_datetime: values.lastExecutionDatetime,
      last_execution_result: values.lastExecutionResult && values.lastExecutionResult.value,
      institution_id: values.institutionId && values.institutionId.value,
      executable_type: values.institutionId && values.executableType.value,
      status: values.status && values.status.value,
      parameters: values.parameters,
    };
  };
export const prepareValuesToSendActions =
  (values: AdminSchedulerJobActionPrepared) => {
    return {
      task_id: values.taskId,
      task_command: values.taskCommand,
    };
  };

export const prepareValuesToRender = (item: AdminSchedulerItem) => {
  if (!item) {
    return null;
  }

  const status = schedulerStatusTypesOptions.find(el => el.value === item.status);
  const lastExecutionResult = lastExecutionResultOptions
    .find(el => el.value === item.last_execution_result);
  const executableType = executableTypeOptions.find(el => el.value === item.executable_type);

  return {
    id: item.id,
    name: item.name,
    description: item.description,
    cronExpression: item.cron_expression,
    executable: item.executable,
    logLocation: item.log_location,
    lastExecutionDatetime: item.last_execution_datetime,
    lastExecutionResult: lastExecutionResult && lastExecutionResult.label,
    status: status && status.label,
    executableType: executableType && executableType.label,
    parameters: item.parameters,
  };
};

export const prepareDetailsToRender = (item: AdminSchedulerItem) => {
  if (!item) {
    return null;
  }

  return {
    ...prepareValuesToRender(item),
    status: schedulerStatusTypesOptions.find(el => el.value === item.status),
    lastExecutionResult:
      lastExecutionResultOptions.find(el => el.value === item.last_execution_result),
    executableType: executableTypeOptions.find(el => el.value === item.executable_type),
  };
};

export const preparedFilterToSend = (params: Partial<AdminSchedulerFilter>) => {
  if (!params) {
    return null;
  }

  const {
    name,
    activeStatusFlag,
  } = params;

  return {
    name: name ? name : null,
    status: activeStatusFlag ? [statusTypesCodes.ACTIVE, statusTypesCodes.EXECUTION_PENDING] : null,
  };
};
