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
    scheduler: values.scheduler_name,
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

  const { institutionId, scheduler, scheduledJobsDateTimeFrom, scheduledJobsDateTimeTo } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    scheduler_id: scheduler ? scheduler.value : null,
    start_datetime: scheduledJobsDateTimeFrom ? scheduledJobsDateTimeFrom : null,
    finish_datetime: scheduledJobsDateTimeTo ? scheduledJobsDateTimeTo : null,
  };
};
