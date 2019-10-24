import { ImmutableArray } from 'seamless-immutable';
import { IdNamePair, SelectValues } from 'types';

export interface AdminEndpointItem extends AdminEndpointItemId {
  institution_id: number | string;
  name: string;
  port: number;
  status: number | string;
  private_key_location: string;
  log_file_location: string;
  type: string | number;
  connection_attributes: string;
}

export interface AdminEndpointItemPrepared extends AdminEndpointItemId {
  institutionId: number | string;
  name: string;
  port: number;
  status: string | number;
  privateKeyLocation: string;
  logFileLocation: string;
  type: string | number;
  connectionAttributes: string;
}

export interface AdminEndpointItemDetailsPrepared extends AdminEndpointItemId {
  institutionId: SelectValues;
  name: string;
  port: number;
  status: SelectValues;
  type: SelectValues;
  privateKeyLocation: string;
  logFileLocation: string;
  connectionAttributes: string;
}

export interface AdminEndpointItemId {
  id: number;
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
