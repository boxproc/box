import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import {
//   dictionaryCardStatusesData,
//   dictionaryEndpointTypesData,
//   dictionaryInterfaceTypesData,
// } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryCardStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryCardStatusesData, 500);
  apiClient.post(apiUrls.dictionaries.GET_CARD_STATUSES);

export const getDictionaryEndpointTypes = () =>
  // throttleUtil.getDataAfter(dictionaryEndpointTypesData, 500);
  apiClient.post(apiUrls.endpoints.GET_TYPES);

export const getDictionaryInterfaceTypes = () =>
  // throttleUtil.getDataAfter(dictionaryInterfaceTypesData, 500);
  apiClient.post(apiUrls.interfaces.GET_TYPES);

export const getDictionaryStatementCycleTypes = () =>
  apiClient.post(apiUrls.dictionaries.GET_STATEMENT_CYCLE_TYPES);
