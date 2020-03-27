import { createSelector } from 'reselect';

import { activeItemIdSelector } from 'store/domains/utils';

import { StoreState } from 'store';
import { preparedValuesToRender } from './utils';

export const selectDefaultAuditScheduledJobs = (state: StoreState) =>
  state.audit.scheduledJobs.schedulerJobs;

export const selectAuditScheduledJobs = createSelector(
  selectDefaultAuditScheduledJobs,
  jobs => jobs && jobs.map(job => preparedValuesToRender(job)));

export const selectAuditScheduledJobsSchedulerId = createSelector(
  selectDefaultAuditScheduledJobs,
  activeItemIdSelector,
  (jobs, currentId) => {
    const current = jobs.find(job => job.id === currentId);

    return current && current.scheduler_id;
  });

export const selectAuditScheduledJobsSchedulerName = createSelector(
  selectDefaultAuditScheduledJobs,
  activeItemIdSelector,
  (jobs, currentId) => {
    const current = jobs.find(job => job.id === currentId);

    return current && current.scheduler_name;
  });
