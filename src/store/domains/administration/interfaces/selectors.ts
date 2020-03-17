import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { selectInstitutionsOptions } from 'store/domains/login';
import { selectActiveItemId } from 'store/domains/utils';
import { preparedDataToRender, preparedValuesDetailsToRender } from './utils';

export const selectDefaultAdminInterface = (state: StoreState) =>
  state.administration.interfaces && state.administration.interfaces.interfaces;

export const selectAdminInterface = createSelector(
  selectDefaultAdminInterface,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return preparedDataToRender(item, institution);
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
