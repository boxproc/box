import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { camelizeFieldsUtil } from 'utils';

export const selectDefaultAdminSchedulerJobsItems = (state: StoreState) =>
  state.administration.adminSchedulerJobs.scheduler;

export const selectAdminSchedulerJobsItems = createSelector(
  selectDefaultAdminSchedulerJobsItems,
  items => items && items.asMutable().map(item => {
    return camelizeFieldsUtil.camelizeFields(item, 'camelcase');
  })
);
