import { constsPathNames } from 'consts';

import { apiClient } from 'services';

// import {
//   currencyCodesData,
//   institutionsData,
// } from './mock';

// import { throttleUtil } from 'utils';

export const getCurrencyCodes = () =>
  // throttleUtil.getDataAfter(currencyCodesData, 500);
  apiClient.post(constsPathNames.GET_CURRENCIES);

export const getCountryCodes = () =>
  apiClient.post(constsPathNames.GET_COUNTRIES);

export const getInstitutions = () =>
  // throttleUtil.getDataAfter(institutionsData, 500);
  apiClient.post(constsPathNames.GET_INSTITUTIONS);
