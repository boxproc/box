import { customerStatusOptions, identificationTypesOptions, statusOptions } from 'consts';

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

import { ISelectValue } from 'types';
import { stringsUtil } from 'utils';

export const preparedFilterToSend = (params: Partial<LedgerCustomersFilter>) => {
  if (!params) {
    return null;
  }

  const { customerId, institutionId, firstName, lastName } = params;

  return {
    id: stringsUtil.toNumber(customerId),
    first_name: firstName ? firstName : null,
    institution_id: institutionId ? institutionId.value : null,
    last_name: lastName ? lastName : null,
  };
};

export const preparedDataToSend = (data: Partial<LedgerCustomerItemDetailsPrepared>) => {
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

export const prepareDataToRender = (
  data: Partial<LedgerCustomerItem>,
  institution?: ISelectValue
) => {
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
      account: stringsUtil.toNumber(account),
      account_ext: accountExt,
      accountholder_name: accountholderName,
      status: status && status.value,
      repayment_interface_id: repaymentInterfaceId
        && stringsUtil.toNumber(repaymentInterfaceId.value),
    };
  };
