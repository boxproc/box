import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import { dictionaryTransactionTypesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryTransactionTypes = () =>
  // throttleUtil.getDataAfter(dictionaryTransactionTypesData, 500);
  apiClient.post(apiUrls.dictionaries.GET_TRANSACTION_TYPES);
