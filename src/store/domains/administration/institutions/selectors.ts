import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { selectActiveItemId } from 'store/domains/utils';

import { prepareDataToRender, preparedDataDetailsToRender } from './utils';

export const selectDefaultAdminInstitutions = (state: StoreState) =>
  state.administration.institutions.institutions;

export const selectAdminInstitutions = createSelector(
  selectDefaultAdminInstitutions,
  items => items && items.map(item => prepareDataToRender(item))
);

export const selectAdminInstitutionsOptions = createSelector(
  selectDefaultAdminInstitutions,
  items => items && items.asMutable().map(item => {
    return {
      value: item.id,
      label: item.institution_name,
    };
  })
);

export const selectAdminCurrentInstitution = createSelector(
  selectDefaultAdminInstitutions,
  selectActiveItemId,
  (institutions, currentId) => {
    const current = institutions.find(el => el.id === currentId);

    return preparedDataDetailsToRender(current);
  }
);

export const selectAdminCurrentInstitutionName = createSelector(
  selectAdminCurrentInstitution,
  institution => institution && institution.institutionName
);
