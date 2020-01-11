import { dictionariesURLs } from 'consts';

import { apiClient } from 'services';

// import { dictionaryEventsData } from './mock';

// import { throttleUtil } from 'utils';

export const getDictionaryEvents = () =>
  // throttleUtil.getDataAfter(dictionaryEventsData, 500);
  apiClient.post(dictionariesURLs.GET_EVENTS);
