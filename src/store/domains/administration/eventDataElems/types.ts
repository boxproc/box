import { ImmutableArray } from 'seamless-immutable';

import { SelectValues, SuccessResponseStatusType } from 'types';

export interface AdminEventDataElemsItemResp {
  event_id: number;
  description: string;
  name: string;
  data_type: string;
}

export interface AdminEventDataElemsItem {
  eventId: number;
  description: string;
  name: string;
  dataType: string;
}

export interface AdminEventDataElemsDataResp extends SuccessResponseStatusType {
  event_data_elements: Array<AdminEventDataElemsItemResp>;
}

export interface AdminEventDataElemsFilterParams {
  eventId?: SelectValues;
}

export interface AdminEventDataElemsFilterParamsPrepared {
  event_id?: number | string;
}

export interface AdminEventDataElemsState {
  eventDataElems: ImmutableArray<AdminEventDataElemsItemResp>;
  filterEventDataElems: AdminEventDataElemsFilterParamsPrepared;
}
