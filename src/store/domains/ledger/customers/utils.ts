import {
  customerStatusOptions,
  identificationTypesOptions,
  statusOptions,
} from 'consts';

import {
  LedgerCustomerItem,
  LedgerCustomerItemDetailsPrepared,
  LedgerCustomersFilter,
  RepaymentDebitCardsItem,
  RepaymentDebitCardsItemFormValues,
  RepaymentDebitCardsItemPrepared,
  RepaymentDirectDebitsItem,
  RepaymentDirectDebitsItemFormValues,
  RepaymentDirectDebitsItemPrepared,
} from './types';

import { SelectValues } from 'types';
import { stringsUtil } from 'utils';

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

  const status = customerStatusOptions.find(el => el.value === data.status);

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
    status: customerStatusOptions.find(el => el.value === data.status),
    identification_type:
      identificationTypesOptions.find(el => el.value === data.identification_type),
    identificationType,
    identificationNumber: data.identification_number,

  };
};

export const prepareRepaymentDebitCardsToRender = (data: RepaymentDebitCardsItem):
  RepaymentDebitCardsItemPrepared => {
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
  (data: Partial<RepaymentDebitCardsItemFormValues>): Partial<RepaymentDebitCardsItem> => {
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

export const prepareRepaymentDirectDebitsToRender = (data: RepaymentDirectDebitsItem):
  RepaymentDirectDebitsItemPrepared => {
  if (!data) {
    return null;
  }

  const {
    customer_id,
    account,
    account_ext,
    accountholder_name,
    status,
    repayment_interface_id,
    interface_name,
    last_update_datetime,
    repay_provider_customer_id,
  } = data;

  const currentStatus = statusOptions.find(el => el.value === status);

  return {
    customerId: customer_id,
    account,
    accountExt: account_ext,
    accountholderName: accountholder_name,
    status: currentStatus && currentStatus.label,
    repaymentInterfaceId: repayment_interface_id,
    repaymentInterfaceName: interface_name,
    lastUpdateDatetime: last_update_datetime,
    repayProviderCustomerId: repay_provider_customer_id,
  };
};

export const prepareFormDataRepaymentDirectDebitToSend =
  (data: Partial<RepaymentDirectDebitsItemFormValues>): Partial<RepaymentDirectDebitsItem> => {
    const {
      account,
      accountExt,
      accountholderName,
      status,
      repaymentInterfaceId,
    } = data;

    return {
      account,
      account_ext: accountExt,
      accountholder_name: accountholderName,
      status: status && status.value,
      repayment_interface_id: repaymentInterfaceId
        && stringsUtil.toNumber(repaymentInterfaceId.value),
    };
  };
