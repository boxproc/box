import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { StoreState } from 'store/StoreState';
import { prepareDetailsToRender, prepareValuesToRender } from './utils';

export const selectDefaultAdminSchedulerJobsItems = (state: StoreState) =>
  state.administration.scheduler.scheduler.asMutable();

export const selectAdminSchedulerJobsItems = createSelector(
  selectDefaultAdminSchedulerJobsItems,
  selectInstitutionsOptions,
  (items, institutionsOptions) => items && items.map(item => {
    return {
      ...prepareValuesToRender(item),
      institutionId: institutionsOptions.find(el => el.value === item.institution_id).label,
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
    const current = items && items.find(item => item.id === currentId);

    return {
      ...prepareDetailsToRender(current),
      institutionId: institutions.find(el => el.value === current.institution_id),
    };
  }
);
