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
    supportedCurrencies,
    limitAtCustomerLevelFlag,
  } = data;

  return {
    id,
    institution_name: institutionName,
    status: status && status.value,
    sftp_location: sftpLocation,
    sftp_public_key: sftpPublicKey,
    supported_currencies: supportedCurrencies && supportedCurrencies.map(el => el.value.toString()),
    limit_at_customer_level: limitAtCustomerLevelFlag ? true : false,
  };
};

export const prepareDataToRender = (data: any) => { // IInstitutionData
  if (!data) {
    return null;
  }

  const {
    id,
    institution_name,
    status,
    sftp_location,
    sftp_public_key,
    limit_at_customer_level,
    master_institution_flag,
  } = data;

  const instStatus = statusOptions.find(el => el.value === status);

  return {
    id,
    institutionName: institution_name,
    status: instStatus && instStatus.label,
    sftpLocation: sftp_location,
    sftpPublicKey: sftp_public_key,
    limitAtCustomerLevelFlag: limit_at_customer_level,
    masterInstitutionFlag: master_institution_flag === yesNoConst.YES,
  };
};

export const prepareDetailsToRender = (
  data: IInstitutionData,
  currencies: ImmutableArray<IDictionaryCurrency>
) => {
  if (!data) {
    return null;
  }

  const { status, supported_currencies } = data;

  const supportedCurrencies = supported_currencies && supported_currencies.map(el => {
    const currency = currencies.find(i => i.numeric_code.toString() === el);

    if (!currency) {
      return null;
    }

    return {
      value: currency.numeric_code,
      label: `${currency.currency_code} - ${currency.name}`,
    };
  });

  return {
    ...prepareDataToRender(data),
    supportedCurrencies,
    status: statusOptions.find(el => el.value === status),
  };
};
