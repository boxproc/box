import { ImmutableArray } from 'seamless-immutable';
import { IdNamePair, SelectValues } from 'types';

export interface AdminEndpointItem {
  id: number;
  institution_id: number | string;
  name: string;
  endpoint_type_id: string | number;
  endpoint_type_name: string;
  port: number;
  private_key_location: string;
  status: number | string;
  connection_attributes: string;
  source_ip_address: string;
  last_message_datetime: string;
  last_fault_datetime: string;
  log_file_location: string;
}

interface EndpointItemPlain {
  id: number;
  name: string;
  port: number;
  privateKeyLocation: string;
  logFileLocation: string;
  connectionAttributes: string;
  sourceIpAddress: string;
  lastMessageDatetime: string;
  lastFaultDatetime: string;
}

export interface AdminEndpointItemPrepared extends EndpointItemPlain {
  institutionId: number | string;
  status: string | number;
  endpointTypeId: string | number;
  endpointTypeName: string;
}

export interface AdminEndpointItemDetailsPrepared extends EndpointItemPlain {
  institutionId: SelectValues;
  status: SelectValues;
  endpointTypeId: SelectValues;
}

export interface AdminEndpointItems {
  endpoints: Array<AdminEndpointItem>;
}

export interface AdminEndpointFilter {
  institutionId: SelectValues;
}

export interface AdminEndpointFilterPrepared {
  institution_id: string | number;
}

export interface AdminEndpointNameItems {
  endpoints: Array<IdNamePair>;
}

export interface AdminEndpointState {
  endpoints: ImmutableArray<AdminEndpointItem>;
  endpointsByInstitutionId: ImmutableArray<IdNamePair>;
}
