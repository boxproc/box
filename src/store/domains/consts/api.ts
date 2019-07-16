import { apiClient } from 'services';

// import {
  // currencyCodesData,
  // institutionsData,
// } from './mock';

// import { throttleUtil } from 'utils';

export const getCurrencyCodes = () =>
  // throttleUtil.getDataAfter(currencyCodesData, 1000);
  apiClient.post('/ui/administration/dictionaries/currencies/get_options');

export const getInstitutions = () =>
  // throttleUtil.getDataAfter(institutionsData, 1000);
  apiClient.post('/ui/institutions/get');
