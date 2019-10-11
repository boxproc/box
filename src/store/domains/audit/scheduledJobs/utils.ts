import { lastExecutionResultOptions } from 'consts';

import {
  AuditScheduledJobsFilter,
  AuditScheduledJobsFilterPrepared,
  AuditScheduledJobsItem,
  AuditScheduledJobsItemPrepared,
} from './types';

export const preparedValuesToRender = (values: AuditScheduledJobsItem):
  AuditScheduledJobsItemPrepared => {
  if (!values) {
    return null;
  }

  const executionResult = lastExecutionResultOptions
    .find(el => el.value === values.execution_result);

  return {
    id: values.id,
    scheduler: values.name,
    dateTimeFrom: values.start_datetime,
    dateTimeTo: values.finish_datetime,
    executionResult: executionResult && executionResult.label,
    errorDescription: values.error_description,
  };
};

export const preparedFilterToSend = (params: Partial<AuditScheduledJobsFilter>):
  Partial<AuditScheduledJobsFilterPrepared> => {
  if (!params) {
    return null;
  }

  const { institutionId, scheduler, dateTimeFrom, dateTimeTo } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    scheduler_id: scheduler ? scheduler.value : null,
    start_datetime: dateTimeFrom ? dateTimeFrom : null,
    finish_datetime: dateTimeTo ? dateTimeTo : null,
  };
};
