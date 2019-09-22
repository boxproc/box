import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

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

export interface ApiCallsItems extends ResponseStatusType {
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

export interface ApiCallDetails {
  request_body: string;
  response_body: string;
}

export interface AuditApiCallsState {
  apiCalls: ImmutableArray<ApiCallsItem>;
  apiCallDetails: ApiCallDetails;
}
