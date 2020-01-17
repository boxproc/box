import { ImmutableArray } from 'seamless-immutable';

import { SelectValue } from 'types';

export interface DictionaryEventDataElemsItemResp {
  event_id: number;
  description: string;
  name: string;
  data_type: string;
}

export interface DictionaryEventDataElemsItem {
  eventId: number;
  description: string;
  name: string;
  dataType: string;
  event: string;
}

export interface DictionaryEventDataElemsDataResp {
  event_data_elements: Array<DictionaryEventDataElemsItemResp>;
}

export interface DictionaryEventDataElemsFilter {
  eventId?: SelectValue;
}

export interface DictionaryEventDataElemsFilterPrepared {
  event_id?: number | string;
}

export interface DictionaryEventDataElemsState {
  eventDataElems: ImmutableArray<DictionaryEventDataElemsItemResp>;
}
