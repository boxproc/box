import { dictionariesURLs } from 'consts';

import { apiClient } from 'services';

// import { dictionaryAccountStatusesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryAccountStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryAccountStatusesData, 500);
  apiClient.post(dictionariesURLs.GET_ACCOUNT_STATUSES);
