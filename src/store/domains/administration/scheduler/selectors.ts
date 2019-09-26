import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
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

export const selectSchedulerJobValues = createSelector(
  selectDefaultAdminSchedulerJobsItems,
  selectInstitutionsOptions,
  selectActiveItemId,
  (items, institutions, currentId) => {
    const current = items && items.asMutable().find(item => item.id === currentId);

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
