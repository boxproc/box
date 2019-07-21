import { createSelector } from 'reselect';

import { executableTypeOptions, statusTypesOptions } from 'consts';

import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';

import { camelizeFieldsUtil } from 'utils';

export const selectDefaultAdminSchedulerJobsItems = (state: StoreState) =>
  state.administration.adminSchedulerJobs.scheduler;

export const selectAdminSchedulerJobsItems = createSelector(
  selectDefaultAdminSchedulerJobsItems,
  selectInstitutionsOptions,
  (items, institutionsOptions) => items && items.asMutable().map(item => {
    return {
      ...camelizeFieldsUtil.camelizeFields(item, 'camelcase'),
      status: statusTypesOptions.find(el => el.value === item.status).label,
      executableType: executableTypeOptions.find(el => el.value === item.executable_type).label,
      institutionId: institutionsOptions.find(el => el.value === item.institution_id).label,
    };
  })
);
