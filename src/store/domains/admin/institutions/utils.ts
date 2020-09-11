import { ImmutableArray } from 'seamless-immutable';

import { statusOptions, yesNoConst } from 'consts';
import { IDictionaryCurrency } from 'store';
import { IInstitutionData, IInstitutionDetails } from './types';

export const prepareDataToSend = (data: Partial<IInstitutionDetails>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    institutionName,
    status,
    sftpLocation,
    sftpPublicKey,
    baseCurrency,
    nextOperationDate,
  } = data;

  return {
    id,
    institution_name: institutionName,
    status: status && status.value,
    sftp_location: sftpLocation,
    sftp_public_key: sftpPublicKey,
    base_currency: baseCurrency && baseCurrency.value,
    next_operation_date: nextOperationDate,
  };
};

export const prepareDataToRender = (data: IInstitutionData) => {
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
    current_operation_date,
    next_operation_date,
  } = data;

  const instStatus = statusOptions.find(el => el.value === status);

  return {
    id,
    institutionName: institution_name,
    status: instStatus && instStatus.label,
    sftpLocation: sftp_location,
    sftpPublicKey: sftp_public_key,
    masterInstitutionFlag: master_institution_flag === yesNoConst.YES,
    currentOperationDate: current_operation_date,
    nextOperationDate: next_operation_date,
  };
};

export const prepareDetailsToRender = (
  data: IInstitutionData,
  currencies: ImmutableArray<IDictionaryCurrency>
) => {
  if (!data) {
    return null;
  }

  const { status, base_currency } = data;
  const currency = currencies.find(el => el.numeric_code === base_currency);

  return {
    ...prepareDataToRender(data),
    status: statusOptions.find(el => el.value === status),
    baseCurrency: currency && {
      value: currency.numeric_code,
      label: `${currency.currency_code} - ${currency.name}`,
    },
  };
};
