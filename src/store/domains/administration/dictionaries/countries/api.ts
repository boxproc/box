import { dictionariesPathNames } from 'consts';

import { apiClient } from 'services';

// import { adminCountriesData } from './mock';

// import { throttleUtil } from 'utils';

export const getAdminCountries = () =>
  // throttleUtil.getDataAfter(adminCountriesData, 500);
  apiClient.post(dictionariesPathNames.GET_COUNTRIES);
