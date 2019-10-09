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

  return {
    id: values.id,
    schedulerId: values.scheduler_id,
    dateFrom: values.start_datetime,
    dateTo: values.finish_datetime,
    executionResult: values.error_description,
    errorDescription: values.error_description,
  };
};

export const preparedFilterToSend = (params: Partial<AuditScheduledJobsFilter>):
  Partial<AuditScheduledJobsFilterPrepared> => {
  if (!params) {
    return null;
  }

  const { institutionId, scheduler, dateFrom, dateTo } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    scheduler_id: scheduler ? scheduler.value : null,
    start_datetime: dateFrom ? dateFrom : null,
    finish_datetime: dateTo ? dateTo : null,
  };
};
