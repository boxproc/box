import { statusTypesOptions } from 'consts';

import {
  AdminInstitutionsItem,
  AdminInstitutionsItemDetailsPrepared,
} from './types';

export const preparedValuesToSend = (values: Partial<AdminInstitutionsItemDetailsPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    name: values.name,
    status: values.status && values.status.value,
    sftp_location: values.sftpLocation,
    sftp_public_key: values.sftpPublicKey,
  };
};

export const prepareValuesToRender = (values: Partial<AdminInstitutionsItem>) => {
  if (!values) {
    return null;
  }

  const status = statusTypesOptions.find(el => el.value === values.status);

  return {
    id: values.id,
    name: values.name,
    status: status && status.label,
    sftpLocation: values.sftp_location,
    sftpPublicKey: values.sftp_public_key,
  };
};

export const preparedValuesDetailsToRender = (values: Partial<AdminInstitutionsItem>) => {
  if (!values) {
    return null;
  }

  return {
    ...prepareValuesToRender(values),
    status: statusTypesOptions.find(el => el.value === values.status),
  };
};
