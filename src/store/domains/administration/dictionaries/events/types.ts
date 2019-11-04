import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair } from 'types';

export interface DictionaryEventsData {
  events: Array<IdNamePair>;
}

export interface DictionaryEventsState {
  events: ImmutableArray<IdNamePair>;
}
