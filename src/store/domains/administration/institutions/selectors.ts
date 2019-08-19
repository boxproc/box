import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { preparedValuesDetailsToRender, prepareValuesToRender } from './utils';

export const selectDefaultAdminInstitutions = (state: StoreState) =>
  state.administration.institutions.institutions.asMutable();

export const selectAdminInstitutions = createSelector(
  selectDefaultAdminInstitutions,
  items => items && items.map(item => {

    return {
      ...prepareValuesToRender(item),
    };
  })
);

export const selectAdminInstitutionCurrentId = (state: StoreState) =>
  state.administration.institutions.currentInstitutionId;

export const selectAdminCurrentInstitution = createSelector(
  selectDefaultAdminInstitutions,
  selectAdminInstitutionCurrentId,
  (institutions, currentId) => {
    const current = institutions.find(el => el.id === currentId);

    return {
      ...preparedValuesDetailsToRender(current),
    };
  }
);

export const selectAdminCurrentInstitutionName = createSelector(
  selectAdminCurrentInstitution,
  institution => institution && institution.name
);
