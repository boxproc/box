import { statusOptions, yesNoTypesCodes } from 'consts';

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
    institution_name: data.institutionName,
    status: data.status && data.status.value,
    sftp_location: data.sftpLocation,
    sftp_public_key: data.sftpPublicKey,
  };
};

export const prepareDataToRender = (data: Partial<AdminInstitutionsItem>) => {
  if (!data) {
    return null;
  }

  const status = statusOptions.find(el => el.value === data.status);

  return {
    id: data.id,
    institutionName: data.institution_name,
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
    status: statusOptions.find(el => el.value === data.status),
  };
};
