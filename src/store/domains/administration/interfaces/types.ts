import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

export interface AdminInterfaceItem extends AdminInterfaceItemId {
  institution_id: number | string;
  name: string;
  url: string;
  type: string | number;
  status: number | string;
  protocol_type: number | string;
  private_key_location: string;
  connection_attributes: string;
  log_file_location: string;
}

export interface AdminInterfaceItemPrepared extends AdminInterfaceItemId {
  institutionId: number | string;
  name: string;
  url: string;
  type: string | number;
  status: string | number;
  privateKeyLocation: string;
  protocolType: number | string;
  connectionAttributes: string;
  logFileLocation: string;
}

export interface AdminInterfaceItemDetailsPrepared extends AdminInterfaceItemId {
  institutionId: SelectValues;
  name: string;
  url: string;
  type: SelectValues;
  status: SelectValues;
  privateKeyLocation: string;
  protocolType: SelectValues;
  connectionAttributes: string;
  logFileLocation: string;
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
}
