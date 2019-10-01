import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType } from 'types';

export interface DictionaryCardStatusesItem {
  id: number;
  name: string;
}

export interface DictionaryCardStatusesData extends ResponseStatusType {
  card_statuses: Array<DictionaryCardStatusesItem>;
}

export interface DictionaryCardStatusesState {
  cardStatuses: ImmutableArray<DictionaryCardStatusesItem>;
}
