import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import { dictionaryCountriesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryCountries = () =>
  // throttleUtil.getDataAfter(dictionaryCountriesData, 500);
  apiClient.post(apiUrls.dictionaries.GET_COUNTRIES);
