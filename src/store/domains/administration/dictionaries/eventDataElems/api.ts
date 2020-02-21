import { apiUrls } from 'consts';
import { apiClient } from 'services';

import { DictionaryEventDataElemsFilterPrepared } from './types';

export const filterDictionaryEventDataElems = (data: DictionaryEventDataElemsFilterPrepared) =>
  apiClient.post(apiUrls.dictionaries.GET_EVENT_DATA_ELEMS, { data });
