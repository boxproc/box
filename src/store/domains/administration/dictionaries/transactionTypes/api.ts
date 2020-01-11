import { dictionariesURLs } from 'consts';

import { apiClient } from 'services';

// import { dictionaryTransactionTypesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryTransactionTypes = () =>
  // throttleUtil.getDataAfter(dictionaryTransactionTypesData, 500);
  apiClient.post(dictionariesURLs.GET_TRANSACTION_TYPES);
