import { customerStatusTypesOptions } from 'consts';
import {
  LedgerCustomerItem,
  LedgerCustomerItemDetailsPrepared,
  LedgerCustomersFilterParams,
} from './types';

export const preparedFilterParamsToSend = (params: Partial<LedgerCustomersFilterParams>) => {
  if (!params) {
    return null;
  }

  const { id, institutionId, firstName, lastName } = params;

  return {
    id: Number(id),
    first_name: firstName,
    institution_id: institutionId && institutionId.value,
    last_name: lastName,
  };
};

export const preparedValuesToSend = (values: Partial<LedgerCustomerItemDetailsPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    status: values.status && values.status.value,
    email: values.email,
    institution_id: values.institutionId.value,
    first_name: values.firstName,
    last_name: values.lastName,
    date_of_birth: values.dateOfBirth,
    mobile_phone_number: values.mobilePhoneNumber,
    address_line1: values.addressLine1,
    address_line2: values.addressLine2,
    address_line3: values.addressLine3,
    address_line4: values.addressLine4,
    address_town: values.addressTown,
    address_post_code: values.addressPostCode,
    address_country_code: values.addressCountryCode && values.addressCountryCode.value,
    nationality_country_code: values.nationalityCountryCode &&  values.nationalityCountryCode.value,
    date_created: values.dateCreated,
    date_closed: values.dateClosed,
  };
};

export const prepareValuesToRender = (values: Partial<LedgerCustomerItem>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    firstName: values.first_name,
    lastName: values.last_name,
    status: customerStatusTypesOptions.find(el => el.value === values.status).label,
    dateOfBirth: values.date_of_birth,
    email: values.email,
    mobilePhoneNumber: values.mobile_phone_number,
    addressLine1: values.address_line1,
    addressLine2: values.address_line2,
    addressLine3: values.address_line3,
    addressLine4: values.address_line4,
    addressTown: values.address_town,
    addressPostCode: values.address_post_code,
    dateCreated: values.date_created,
    dateClosed: values.date_closed,
  };
};

export const preparedValuesDetailsToRender = (values: Partial<LedgerCustomerItem>) => {
  if (!values) {
    return null;
  }

  return {
    ...prepareValuesToRender(values),
    status: customerStatusTypesOptions.find(el => el.value === values.status),
  };
};
