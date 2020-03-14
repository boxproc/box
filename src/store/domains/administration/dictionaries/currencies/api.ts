import { apiClientService } from 'services';

// import { dictionaryCurrenciesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryCurrencies = () =>
  // throttleUtil.getDataAfter(dictionaryCurrenciesData, 500);
  apiClientService.post('ui/administration/dictionaries/currencies');
