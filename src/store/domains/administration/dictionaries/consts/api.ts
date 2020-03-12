import { apiClient } from 'services';

// import {
//   dictionaryCardStatusesData,
//   dictionaryEndpointTypesData,
//   dictionaryInterfaceTypesData,
// } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryCardStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryCardStatusesData, 500);
  apiClient.post('ui/administration/dictionaries/card_statuses');

export const getDictionaryEndpointTypes = () =>
  // throttleUtil.getDataAfter(dictionaryEndpointTypesData, 500);
  apiClient.post('ui/administration/endpoints/types');

export const getDictionaryInterfaceTypes = () =>
  // throttleUtil.getDataAfter(dictionaryInterfaceTypesData, 500);
  apiClient.post('ui/administration/interfaces/types');

export const getDictionaryStatementCycleTypes = () =>
  apiClient.post('ui/ledger/statements/get_statement_cycle_types');
