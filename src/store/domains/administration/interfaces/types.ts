import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

export interface AdminInterfaceItem {
  id: number;
  institution_id: number | string;
  name: string;
  url: string;
  interface_type_id: string | number;
  interface_type_name: string;
  status: number | string;
  private_key_location: string;
  connection_attributes: string;
  log_file_location: string;
  last_message_datetime: string;
  last_fault_datetime: string;
}

interface InterfaceItemPlain {
  id: number;
  name: string;
  url: string;
  privateKeyLocation: string;
  connectionAttributes: string;
  logFileLocation: string;
  lastMessageDatetime: string;
  lastFaultDatetime: string;
}

export interface AdminInterfaceItemPrepared extends InterfaceItemPlain {
  institutionId: number | string;
  interfaceTypeId: string | number;
  interfaceTypeName: string;
  status: string | number;
}

export interface AdminInterfaceItemDetailsPrepared extends InterfaceItemPlain {
  institutionId: ISelectValue;
  interfaceTypeId: ISelectValue;
  status: ISelectValue;
}

export interface AdminInterfaceItems {
  interfaces: Array<AdminInterfaceItem>;
}

export interface AdminInterfaceFilter {
  institutionId: ISelectValue;
}

export interface AdminInterfaceFilterPrepared {
  institution_id: string | number;
}

export interface AdminInterfaceState {
  interfaces: ImmutableArray<AdminInterfaceItem>;
}
