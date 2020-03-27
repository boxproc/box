import { statusOptions, yesNoConst } from 'consts';

import {
  IInstitutionData,
  IInstitutionDetails,
} from './types';

export const preparedDataToSend = (data: Partial<IInstitutionDetails>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    institutionName,
    status,
    sftpLocation,
    sftpPublicKey,
  } = data;

  return {
    id,
    institution_name: institutionName,
    status: status && status.value,
    sftp_location: sftpLocation,
    sftp_public_key: sftpPublicKey,
  };
};

export const prepareDataToRender = (data: Partial<IInstitutionData>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    institution_name,
    status,
    sftp_location,
    sftp_public_key,
    master_institution_flag,
  } = data;

  const instStatus = statusOptions.find(el => el.value === status);

  return {
    id,
    institutionName: institution_name,
    status: instStatus && instStatus.label,
    sftpLocation: sftp_location,
    sftpPublicKey: sftp_public_key,
    masterInstitutionFlag: master_institution_flag === yesNoConst.YES,
  };
};

export const preparedDataDetailsToRender = (data: Partial<IInstitutionData>) => {
  if (!data) {
    return null;
  }

  return {
    ...prepareDataToRender(data),
    status: statusOptions.find(el => el.value === data.status),
  };
};
