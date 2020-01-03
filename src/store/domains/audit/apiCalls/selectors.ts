import { createSelector } from 'reselect';

import { selectInstitutionsOptions } from 'store/domains/login';
import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';

import { prepareValuesToRender } from './utils';

export const selectDefaultAuditApiCalls = (state: StoreState) =>
  state.audit.apiCalls.apiCalls;

export const selectAuditApiCalls = createSelector(
  selectDefaultAuditApiCalls,
  selectInstitutionsOptions,
  (items, institutionsOptions) => items && items.asMutable().map(item => {
    const institution = institutionsOptions.find(el => el.value === item.institution_id);

    return prepareValuesToRender(item, institution);
  })
);

export const selectDefaultAuditApiCallDetails = (state: StoreState) =>
  state.audit.apiCalls.apiCallDetails;

export const selectAuditApiCallDetails = createSelector(
  selectDefaultAuditApiCalls,
  selectActiveItemId,
  selectInstitutionsOptions,
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
