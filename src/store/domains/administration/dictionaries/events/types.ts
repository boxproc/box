import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair, ResponseStatusType } from 'types';

export interface DictionaryEventsData extends ResponseStatusType {
  events: Array<IdNamePair>;
}

export interface DictionaryEventsState {
  events: ImmutableArray<IdNamePair>;
}
