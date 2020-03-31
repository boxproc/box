import { createSelector } from 'reselect';

import { activeItemIdSelector } from 'store/domains/utils';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const defaultScheduledJobsSelector = (state: IStoreState) =>
  state.audit.scheduledJobs.schedulerJobs;

export const scheduledJobsSelector = createSelector(
  defaultScheduledJobsSelector,
  jobs => jobs && jobs.map(job => prepareDataToRender(job)));

export const currentScheduledJobIdSelector = createSelector(
  defaultScheduledJobsSelector,
  activeItemIdSelector,
  (jobs, currentId) => {
    const current = jobs.find(job => job.id === currentId);

    return current && current.scheduler_id;
  });

export const currentScheduledJobNameSelector = createSelector(
  defaultScheduledJobsSelector,
  activeItemIdSelector,
  (jobs, currentId) => {
    const current = jobs.find(job => job.id === currentId);

    return current && current.scheduler_name;
  });

export const isScheduledJobsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_SCHEDULED_JOBS,
]);

export const isFilteringScheduledJobsByIdSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_SCHEDULED_JOBS_BY_ID,
]);
