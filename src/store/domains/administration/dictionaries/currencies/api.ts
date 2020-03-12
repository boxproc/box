import { apiClient } from 'services';

// import { dictionaryCurrenciesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryCurrencies = () =>
  // throttleUtil.getDataAfter(dictionaryCurrenciesData, 500);
  apiClient.post('ui/administration/dictionaries/currencies');
