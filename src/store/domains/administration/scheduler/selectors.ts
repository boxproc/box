import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { selectInstitutionsOptions } from 'store/domains/login';
import { selectActiveItemId } from 'store/domains/utils';
import { prepareDetailsToRender, prepareValuesToRender } from './utils';

export const selectDefaultAdminSchedulerJobsItems = (state: StoreState) =>
  state.administration.scheduler.scheduler;

export const selectAdminSchedulerJobsItems = createSelector(
  selectDefaultAdminSchedulerJobsItems,
  selectInstitutionsOptions,
  (items, institutionsOptions) => items && items.map(item => {
    const institution = institutionsOptions.find(el => el.value === item.institution_id);

    return prepareValuesToRender(item, institution);
  })
);

export const selectSchedulerJobValues = createSelector(
  selectDefaultAdminSchedulerJobsItems,
  selectInstitutionsOptions,
  selectActiveItemId,
  (items, institutions, currentId) => {
    const current = items && items.find(item => item.id === currentId);

    return {
      ...prepareDetailsToRender(current),
      institutionId: current && institutions.find(el => el.value === current.institution_id),
    };
  }
);

export const selectCurrentSchedulerName = createSelector(
  selectSchedulerJobValues,
  scheduler => scheduler && scheduler.name
);

export const selectCurrentSchedulerStatus = createSelector(
  selectSchedulerJobValues,
  scheduler => scheduler && scheduler.status.label
);

export const selectDefaultSchedulerNamesByInstIdOptions = (state: StoreState) =>
  state.administration.scheduler.schedulerNames;

export const selectSchedulerNamesByInstIdOptions = createSelector(
  selectDefaultSchedulerNamesByInstIdOptions,
  items => items && items.asMutable().map(item => {
    return {
      value: item.id,
      label: item.name,
    };
  })
);
