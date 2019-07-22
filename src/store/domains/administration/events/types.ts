import { ImmutableArray } from 'seamless-immutable';
import { SuccessResponseStatusType } from 'types';

export interface AdminEventsItem {
  id: number;
  name: string;
}

export interface AdminEventsData extends SuccessResponseStatusType {
  events: Array<AdminEventsItem>;
}

export interface AdminEventsState {
  events: ImmutableArray<AdminEventsItem>;
}
