import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { userInstitutionsOptionsSelector } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender, prepareDetailsToRender } from './utils';

export const defaultSchedulerJobsSelector = (state: StoreState) =>
  state.administration.scheduler.scheduler;

export const schedulerJobsSelector = createSelector(
  defaultSchedulerJobsSelector,
  userInstitutionsOptionsSelector,
  (items, institutionsOptions) => items && items.map(item => {
    const institution = institutionsOptions.find(el => el.value === item.institution_id);

    return prepareDataToRender(item, institution);
  })
);

/**
 * Current scheduler job selectors
 */

export const currentSchedulerJobSelector = createSelector(
  defaultSchedulerJobsSelector,
  userInstitutionsOptionsSelector,
  activeItemIdSelector,
  (jobs, institutions, currentId) => {
    const currentJob = jobs && jobs.find(job => job.id === currentId);

    return {
      ...prepareDetailsToRender(currentJob),
      institutionId: currentJob && institutions.find(el => el.value === currentJob.institution_id),
    };
  }
);

export const currentSchedulerNameSelector = createSelector(
  currentSchedulerJobSelector,
  data => data && data.name
);

/**
 * Institution scheduler names selectors
 */

export const defaultInstSchedulerNamesOptions = (state: StoreState) =>
  state.administration.scheduler.schedulerNames;

export const instSchedulerNamesOptions = createSelector(
  defaultInstSchedulerNamesOptions,
  data => data && data.asMutable().map(el => {
    return {
      value: el.id,
      label: el.name,
    };
  })
);

/**
 * Scheduler loading selectors
 */

export const isSchedulerJobUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_SCHEDULER_JOB,
]);

export const isSchedulerJobsFilteringSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_SCHEDULER_JOBS,
]);

export const isSchedulerJobDeletingSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_SCHEDULER_JOB,
]);

export const isSchedulerJobNamesGettingSelector = createLoadingSelector([
  ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INST_ID,
]);
