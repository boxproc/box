import { statusTypesOptions, yesNoTypesCodes } from 'consts';

import {
  AdminInstitutionsItem,
  AdminInstitutionsItemDetailsPrepared,
} from './types';

export const preparedDataToSend = (data: Partial<AdminInstitutionsItemDetailsPrepared>) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    name: data.name,
    status: data.status && data.status.value,
    sftp_location: data.sftpLocation,
    sftp_public_key: data.sftpPublicKey,
  };
};

export const prepareDataToRender = (data: Partial<AdminInstitutionsItem>) => {
  if (!data) {
    return null;
  }

  const status = statusTypesOptions.find(el => el.value === data.status);

  return {
    id: data.id,
    name: data.name,
    status: status && status.label,
    sftpLocation: data.sftp_location,
    sftpPublicKey: data.sftp_public_key,
    masterInstitutionFlag: data.master_institution_flag === yesNoTypesCodes.YES,
  };
};

export const preparedDataDetailsToRender = (data: Partial<AdminInstitutionsItem>) => {
  if (!data) {
    return null;
  }

  return {
    ...prepareDataToRender(data),
    status: statusTypesOptions.find(el => el.value === data.status),
  };
};
