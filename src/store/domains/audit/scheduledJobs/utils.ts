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
    startDatetime: values.start_datetime,
    finishDatetime: values.finish_datetime,
    executionResult: values.error_description,
    errorDescription: values.error_description,
  };
};

export const preparedFilterToSend = (params: Partial<AuditScheduledJobsFilter>):
  Partial<AuditScheduledJobsFilterPrepared> => {
  if (!params) {
    return null;
  }

  const { institutionId, scheduler, startDatetime, finishDatetime } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    scheduler_id: scheduler ? scheduler.value : null,
    start_datetime: startDatetime ? startDatetime : null,
    finish_datetime: finishDatetime ? finishDatetime : null,
  };
};
