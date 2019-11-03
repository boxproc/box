import { dictionariesPathNames } from 'consts';

import { apiClient } from 'services';

// import { dictionaryTransactionTypesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryTransactionTypes = () =>
  // throttleUtil.getDataAfter(dictionaryTransactionTypesData, 500);
  apiClient.post(dictionariesPathNames.GET_TRANSACTION_TYPES);
