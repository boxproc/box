import { statusOptions } from 'consts';
import {
  IEndpointData,
  IEndpointDetails,
  IEndpointsFilter,
} from './types';

import { ISelectValue } from 'types';

export const preparedFilterToSend = (data: Partial<IEndpointsFilter>) => {
  if (!data) {
    return null;
  }

  const { institutionId } = data;

  return { institution_id: institutionId ? institutionId.value : null };
};

export const preparedDataToSend = (data: Partial<IEndpointDetails>) => {
  if (!data) {
    return null;
  }

  const {
    connectionAttributes,
    endpointTypeId,
    id,
    institutionId,
    lastFaultDatetime,
    lastMessageDatetime,
    logFileLocation,
    name,
    port,
    privateKeyLocation,
    sourceIpAddress,
    status,
  } = data;

  return {
    connection_attributes: connectionAttributes,
    endpoint_type_id: endpointTypeId && endpointTypeId.value,
    id,
    institution_id: institutionId && institutionId.value,
    last_fault_datetime: lastFaultDatetime,
    last_message_datetime: lastMessageDatetime,
    log_file_location: logFileLocation,
    name,
    port,
    private_key_location: privateKeyLocation,
    source_ip_address: sourceIpAddress,
    status: status && status.value,
  };
};

export const preparedDataToRender = (data: Partial<IEndpointData>, institution?: ISelectValue) => {
  if (!data) {
    return null;
  }

  const {
    id,
    name,
    port,
    private_key_location,
    log_file_location,
    status,
    endpoint_type_id,
    endpoint_type_name,
    connection_attributes,
    source_ip_address,
    last_message_datetime,
    last_fault_datetime,
  } = data;

  const endpointStatus = statusOptions.find(el => el.value === status);

  return {
    id,
    institutionId: institution && institution.label,
    name,
    port,
    privateKeyLocation: private_key_location,
    logFileLocation: log_file_location,
    status: endpointStatus && endpointStatus.label,
    endpointTypeId: endpoint_type_id,
    endpointTypeName: endpoint_type_name,
    connectionAttributes: connection_attributes,
    sourceIpAddress: source_ip_address,
    lastMessageDatetime: last_message_datetime,
    lastFaultDatetime: last_fault_datetime,
  };
};

export const preparedDataDetailsToRender = (data: Partial<IEndpointData>) => {
  if (!data) {
    return null;
  }

  const { endpoint_type_id, endpoint_type_name, status } = data;

  return {
    ...preparedDataToRender(data),
    status: statusOptions.find(el => el.value === status),
    endpointTypeId: {
      value: endpoint_type_id,
      label: endpoint_type_name,
    },
  };
};
