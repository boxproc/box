import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair } from 'types';

export interface DictionaryCardStatusesData {
  card_statuses: Array<IdNamePair>;
}

export interface DictionaryCardStatusesState {
  cardStatuses: ImmutableArray<IdNamePair>;
}
