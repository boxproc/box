import { statusOptions } from 'consts';
import {
  IInterfaceData,
  IInterfaceDetails,
  IInterfacesFilter,
} from './types';

import { ISelectValue } from 'types';

export const prepareFilterToSend = (data: Partial<IInterfacesFilter>) => {
  if (!data) {
    return null;
  }

  const { institutionId } = data;

  return { institution_id: institutionId ? institutionId.value : null };
};

export const prepareDataToSend = (data: Partial<IInterfaceDetails>) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    status: data.status && data.status.value,
    institution_id: data.institutionId && data.institutionId.value,
    name: data.name,
    url: data.url,
    interface_type_id: data.interfaceTypeId && data.interfaceTypeId.value,
    private_key_location: data.privateKeyLocation,
    connection_attributes: data.connectionAttributes,
    log_file_location: data.logFileLocation,
    last_message_datetime: data.lastMessageDatetime,
    last_fault_datetime: data.lastFaultDatetime,
  };
};

export const prepareDataToRender = (data: Partial<IInterfaceData>, institution?: ISelectValue) => {
  if (!data) {
    return null;
  }

  const status = statusOptions.find(el => el.value === data.status);

  return {
    id: data.id,
    institutionId: institution && institution.label,
    name: data.name,
    url: data.url,
    privateKeyLocation: data.private_key_location,
    status: status && status.label,
    interfaceTypeId: data.interface_type_id,
    interfaceTypeName: data.interface_type_name,
    connectionAttributes: data.connection_attributes,
    logFileLocation: data.log_file_location,
    lastMessageDatetime: data.last_message_datetime,
    lastFaultDatetime: data.last_fault_datetime,
  };
};

export const prepareDetailsToRender = (data: Partial<IInterfaceData>) => {
  if (!data) {
    return null;
  }

  return {
    ...prepareDataToRender(data),
    status: statusOptions.find(el => el.value === data.status),
    interfaceTypeId: {
      value: data.interface_type_id,
      label: data.interface_type_name,
    },
  };
};
