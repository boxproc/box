import { createSelector } from 'reselect';

import { selectActiveItemId } from 'store/domains/utils';

import { StoreState } from 'store';
import { preparedValuesToRender } from './utils';

export const selectDefaultAuditScheduledJobs = (state: StoreState) =>
  state.audit.scheduledJobs.schedulerJobs;

export const selectAuditScheduledJobs = createSelector(
  selectDefaultAuditScheduledJobs,
  jobs => jobs && jobs.asMutable().map(job => preparedValuesToRender(job)));

export const selectAuditScheduledJobsSchedulerId = createSelector(
  selectDefaultAuditScheduledJobs,
  selectActiveItemId,
  (jobs, currentId) => {
    const current = jobs.find(job => job.id === currentId);

    return current && current.scheduler_id;
  });

export const selectAuditScheduledJobsSchedulerName = createSelector(
  selectDefaultAuditScheduledJobs,
  selectActiveItemId,
  (jobs, currentId) => {
    const current = jobs.find(job => job.id === currentId);

    return current && current.scheduler_name;
  });
