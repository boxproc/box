import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { StoreState } from 'store/StoreState';
import { prepareDetailsToRender, prepareValuesToRender } from './utils';

export const selectDefaultAdminSchedulerJobsItems = (state: StoreState) =>
  state.administration.scheduler.scheduler;

export const selectAdminSchedulerJobsItems = createSelector(
  selectDefaultAdminSchedulerJobsItems,
  selectInstitutionsOptions,
  (items, institutionsOptions) => items && items.asMutable().map(item => {
    return {
      ...prepareValuesToRender(item),
      institutionId: institutionsOptions.find(el => el.value === item.institution_id)
        && institutionsOptions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectSchedulerJobId = (state: StoreState) =>
  state.administration.scheduler.currentSchedulerId;

export const selectSchedulerJobValues = createSelector(
  selectDefaultAdminSchedulerJobsItems,
  selectInstitutionsOptions,
  selectSchedulerJobId,
  (items, institutions, currentId) => {
    const current = items && items.asMutable().find(item => item.id === currentId);

    return {
      ...prepareDetailsToRender(current),
      institutionId: institutions.find(el => el.value === current.institution_id),
    };
  }
);

export const selectCurrentSchedulerName = createSelector(
  selectSchedulerJobValues,
  scheduler => scheduler && scheduler.name
);

export const selectCurrentCronExpression = createSelector(
  selectSchedulerJobValues,
  scheduler => scheduler && scheduler.cronExpression
);

export const selectCronExpression = (state: StoreState) =>
  state.administration.scheduler.cronExpression;
