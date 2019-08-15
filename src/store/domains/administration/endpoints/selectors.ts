import { createSelector } from 'reselect';
import { selectInstitutionsOptions } from 'store/domains/consts';
import { StoreState } from 'store/StoreState';
import { preparedValuesDetailsToRender, preparedValuesToRender } from './utils';

export const selectAdminCurrentEndpointId = (state: StoreState) =>
  state.administration.adminEndpoints.currentEndpointId;

export const selectDefaultAdminEndpoints = (state: StoreState) =>
  state.administration.adminEndpoints && state.administration.adminEndpoints.endpoints;

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
    selectAdminEndpoints,
    selectAdminCurrentEndpointId,
    selectInstitutionsOptions,
    selectDefaultAdminEndpoints,
    (endpoints, currentId, institutions, defaultEndpoints) => {
      const current = endpoints.find(el => el.id === currentId);
      const currentDefault = defaultEndpoints.find(el => el.id === currentId);

      return {
        ...preparedValuesDetailsToRender(current),
        institutionId: currentDefault && institutions
          && institutions.find(el => el.value ===  currentDefault.institution_id),
      };
    }
  );
