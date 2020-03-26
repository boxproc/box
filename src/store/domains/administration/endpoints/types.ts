import { ImmutableArray } from 'seamless-immutable';
import { IIdNamePair, ISelectValue } from 'types';

/**
 * Endpoints interfaces
 */

export interface IEndpointData {
  connection_attributes: string;
  endpoint_type_id: string | number;
  endpoint_type_name: string;
  id: number;
  institution_id: number | string;
  last_fault_datetime: string;
  last_message_datetime: string;
  log_file_location: string;
  name: string;
  port: number;
  private_key_location: string;
  source_ip_address: string;
  status: number | string;
}

export interface IEndpoints {
  endpoints: Array<IEndpointData>;
}

interface IEndpointPlain {
  connectionAttributes: string;
  id: number;
  lastFaultDatetime: string;
  lastMessageDatetime: string;
  logFileLocation: string;
  name: string;
  port: number;
  privateKeyLocation: string;
  sourceIpAddress: string;
}

export interface IEndpoint extends IEndpointPlain {
  endpointTypeId: string | number;
  endpointTypeName: string;
  institutionId: number | string;
  status: string | number;
}

export interface IEndpointDetails extends IEndpointPlain {
  endpointTypeId: ISelectValue;
  institutionId: ISelectValue;
  status: ISelectValue;
}

export interface IEndpointsNames {
  endpoints: Array<IIdNamePair>;
}

/**
 * Endpoints filter interfaces
 */

export interface IEndpointsFilter {
  institutionId: ISelectValue;
}

export interface IEndpointsFilterToSend {
  institution_id: string | number;
}

/**
 * Endpoints state interface
 */

export interface IEndpointsState {
  endpoints: ImmutableArray<IEndpointData>;
  endpointsByInstId: ImmutableArray<IIdNamePair>;
}
