import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType } from 'types';

export interface AdminEventsItem {
  id: number;
  name: string;
}

export interface AdminEventsData extends ResponseStatusType {
  events: Array<AdminEventsItem>;
}

export interface AdminEventsState {
  events: ImmutableArray<AdminEventsItem>;
}
