import { dictionariesPathNames } from 'consts';

import { apiClient } from 'services';

// import { adminCurrenciesData } from './mock';

// import { throttleUtil } from 'utils';

export const getAdminCurrencies = () =>
  // throttleUtil.getDataAfter(adminCurrenciesData, 500);
  apiClient.post(dictionariesPathNames.GET_CURRENCIES);
