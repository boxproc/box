import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import { dictionaryAccountStatusesData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryAccountStatuses = () =>
  // throttleUtil.getDataAfter(dictionaryAccountStatusesData, 500);
  apiClient.post(apiUrls.dictionaries.GET_ACCOUNT_STATUSES);
