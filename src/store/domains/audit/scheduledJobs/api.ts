import { apiClientService } from 'services';

import { IScheduledJobsFilterToSend, ISchedulerId } from './types';
// import { scheduledJobsMock } from './mock';
// import { throttleUtil } from 'utils';

/**
 * Get scheduled jobs API
 */
export const filterScheduledJobs = (data: Partial<IScheduledJobsFilterToSend>) =>
  // throttleUtil.getDataAfter(scheduledJobsMock, 500);
  apiClientService.post('ui/audit/scheduler_jobs/get', { data });

/**
 * Get scheduled jobs by ID API
 */
export const filterScheduledJobsById = (data: ISchedulerId) =>
  apiClientService.post('ui/audit/scheduler_jobs/get', { data });
