import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { userInstitutionsOptionsSelector } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';

import { prepareValuesToRender } from './utils';

export const selectDefaultAuditApiCalls = (state: StoreState) => state.audit.apiCalls.apiCalls;

export const selectAuditApiCalls = createSelector(
  selectDefaultAuditApiCalls,
  userInstitutionsOptionsSelector,
  (items, institutionsOptions) => items && items.map(item => {
    const institution = institutionsOptions.find(el => el.value === item.institution_id);

    return prepareValuesToRender(item, institution);
  })
);

export const selectDefaultAuditApiCallDetails = (state: StoreState) =>
  state.audit.apiCalls.apiCallDetails;

export const selectAuditApiCallDetails = createSelector(
  selectDefaultAuditApiCalls,
  activeItemIdSelector,
  userInstitutionsOptionsSelector,
  selectDefaultAuditApiCallDetails,
  (items, currentId, institutionsOptions, apiCallDetails) => {
    const current = items.find(el => el.id === currentId);

    return {
      ...prepareValuesToRender(current),
      requestBody: apiCallDetails && apiCallDetails.request_body,
      responseBody: apiCallDetails && apiCallDetails.response_body,
      institutionId: institutionsOptions.find(el => el.value === current.institution_id),
    };
  }
);
