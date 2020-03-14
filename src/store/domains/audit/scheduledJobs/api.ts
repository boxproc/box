import { apiClientService } from 'services';

import { AuditScheduledJobsFilterPrepared, SchedulerId } from './types';
// import { schedulerJobsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterAuditScheduledJobs = (data: Partial<AuditScheduledJobsFilterPrepared>) =>
  // throttleUtil.getDataAfter(schedulerJobsItems, 500);
  apiClientService.post('ui/audit/scheduler_jobs/get', { data });

export const filterScheduledJobsById = (data: SchedulerId) =>
  apiClientService.post('ui/audit/scheduler_jobs/get', { data });
