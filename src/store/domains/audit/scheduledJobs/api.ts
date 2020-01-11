import { apiClient } from 'services';

import { auditURLs } from 'consts';

import { AuditScheduledJobsFilterPrepared, SchedulerId } from './types';
// import { schedulerJobsItems } from './mock';

// import { throttleUtil } from 'utils';

export const filterAuditScheduledJobs = (data: Partial<AuditScheduledJobsFilterPrepared>) =>
  // throttleUtil.getDataAfter(schedulerJobsItems, 500);
  apiClient.post(auditURLs.GET_SCHEDULED_JOBS, { data });

export const filterScheduledJobsById = (data: SchedulerId) =>
  apiClient.post(auditURLs.GET_SCHEDULED_JOBS, { data });
