// import { dictionariesPathNames } from 'consts';

// import { apiClient } from 'services';

import { dictionaryCardStatusesData } from './mock';

import { throttleUtil } from 'utils';

export const getDictionaryCardStatuses = () =>
  throttleUtil.getDataAfter(dictionaryCardStatusesData, 500);
  // apiClient.post(dictionariesPathNames.GET_CARD_STATUSES);
