import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair, ResponseStatusType } from 'types';

export interface DictionaryCardStatusesData extends ResponseStatusType {
  card_statuses: Array<IdNamePair>;
}

export interface DictionaryCardStatusesState {
  cardStatuses: ImmutableArray<IdNamePair>;
}
