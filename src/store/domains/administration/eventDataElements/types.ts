import { ImmutableArray } from 'seamless-immutable';
import { SuccessResponseStatusType } from 'types';

export interface AdminEventDataElementsItemResp {
  event_id: number;
  description: string;
  name: string;
  data_type: string;
}

export interface AdminEventDataElementsItem {
  eventId: number;
  description: string;
  name: string;
  dataType: string;
}

export interface AdminEventDataElementsDataResp extends SuccessResponseStatusType {
  event_data_elements: Array<AdminEventDataElementsItemResp>;
}

export interface AdminEventDataElementsState {
  eventDataElements: ImmutableArray<AdminEventDataElementsItemResp>;
}
