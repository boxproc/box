import { endpointsOptions, statusTypesOptions } from 'consts';
import {
  AdminEndpointFilter,
  AdminEndpointItem,
  AdminEndpointItemDetailsPrepared,
  AdminEndpointItemPrepared,
} from './types';

import { SelectValues } from 'types';

export const preparedFilterToSend = (params: Partial<AdminEndpointFilter>) => {
  if (!params) {
    return null;
  }

  const { institutionId } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
  };
};

export const preparedValuesToSend = (values: Partial<AdminEndpointItemDetailsPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    status: values.status && values.status.value,
    institution_id: values.institutionId && values.institutionId.value,
    name: values.name,
    port: values.port,
    type: values.type && values.type.value,
    private_key_location: values.privateKeyLocation,
    log_file_location: values.logFileLocation,
    connection_attributes: values.connectionAttributes,
  };
};

export const preparedValuesToRender = (
  values: Partial<AdminEndpointItem>,
  institution?: SelectValues
) => {
  if (!values) {
    return null;
  }
  const status = statusTypesOptions.find(el => el.value === values.status);
  const type = endpointsOptions.find(el => el.value === values.type);

  return {
    id: values.id,
    institutionId: institution && institution.label,
    name: values.name,
    port: values.port,
    privateKeyLocation: values.private_key_location,
    logFileLocation: values.log_file_location,
    status: status && status.label,
    type: type && type.label,
    connectionAttributes: values.connection_attributes,
  };
};

export const preparedValuesDetailsToRender = (values: Partial<AdminEndpointItemPrepared>) => {
  if (!values) {
    return null;
  }
  return {
    ...preparedValuesToRender(values),
    status: statusTypesOptions.find(el => el.value === values.status),
    type: endpointsOptions.find(el => el.value === values.type),
  };
};
