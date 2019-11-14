import { apiClient } from 'services';

import { auditPathNames } from 'consts';

import { AuditScheduledJobsFilterPrepared, SchedulerId } from './types';
// import { schedulerJobsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterAuditScheduledJobs = (data: Partial<AuditScheduledJobsFilterPrepared>) =>
  // throttleUtil.getDataAfter(schedulerJobsItems, 500);
  apiClient.post(auditPathNames.GET_SCHEDULED_JOBS, { data });

export const filterScheduledJobsById = (data: SchedulerId) =>
  apiClient.post(auditPathNames.GET_SCHEDULED_JOBS, { data });
