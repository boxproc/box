import { customerStatusTypesOptions, identificationTypesOptions } from 'consts';
import {
  LedgerCustomerItem,
  LedgerCustomerItemDetailsPrepared,
  LedgerCustomersFilter,
} from './types';

import { SelectValues } from 'types';

export const preparedFilterToSend = (params: Partial<LedgerCustomersFilter>) => {
  if (!params) {
    return null;
  }

  const { id, institutionId, firstName, lastName } = params;

  return {
    id: id ? id : null,
    first_name: firstName ? firstName : null,
    institution_id: institutionId ? institutionId.value : null,
    last_name: lastName ? lastName : null,
  };
};

export const preparedDataToSend = (data: Partial<LedgerCustomerItemDetailsPrepared>) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    status: data.status && data.status.value,
    email: data.email,
    institution_id: data.institutionId.value,
    first_name: data.firstName,
    last_name: data.lastName,
    date_of_birth: data.dateOfBirth,
    mobile_phone_number: data.mobilePhoneNumber,
    address_line1: data.addressLine1,
    address_line2: data.addressLine2,
    address_line3: data.addressLine3,
    address_line4: data.addressLine4,
    address_town: data.addressTown,
    address_post_code: data.addressPostCode,
    address_country_code: data.addressCountryCode && data.addressCountryCode.value,
    nationality_country_code: data.nationalityCountryCode && data.nationalityCountryCode.value,
    date_created: data.dateCreated,
    date_closed: data.dateClosed,
    identification_type: data.identificationType && data.identificationType.value,
    identification_number: data.identificationNumber ? data.identificationNumber : null,
  };
};

export const prepareDataToRender = (
  data: Partial<LedgerCustomerItem>,
  institution?: SelectValues
) => {
  if (!data) {
    return null;
  }

  const status = customerStatusTypesOptions.find(el => el.value === data.status);

  return {
    id: data.id,
    institutionId: institution && institution.label,
    firstName: data.first_name,
    lastName: data.last_name,
    status: status && status.label,
    dateOfBirth: data.date_of_birth,
    email: data.email,
    mobilePhoneNumber: data.mobile_phone_number,
    addressCountryCode: data.address_country_code,
    nationalityCountryCode: data.nationality_country_code,
    addressLine1: data.address_line1,
    addressLine2: data.address_line2,
    addressLine3: data.address_line3,
    addressLine4: data.address_line4,
    addressTown: data.address_town,
    addressPostCode: data.address_post_code,
    dateCreated: data.date_created,
    dateClosed: data.date_closed,
  };
};

export const preparedDataDetailsToRender = (data: Partial<LedgerCustomerItem>) => {
  if (!data) {
    return null;
  }
  const identificationType =
    identificationTypesOptions.find(el => el.value === data.identification_type);
  return {
    ...prepareDataToRender(data),
    status: customerStatusTypesOptions.find(el => el.value === data.status),
    identification_type:
      identificationTypesOptions.find(el => el.value === data.identification_type),
    identificationType,
    identificationNumber: data.identification_number,

  };
};
