import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

export interface AdminInterfaceItem extends AdminInterfaceItemId {
  institution_id: number | string;
  name: string;
  url: string;
  status: number | string;
  protocol_type: number | string;
  private_key_location: string;
  connection_attributes: string;
}

export interface AdminInterfaceItemPrepared extends AdminInterfaceItemId {
  institutionId: number | string;
  name: string;
  url: string;
  status: string | number;
  privateKeyLocation: string;
  protocolType: number | string;
  connectionAttributes: string;
}

export interface AdminInterfaceItemDetailsPrepared extends AdminInterfaceItemId {
  institutionId: SelectValues;
  name: string;
  url: string;
  status: SelectValues;
  privateKeyLocation: string;
  protocolType: SelectValues;
  connectionAttributes: string;
}

export interface AdminInterfaceItemId {
  id: number;
}

export interface AdminInterfaceItems extends ResponseStatusType {
  interfaces: Array<AdminInterfaceItem>;
}

export interface AdminInterfaceFilterParams {
  institutionId: SelectValues;
}

export interface AdminInterfaceFilterParamsPrepared {
  institution_id: string | number;
}

export interface AdminInterfaceState {
  interfaces: ImmutableArray<AdminInterfaceItem>;
  currentInterfaceId: number;
}
