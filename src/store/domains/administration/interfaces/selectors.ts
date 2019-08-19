import { createSelector } from 'reselect';
import { selectInstitutionsOptions } from 'store/domains/consts';
import { StoreState } from 'store/StoreState';
import { preparedValuesDetailsToRender, preparedValuesToRender } from './utils';

export const selectAdminCurrentInterfaceId = (state: StoreState) =>
  state.administration.interfaces.currentInterfaceId;

export const selectDefaultAdminInterface = (state: StoreState) =>
  state.administration.interfaces && state.administration.interfaces.interfaces;

export const selectAdminInterface = createSelector(
  selectDefaultAdminInterface,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...preparedValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectAdminCurrentInterface = createSelector(
  selectDefaultAdminInterface,
  selectAdminCurrentInterfaceId,
  selectInstitutionsOptions,
  (endpoints, currentId, institutions) => {
    const current = endpoints.find(el => el.id === currentId);

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: current && institutions
        && institutions.find(el => el.value === current.institution_id),
    };
  }
);
