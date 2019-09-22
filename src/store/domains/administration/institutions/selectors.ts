import { createSelector } from 'reselect';

import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';

import { preparedValuesDetailsToRender, prepareValuesToRender } from './utils';

export const selectDefaultAdminInstitutions = (state: StoreState) =>
  state.administration.institutions.institutions.asMutable();

export const selectAdminInstitutions = createSelector(
  selectDefaultAdminInstitutions,
  items => items && items.map(item => prepareValuesToRender(item))
);

export const selectAdminCurrentInstitution = createSelector(
  selectDefaultAdminInstitutions,
  selectActiveItemId,
  (institutions, currentId) => {
    const current = institutions.find(el => el.id === currentId);

    return preparedValuesDetailsToRender(current);
  }
);

export const selectAdminCurrentInstitutionName = createSelector(
  selectAdminCurrentInstitution,
  institution => institution && institution.name
);
