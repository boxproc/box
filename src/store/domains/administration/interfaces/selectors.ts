import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';
import { preparedValuesDetailsToRender, preparedValuesToRender } from './utils';

export const selectDefaultAdminInterface = (state: StoreState) =>
  state.administration.interfaces && state.administration.interfaces.interfaces;

export const selectAdminInterface = createSelector(
  selectDefaultAdminInterface,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return {
      ...preparedValuesToRender(item),
      institutionId: institution && institution.label,
    };
  })
);

export const selectAdminCurrentInterface = createSelector(
  selectDefaultAdminInterface,
  selectActiveItemId,
  selectInstitutionsOptions,
  (interfaces, currentId, institutions) => {
    const current = interfaces.find(el => el.id === currentId);

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: current && institutions
        && institutions.find(el => el.value === current.institution_id),
    };
  }
);

export const selectAdminCurrentInterfaceName = createSelector(
  selectAdminCurrentInterface,
  currentInterface => currentInterface && currentInterface.name
);

export const selectAdminInterfaceName = createSelector(
  selectDefaultAdminInterface,
  selectActiveItemId,
  (interfaces, currentId) => {
    const current = interfaces.find(el => el.id === currentId);

    return current && current.name;
  }
);
