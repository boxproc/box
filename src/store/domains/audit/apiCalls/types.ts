import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

export interface ApiCallsItem {
  id: number;
  event_datetime: string;
  endpoint_id: number;
  endpoint_name: string;
  api_name: string;
  description: string;
  institution_id: number;
}

export interface ApiCallsItems extends ResponseStatusType {
  api_calls: Array<ApiCallsItem>;
}

export interface ApiCallsItemPrepared {
  id: number;
  eventDatetime: string;
  endpointId: number;
  endpointName: string;
  apiName: string;
  description: string;
  institutionId: number;
}

export interface AuditApiCallsFilterParams {
  institutionId: SelectValues;
  endpointId: SelectValues;
  apiName: string;
  dateFrom: string;
  dateTo: string;
}

export interface AuditApiCallsFilterParamsPrepared {
  institution_id: string | number;
  endpoint_id: string | number;
  api_name: string;
  date_from: string;
  date_to: string;
}

export interface AuditApiCallsState {
  apiCalls: ImmutableArray<ApiCallsItem>;
}
