import { statusOptions } from 'consts';
import {
  AdminInterfaceFilter,
  AdminInterfaceItem,
  AdminInterfaceItemDetailsPrepared,
} from './types';

import { SelectValue } from 'types';

export const preparedFilterToSend = (data: Partial<AdminInterfaceFilter>) => {
  if (!data) {
    return null;
  }

  const { institutionId } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
  };
};

export const preparedDataToSend = (data: Partial<AdminInterfaceItemDetailsPrepared>) => {
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

export const preparedDataToRender = (
  data: Partial<AdminInterfaceItem>,
  institution?: SelectValue
) => {
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

export const preparedValuesDetailsToRender = (data: Partial<AdminInterfaceItem>) => {
  if (!data) {
    return null;
  }
  return {
    ...preparedDataToRender(data),
    status: statusOptions.find(el => el.value === data.status),
    interfaceTypeId: {
      value: data.interface_type_id,
      label: data.interface_type_name,
    },
  };
};
