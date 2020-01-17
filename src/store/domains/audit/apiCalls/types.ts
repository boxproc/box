import { ImmutableArray } from 'seamless-immutable';
import { SelectValue } from 'types';

export interface AuditApiCallId {
  id: number;
}

export interface ApiCallsItem extends AuditApiCallId {
  event_datetime: string;
  endpoint_id: number;
  endpoint_name: string;
  api_name: string;
  request_body: string;
  response_body: string;
  institution_id: number;
}

export interface ApiCallsItems {
  api_calls: Array<ApiCallsItem>;
}

export interface ApiCallsItemPrepared extends AuditApiCallId {
  eventDatetime: string;
  endpointId: number;
  endpointName: string;
  apiName: string;
  requestBody: string;
  responseBody: string;
  institutionId: string | number;
}

export interface AuditApiCallsFilter {
  institutionId: SelectValue;
  endpointId: SelectValue;
  apiName: string;
  apiCallsDateTimeFrom: string;
  apiCallsDateTimeTo: string;
}

export interface AuditApiCallsFilterPrepared {
  institution_id: string | number;
  endpoint_id: string | number;
  api_name: string;
  date_from: string;
  date_to: string;
}

export interface ApiCallDetailsItem {
  request_body: string;
  response_body: string;
}

export interface ApiCallDetails {
  api_call: ApiCallDetailsItem;
}

export interface AuditApiCallsState {
  apiCalls: ImmutableArray<ApiCallsItem>;
  apiCallDetails: ApiCallDetailsItem;
}
