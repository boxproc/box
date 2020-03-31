import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

export interface IApiCallData {
  id: number;
  event_datetime: string;
  endpoint_id: number;
  endpoint_name: string;
  api_name: string;
  request_body: string;
  response_body: string;
  institution_id: number;
}

export interface IApiCallsData {
  api_calls: Array<IApiCallData>;
}

export interface IApiCall {
  id: number;
  eventDatetime: string;
  endpointId: number;
  endpointName: string;
  apiName: string;
  requestBody: string;
  responseBody: string;
  institutionId: string | number;
}

export interface IApiCallDetailsData {
  request_body: string;
  response_body: string;
}

export interface IApiCallDetails {
  api_call: IApiCallDetailsData;
}

/**
 * API calls filter interfaces
 */

export interface IApiCallsFilter {
  institutionId: ISelectValue;
  endpointId: ISelectValue;
  apiName: string;
  apiCallsDateTimeFrom: string;
  apiCallsDateTimeTo: string;
}

export interface IApiCallsFilterToSend {
  institution_id: string | number;
  endpoint_id: string | number;
  api_name: string;
  date_from: string;
  date_to: string;
}

/** API calls state interface */
export interface IApiCallsState {
  apiCalls: ImmutableArray<IApiCallData>;
  apiCallDetails: IApiCallDetailsData;
}
