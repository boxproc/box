import { protocolTypesOptions, statusTypesOptions } from 'consts';
import {
   AdminInterfaceFilterParams,
   AdminInterfaceItem,
   AdminInterfaceItemDetailsPrepared,
   AdminInterfaceItemPrepared,
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
      protocol_type: values.protocolType && values.protocolType.value,
      private_key_location: values.privateKeyLocation,
      connection_attributes: values.connectionAttributes,
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
      url: values.url,
      protocolType: protocolTypesOptions.find(el => el.value === values.protocol_type).label,
      privateKeyLocation: values.private_key_location,
      connectionAttributes: values.connection_attributes,
    };
};

export const preparedValuesDetailsToRender = (values: Partial<AdminInterfaceItemPrepared>) => {
  if (!values) {
    return null;
  }
  return {
    ...values,
    status: statusTypesOptions.find(el => el.label === values.status),
    protocolType: protocolTypesOptions.find(el => el.label === values.protocolType),
  };
};
