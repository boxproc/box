import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { userInstitutionsOptionsSelector } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';

import { ActionTypeKeys } from './actionTypes';
import { preparedDataDetailsToRender, preparedDataToRender } from './utils';

export const defaultEndpointsSelector = (state: StoreState) =>
  state.administration.endpoints.endpoints;

export const endpointsSelector = createSelector(
  defaultEndpointsSelector,
  userInstitutionsOptionsSelector,
  (endpoints, institutions) => endpoints && endpoints.map(endpoint => {
    const institution = institutions.find(el => el.value === endpoint.institution_id);

    return preparedDataToRender(endpoint, institution);
  })
);

/**
 * Current endpoint selectors
 */

export const currentEndpointSelector = createSelector(
  defaultEndpointsSelector,
  activeItemIdSelector,
  userInstitutionsOptionsSelector,
  (endpoints, currentId, institutions) => {
    const currentEndpoint = endpoints.find(el => el.id === currentId);

    return {
      ...preparedDataDetailsToRender(currentEndpoint),
      institutionId: currentEndpoint
        && institutions
        && institutions.find(el => el.value === currentEndpoint.institution_id),
    };
  }
);

export const currentEndpointNameSelector = createSelector(
  currentEndpointSelector,
  data => data && data.name
);

export const isFilteringEndpointsSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_ENDPOINTS,
]);

export const isUpdatingEndpointSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_ENDPOINT,
]);

export const isDeletingEndpointSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_ENDPOINT,
]);

/**
 * Institution endpoints selectors
 */

export const defaultEndpointsByInstIdSelector = (state: StoreState) =>
  state.administration.endpoints.endpointsByInstId;

export const endpointsByInstIdOptionsSelector = createSelector(
  defaultEndpointsByInstIdSelector,
  data => data && data.asMutable().map(el => {
    return {
      value: el.id,
      label: el.name,
    };
  })
);

export const isInstEndpointsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_ENDPOINTS_BY_INST_ID,
]);
