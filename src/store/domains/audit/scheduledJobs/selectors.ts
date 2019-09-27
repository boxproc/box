import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';
import { preparedValuesToRender } from './utils';

export const selectDefaultAuditScheduledJobs = (state: StoreState) =>
  state.audit.scheduledJobs.schedulerJobs;

export const selectAuditScheduledJobs = createSelector(
  selectDefaultAuditScheduledJobs,
  items => items && items.asMutable().map(item => preparedValuesToRender(item)));
