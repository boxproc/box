import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType } from 'types';

export interface DictionaryEventsItem {
  id: number;
  name: string;
}

export interface DictionaryEventsData extends ResponseStatusType {
  events: Array<DictionaryEventsItem>;
}

export interface DictionaryEventsState {
  events: ImmutableArray<DictionaryEventsItem>;
}
