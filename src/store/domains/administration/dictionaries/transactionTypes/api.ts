import { apiClient } from 'services';

// import { dictionaryTransactionTypesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryTransactionTypes = () =>
  // throttleUtil.getDataAfter(dictionaryTransactionTypesData, 500);
  apiClient.post('ui/administration/dictionaries/transaction_types');
