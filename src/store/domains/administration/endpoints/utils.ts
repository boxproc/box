import { statusOptions } from 'consts';
import {
  AdminEndpointFilter,
  AdminEndpointItem,
  AdminEndpointItemDetailsPrepared,
} from './types';

import { SelectValue } from 'types';

export const preparedFilterToSend = (data: Partial<AdminEndpointFilter>) => {
  if (!data) {
    return null;
  }

  const { institutionId } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
  };
};

export const preparedDataToSend = (data: Partial<AdminEndpointItemDetailsPrepared>) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    status: data.status && data.status.value,
    institution_id: data.institutionId && data.institutionId.value,
    name: data.name,
    port: data.port,
    endpoint_type_id: data.endpointTypeId && data.endpointTypeId.value,
    private_key_location: data.privateKeyLocation,
    log_file_location: data.logFileLocation,
    connection_attributes: data.connectionAttributes,
    source_ip_address: data.sourceIpAddress,
    last_message_datetime: data.lastMessageDatetime,
    last_fault_datetime: data.lastFaultDatetime,
  };
};

export const preparedDataToRender = (
  data: Partial<AdminEndpointItem>,
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
    port: data.port,
    privateKeyLocation: data.private_key_location,
    logFileLocation: data.log_file_location,
    status: status && status.label,
    endpointTypeId: data.endpoint_type_id,
    endpointTypeName: data.endpoint_type_name,
    connectionAttributes: data.connection_attributes,
    sourceIpAddress: data.source_ip_address,
    lastMessageDatetime: data.last_message_datetime,
    lastFaultDatetime: data.last_fault_datetime,
  };
};

export const preparedDataDetailsToRender = (data: Partial<AdminEndpointItem>) => {
  if (!data) {
    return null;
  }

  return {
    ...preparedDataToRender(data),
    status: statusOptions.find(el => el.value === data.status),
    endpointTypeId: {
      value: data.endpoint_type_id,
      label: data.endpoint_type_name,
    },
  };
};
