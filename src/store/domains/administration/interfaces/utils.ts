import { protocolTypesOptions, statusTypesOptions, typeOfInterfaces } from 'consts';
import {
  AdminInterfaceFilterParams,
  AdminInterfaceItem,
  AdminInterfaceItemDetailsPrepared,
} from './types';

export const preparedFilterParamsToSend = (params: Partial<AdminInterfaceFilterParams>) => {
  if (!params) {
    return null;
  }

  const {
    institutionId,
  } = params;

  return {
    institution_id: institutionId && Number(institutionId.value),
  };
};

export const preparedValuesToSend = (values: Partial<AdminInterfaceItemDetailsPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    status: values.status && values.status.value,
    institution_id: values.institutionId && values.institutionId.value,
    name: values.name,
    url: values.url,
    type: values.type && values.type.value,
    protocol_type: values.protocolType && values.protocolType.value,
    private_key_location: values.privateKeyLocation,
    connection_attributes: values.connectionAttributes,
    log_file_location: values.logFileLocation,
  };
};

export const preparedValuesToRender = (values: Partial<AdminInterfaceItem>) => {
  if (!values) {
    return null;
  }
  return {
    id: values.id,
    name: values.name,
    status: statusTypesOptions.find(el => el.value === values.status).label,
    type: typeOfInterfaces.find(el => el.value === values.type).label,
    url: values.url,
    protocolType: protocolTypesOptions.find(el => el.value === values.protocol_type).label,
    privateKeyLocation: values.private_key_location,
    connectionAttributes: values.connection_attributes,
    logFileLocation: values.log_file_location,
  };
};

export const preparedValuesDetailsToRender = (values: Partial<AdminInterfaceItem>) => {
  if (!values) {
    return null;
  }
  return {
    ...preparedValuesToRender(values),
    status: statusTypesOptions.find(el => el.value === values.status),
    protocolType: protocolTypesOptions.find(el => el.value === values.protocol_type),
    type: typeOfInterfaces.find(el => el.value === values.type),
  };
};
