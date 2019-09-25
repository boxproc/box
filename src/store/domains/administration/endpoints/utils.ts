import { statusTypesOptions, typeOptions } from 'consts';
import {
  AdminEndpointFilterParams,
  AdminEndpointItem,
  AdminEndpointItemDetailsPrepared,
  AdminEndpointItemPrepared,
} from './types';

export const preparedFilterParamsToSend = (params: Partial<AdminEndpointFilterParams>) => {
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
    connection_attributes: values.connectionAttributes,
  };
};

export const preparedValuesToRender = (values: Partial<AdminEndpointItem>) => {
  if (!values) {
    return null;
  }
  return {
    id: values.id,
    name: values.name,
    status: statusTypesOptions.find(el => el.value === values.status).label,
    type: typeOptions.find(el => el.value === values.type).label,
    port: values.port,
    privateKeyLocation: values.private_key_location,
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
    type: typeOptions.find(el => el.value === values.type),
  };
};
