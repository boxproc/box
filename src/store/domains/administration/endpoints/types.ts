import { ImmutableArray } from 'seamless-immutable';
import { IIdNamePair, ISelectValue } from 'types';

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
  institutionId: ISelectValue;
  status: ISelectValue;
  endpointTypeId: ISelectValue;
}

export interface AdminEndpointItems {
  endpoints: Array<AdminEndpointItem>;
}

export interface AdminEndpointFilter {
  institutionId: ISelectValue;
}

export interface AdminEndpointFilterPrepared {
  institution_id: string | number;
}

export interface AdminEndpointNameItems {
  endpoints: Array<IIdNamePair>;
}

export interface AdminEndpointState {
  endpoints: ImmutableArray<AdminEndpointItem>;
  endpointsByInstitutionId: ImmutableArray<IIdNamePair>;
}
