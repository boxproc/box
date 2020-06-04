import { customerStatusOptions, identificationTypesOptions, statusOptions } from 'consts';

import {
  ICurrencyLimit,
  ICurrencyLimitData,
  ICustomerData,
  ICustomerDetails,
  ICustomersFilter,
  IDirectDebitAccountForm,
  IDirectDebitAccountFormData,
  IDirectDebitMandate,
  IDirectDebitMandateData,
  IRepaymentDebitCard,
  IRepaymentDebitCardData,
  IRepaymentDebitCardFormValues,
} from './types';

import { ISelectValue } from 'types';
import { stringsUtil } from 'utils';

export const prepareFilterToSend = (data: Partial<ICustomersFilter>) => {
  if (!data) {
    return null;
  }

  const { customerId, institutionId, firstName, lastName } = data;

  return {
    id: stringsUtil.toNumber(customerId),
    first_name: firstName ? firstName : null,
    institution_id: institutionId ? institutionId.value : null,
    last_name: lastName ? lastName : null,
  };
};

export const prepareDataToSend = (data: Partial<ICustomerDetails>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    status,
    email,
    institutionId,
    firstName,
    lastName,
    dateOfBirth,
    mobilePhoneNumber,
    addressLine1,
    addressLine2,
    addressLine3,
    addressLine4,
    addressTown,
    addressPostCode,
    addressCountryCode,
    nationalityCountryCode,
    dateCreated,
    dateClosed,
    identificationType,
    identificationNumber,
  } = data;

  return {
    id: stringsUtil.toNumber(id),
    status: status && status.value,
    email,
    institution_id: institutionId && institutionId.value,
    first_name: firstName,
    last_name: lastName,
    date_of_birth: dateOfBirth,
    mobile_phone_number: mobilePhoneNumber,
    address_line1: addressLine1,
    address_line2: addressLine2,
    address_line3: addressLine3,
    address_line4: addressLine4,
    address_town: addressTown,
    address_post_code: addressPostCode,
    address_country_code: addressCountryCode && addressCountryCode.value,
    nationality_country_code: nationalityCountryCode && nationalityCountryCode.value,
    date_created: dateCreated,
    date_closed: dateClosed,
    identification_type: identificationType && identificationType.value,
    identification_number: identificationNumber ? identificationNumber : null,
  };
};

export const prepareDataToRender = (data: Partial<ICustomerData>, institution?: ISelectValue) => {
  if (!data) {
    return null;
  }

  const {
    id,
    status,
    last_name,
    first_name,
    date_of_birth,
    email,
    mobile_phone_number,
    address_country_code,
    nationality_country_code,
    address_line1,
    address_line2,
    address_line3,
    address_line4,
    address_town,
    address_post_code,
    date_created,
    date_closed,
  } = data;

  const dataStatus = customerStatusOptions.find(el => el.value === status);

  return {
    id,
    institutionId: institution && institution.label,
    firstName: first_name,
    lastName: last_name,
    status: dataStatus && dataStatus.label,
    dateOfBirth: date_of_birth,
    email,
    mobilePhoneNumber: mobile_phone_number,
    addressCountryCode: address_country_code,
    nationalityCountryCode: nationality_country_code,
    addressLine1: address_line1,
    addressLine2: address_line2,
    addressLine3: address_line3,
    addressLine4: address_line4,
    addressTown: address_town,
    addressPostCode: address_post_code,
    dateCreated: date_created,
    dateClosed: date_closed,
  };
};

export const prepareDetailsToRender = (data: Partial<ICustomerData>) => {
  if (!data) {
    return null;
  }
  const identificationType =
    identificationTypesOptions.find(el => el.value === data.identification_type);
  return {
    ...prepareDataToRender(data),
    status: customerStatusOptions.find(el => el.value === data.status),
    identification_type:
      identificationTypesOptions.find(el => el.value === data.identification_type),
    identificationType,
    identificationNumber: data.identification_number,

  };
};

export const prepareRepaymentDebitCardsToRender = (data: IRepaymentDebitCardData):
  IRepaymentDebitCard => {
  if (!data) {
    return null;
  }

  const {
    customer_id,
    pan_alias,
    pan_masked,
    expiry_date,
    cvv2_encrypted,
    cardholder_name,
    status,
    repayment_interface_id,
    interface_name,
    last_update_datetime,
  } = data;

  const currentStatus = statusOptions.find(el => el.value === status);

  return {
    customerId: customer_id,
    panAlias: pan_alias,
    panMasked: pan_masked,
    expiryDate: expiry_date,
    cvv2Encrypted: cvv2_encrypted,
    cardholderName: cardholder_name,
    status: currentStatus && currentStatus.label,
    repaymentInterfaceId: repayment_interface_id,
    repaymentInterfaceName: interface_name,
    lastUpdateDatetime: last_update_datetime,
  };
};

export const prepareFormDataRepaymentDebitCardToSend =
  (data: Partial<IRepaymentDebitCardFormValues>): Partial<IRepaymentDebitCardData> => {
    const {
      panAlias,
      panMasked,
      expiryDate,
      cvv2Encrypted,
      cardholderName,
      status,
      repaymentInterfaceId,
    } = data;

    return {
      pan_alias: panAlias,
      pan_masked: panMasked,
      expiry_date: expiryDate,
      cvv2_encrypted: cvv2Encrypted,
      cardholder_name: cardholderName,
      status: status && status.value,
      repayment_interface_id: repaymentInterfaceId
        && stringsUtil.toNumber(repaymentInterfaceId.value),
    };
  };

export const prepareFormDataDirectDebitAccountToSend =
  (data: Partial<IDirectDebitAccountForm>): Partial<IDirectDebitAccountFormData> => {
    const {
      customerId,
      accountField1,
      accountField2,
      accountField3,
      accountholderName,
      accountType,
      interfaceId,
    } = data;

    return {
      customer_id: customerId,
      account_field_1: accountField1,
      account_field_2: accountField2,
      account_field_3: accountField3,
      accountholder_name: accountholderName,
      account_type: accountType && accountType.value,
      interface_id: interfaceId && interfaceId.value,
    };
  };

export const prepareDirectDebitMandatesToRender = (data: Partial<IDirectDebitMandateData>):
  Partial<IDirectDebitMandate> => {
  if (!data) {
    return null;
  }

  const {
    id,
    customer_id,
    interface_name,
    description,
    status,
    country_code,
    currency_code,
    account_alias,
    last_update_timestamp,
    scheme,
    bank_name,
    accountholder_name,
  } = data;

  return {
    id,
    customerId: customer_id,
    interfaceName: interface_name,
    description,
    status,
    countryCode: country_code,
    currencyCode: currency_code,
    accountAlias: `••••${account_alias}`,
    lastUpdateTimestamp: last_update_timestamp,
    scheme,
    bankName: bank_name,
    accountholderName: accountholder_name,
  };
};

export const prepareCurrencyLimitToRender = (data: Partial<ICurrencyLimitData>):
  Partial<ICurrencyLimit> => {
  if (!data) {
    return null;
  }

  const {
    base_currency,
    customer_limit,
  } = data;

  return {
    baseCurrency: base_currency,
    customerLimit: stringsUtil.numberToFixed(customer_limit, 2),
  };
};

export const prepareCurrencyLimitToSend = (data: Partial<ICurrencyLimit>, customerId: number) => {
  if (!data) {
    return null;
  }

  const { baseCurrency, customerLimit } = data;

  return {
    customer_id: customerId,
    base_currency: baseCurrency,
    customer_limit: stringsUtil.toNumber(customerLimit),
  };
};
