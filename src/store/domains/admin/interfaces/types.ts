import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

export interface IInterfaceData {
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

export interface IInterfacesData {
  interfaces: Array<IInterfaceData>;
}

interface IInterfacePlain {
  id: number;
  name: string;
  url: string;
  privateKeyLocation: string;
  connectionAttributes: string;
  logFileLocation: string;
  lastMessageDatetime: string;
  lastFaultDatetime: string;
}

export interface IInterface extends IInterfacePlain {
  institutionId: number | string;
  interfaceTypeId: string | number;
  interfaceTypeName: string;
  status: string | number;
}

export interface IInterfaceDetails extends IInterfacePlain {
  institutionId: ISelectValue;
  interfaceTypeId: ISelectValue;
  status: ISelectValue;
}

/** Interfaces filter interfaces */

export interface IInterfacesFilter {
  institutionId: ISelectValue;
}

export interface IInterfacesFilterToSend {
  institution_id: string | number;
}

export interface IInterfacesState {
  interfaces: ImmutableArray<IInterfaceData>;
}
