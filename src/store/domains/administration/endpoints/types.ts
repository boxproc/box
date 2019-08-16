import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

export interface AdminEndpointItem extends AdminEndpointItemId {
  institution_id: number | string;
  name: string;
  port: number;
  status: number | string;
  private_key_location: string;
  connection_attributes: string;
}

export interface AdminEndpointItemPrepared extends AdminEndpointItemId {
  institutionId: number | string;
  name: string;
  port: number;
  status: string | number;
  privateKeyLocation: string;
  connectionAttributes: string;
}
export interface AdminEndpointItemDetailsPrepared extends AdminEndpointItemId {
  institutionId: SelectValues;
  name: string;
  port: number;
  status: SelectValues;
  privateKeyLocation: string;
  connectionAttributes: string;
}

export interface AdminEndpointItemId {
  id: number;
}

export interface AdminEndpointItems extends ResponseStatusType {
  endpoints: Array<AdminEndpointItem>;
}

export interface AdminEndpointFilterParams {
  institutionId: SelectValues;
}
export interface AdminEndpointFilterParamsPrepared {
  institution_id: string | number;
}

export interface AdminEndpointState {
  endpoints: ImmutableArray<AdminEndpointItem>;
  currentEndpointId: number;
}
