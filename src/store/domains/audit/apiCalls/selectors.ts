import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { userInstitutionsOptionsSelector } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';

import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const defaultApiCallsSelector = (state: IStoreState) => state.audit.apiCalls.apiCalls;

export const apiCallsSelector = createSelector(
  defaultApiCallsSelector,
  userInstitutionsOptionsSelector,
  (items, institutionsOptions) => items && items.map(item => {
    const institution = institutionsOptions.find(el => el.value === item.institution_id);

    return prepareDataToRender(item, institution);
  })
);

export const defaultApiCallDetailsSelector = (state: IStoreState) =>
  state.audit.apiCalls.apiCallDetails;

export const apiCallDetailsSelector = createSelector(
  defaultApiCallsSelector,
  activeItemIdSelector,
  userInstitutionsOptionsSelector,
  defaultApiCallDetailsSelector,
  (items, currentId, institutionsOptions, apiCallDetails) => {
    const current = items.find(el => el.id === currentId);

    return {
      ...prepareDataToRender(current),
      requestBody: apiCallDetails && apiCallDetails.request_body,
      responseBody: apiCallDetails && apiCallDetails.response_body,
      institutionId: institutionsOptions.find(el => el.value === current.institution_id),
    };
  }
);

export const isLoadingApiCallsSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_API_CALLS,
]);

export const isGettingApiCallDetailsSelector = createLoadingSelector([
  ActionTypeKeys.GET_DETAILS_API_CALLS,
]);
