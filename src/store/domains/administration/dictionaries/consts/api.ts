import { dictionariesURLs } from 'consts';

import { apiClient } from 'services';

// import {
//   dictionaryCardStatusesData,
//   dictionaryEndpointTypesData,
//   dictionaryInterfaceTypesData,
// } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryCardStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryCardStatusesData, 500);
  apiClient.post(dictionariesURLs.GET_CARD_STATUSES);

export const getDictionaryEndpointTypes = () =>
  // throttleUtil.getDataAfter(dictionaryEndpointTypesData, 500);
  apiClient.post(dictionariesURLs.GET_ENDPOINT_TYPES);

export const getDictionaryInterfaceTypes = () =>
  // throttleUtil.getDataAfter(dictionaryInterfaceTypesData, 500);
  apiClient.post(dictionariesURLs.GET_INTERFACE_TYPES);

export const getDictionaryStatementCycleTypes = () =>
  apiClient.post(dictionariesURLs.GET_STATEMENT_CYCLE_TYPES);
