import { apiClient } from 'services';

import { DictionaryEventDataElemsFilterPrepared } from './types';

export const filterDictionaryEventDataElems = (data: DictionaryEventDataElemsFilterPrepared) =>
  apiClient.post('ui/administration/dictionaries/event_data_elements', { data });
