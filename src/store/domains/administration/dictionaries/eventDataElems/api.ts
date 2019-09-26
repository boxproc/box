import { dictionariesPathNames } from 'consts';

import { apiClient } from 'services';

import { DictionaryEventDataElemsFilterPrepared } from './types';

export const filterDictionaryEventDataElems = (data: DictionaryEventDataElemsFilterPrepared) =>
  apiClient.post(dictionariesPathNames.GET_EVENT_DATA_ELEMS, { data });
