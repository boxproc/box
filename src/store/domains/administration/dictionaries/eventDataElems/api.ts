import { apiClientService } from 'services';

import { DictionaryEventDataElemsFilterPrepared } from './types';

export const filterDictionaryEventDataElems = (data: DictionaryEventDataElemsFilterPrepared) =>
  apiClientService.post('ui/administration/dictionaries/event_data_elements', { data });
