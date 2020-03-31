import { lastExecutionResultOptions } from 'consts';

import {
  IScheduledJob,
  IScheduledJobData,
  IScheduledJobsFilter,
  IScheduledJobsFilterToSend,
} from './types';

export const prepareDataToRender = (data: IScheduledJobData): IScheduledJob => {
  if (!data) {
    return null;
  }

  const executionResult = lastExecutionResultOptions
    .find(el => el.value === data.execution_result);

  return {
    id: data.id,
    scheduler: data.scheduler_name,
    dateTimeFrom: data.start_datetime,
    dateTimeTo: data.finish_datetime,
    executionResult: executionResult && executionResult.label,
    errorDescription: data.error_description,
  };
};

export const prepareFilterToSend = (data: Partial<IScheduledJobsFilter>):
  Partial<IScheduledJobsFilterToSend> => {
  if (!data) {
    return null;
  }

  const { institutionId, scheduler, scheduledJobsDateTimeFrom, scheduledJobsDateTimeTo } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
    scheduler_id: scheduler ? scheduler.value : null,
    start_datetime: scheduledJobsDateTimeFrom ? scheduledJobsDateTimeFrom : null,
    finish_datetime: scheduledJobsDateTimeTo ? scheduledJobsDateTimeTo : null,
  };
};
