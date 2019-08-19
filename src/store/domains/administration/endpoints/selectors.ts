import { createSelector } from 'reselect';
import { selectInstitutionsOptions } from 'store/domains/consts';
import { StoreState } from 'store/StoreState';
import { preparedValuesDetailsToRender, preparedValuesToRender } from './utils';

export const selectAdminCurrentEndpointId = (state: StoreState) =>
  state.administration.endpoints.currentEndpointId;

export const selectDefaultAdminEndpoints = (state: StoreState) =>
  state.administration.endpoints && state.administration.endpoints.endpoints;

export const selectAdminEndpoints = createSelector(
  selectDefaultAdminEndpoints,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...preparedValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectAdminCurrentEndpoint = createSelector(
  selectDefaultAdminEndpoints,
  selectAdminCurrentEndpointId,
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
