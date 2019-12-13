import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';
import { preparedValuesDetailsToRender, preparedValuesToRender } from './utils';

export const selectDefaultAdminEndpoints = (state: StoreState) =>
  state.administration.endpoints && state.administration.endpoints.endpoints;

export const selectAdminEndpoints = createSelector(
  selectDefaultAdminEndpoints,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return preparedValuesToRender(item, institution);
  })
);

export const selectAdminCurrentEndpoint = createSelector(
  selectDefaultAdminEndpoints,
  selectActiveItemId,
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

export const selectAdminCurrentEndpointName = createSelector(
  selectAdminCurrentEndpoint,
  endpoint => endpoint && endpoint.name
);

export const selectDefaultEndpointsByInstIdOptions = (state: StoreState) =>
  state.administration.endpoints.endpointsByInstitutionId;

export const selectEndpointsByInstIdOptions = createSelector(
  selectDefaultEndpointsByInstIdOptions,
  items => items && items.asMutable().map(item => {
    return {
      value: item.id,
      label: item.name,
    };
  })
);
