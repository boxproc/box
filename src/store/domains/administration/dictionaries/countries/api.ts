import { apiClient } from 'services';

// import { dictionaryCountriesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryCountries = () =>
  // throttleUtil.getDataAfter(dictionaryCountriesData, 500);
  apiClient.post('ui/administration/dictionaries/countries');
