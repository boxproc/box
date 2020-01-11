import { dictionariesURLs } from 'consts';

import { apiClient } from 'services';

// import { dictionaryCurrenciesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryCurrencies = () =>
  // throttleUtil.getDataAfter(dictionaryCurrenciesData, 500);
  apiClient.post(dictionariesURLs.GET_CURRENCIES);
