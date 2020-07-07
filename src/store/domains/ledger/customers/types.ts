
import { ImmutableArray } from 'seamless-immutable';

import { ISelectValue } from 'types';

export interface ICustomerData {
  id: number;
  email: string;
  status: string | number;
  institution_id: string | number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  mobile_phone_number: string;
  address_line1: string;
  address_line2: string;
  address_line3: string;
  address_line4: string;
  address_town: string;
  address_county_state?: string;
  address_post_code: string;
  address_country_code: string | number;
  nationality_country_code: string | number;
  date_created: string;
  date_closed: string;
  identification_type: string | number;
  identification_number: number;
}

export interface ICustomersData {
  customers: Array<ICustomerData>;
}

interface ICustomerPlain {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  mobilePhoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressTown: string;
  addressCountyState?: string;
  addressPostCode: string;
  dateCreated: string;
  dateClosed: string;
  identificationNumber?: number;
}

export interface ICustomer extends ICustomerPlain {
  institutionId: string | number;
  status: string | number;
  identificationType?: string | number;
  addressCountryCode: string | number;
  nationalityCountryCode: string | number;
}

export interface ICustomerDetails extends ICustomerPlain {
  institutionId: ISelectValue;
  status: ISelectValue;
  identificationType: ISelectValue;
  addressCountryCode: ISelectValue;
  nationalityCountryCode: ISelectValue;
}

/**
 * Customers filter interfaces
 */

export interface ICustomersFilter {
  customerId: number;
  institutionId: ISelectValue;
  firstName: string;
  lastName: string;
}

export interface ICustomersFilterToSend {
  id: number;
  institution_id: string | number;
  first_name: string;
  last_name: string;
}

/**
 * Ledger IDs interfaces
 */

export interface ILedgerId {
  card_id?: number;
  customer_id?: number;
  account_id?: number;
  transaction_id?: number;
  statement_id?: number;
}

/**
 * Repayment debit cards interfaces
 */

export interface IRepaymentDebitCardData {
  customer_id: number;
  pan_alias: string;
  pan_masked: string;
  expiry_date: string;
  cvv2_encrypted: string;
  cardholder_name: string;
  status: string | number;
  repayment_interface_id: number | string;
  interface_name: string;
  last_update_datetime: string;
}

export interface IRepaymentDebitCardsData {
  repayment_debit_cards: Array<IRepaymentDebitCardData>;
}

interface IRepaymentDebitCardPlain {
  customerId: number;
  panAlias: string;
  panMasked: string;
  expiryDate: string;
  cvv2Encrypted: string;
  cardholderName: string;
  lastUpdateDatetime: string;
  repaymentInterfaceName: string;
}

export interface IRepaymentDebitCard extends IRepaymentDebitCardPlain {
  status: string | number;
  repaymentInterfaceId: string | number;
}

export interface IRepaymentDebitCardFormValues extends IRepaymentDebitCardPlain {
  status: ISelectValue;
  repaymentInterfaceId: ISelectValue;
}

/**
 * Direct debit accounts interfaces
 */

export interface IDirectDebitAccountForm {
  customerId: number;
  accountField1: string;
  accountField2: string;
  accountField3?: string;
  accountholderName: string;
  accountType?: ISelectValue;
  interfaceId: ISelectValue;
}

export interface IDirectDebitAccountFormData {
  customer_id: number;
  account_field_1: string;
  account_field_2: string;
  account_field_3?: string;
  accountholder_name: string;
  account_type?: string | number;
  interface_id?: string | number;
}

/**
 * Direct debit mandates interface
 */

export interface IDirectDebitMandateData {
  id: number;
  customer_id: number;
  interface_name: string;
  description: string;
  status: string;
  country_code: string;
  currency_code: string;
  account_alias: string;
  last_update_timestamp: string;
  scheme: string;
  bank_name: string;
  accountholder_name: string;
}

export interface IDirectDebitMandatesData {
  direct_debit_mandates: Array<IDirectDebitMandateData>;
}

export interface IDirectDebitAccountMandatesData {
  direct_debit_mandates: Array<Partial<IDirectDebitMandateData>>;
}

export interface IDirectDebitMandate {
  id: number;
  customerId: number;
  interfaceName: string;
  description: string;
  status: string;
  countryCode: string;
  currencyCode: string;
  accountAlias: string;
  lastUpdateTimestamp: string;
  scheme: string;
  bankName: string;
  accountholderName: string;
  defaultFlag?: boolean;
}

/**
 * Customer currency limits interfaces
 */

export interface ICurrencyLimitData {
  base_currency: number;
  currency_code: string;
  currency_name: string;
  customer_limit: number;
}

export interface ICurrencyLimitItemData {
  currency_limit: Array<ICurrencyLimitData>;
}

export interface ICurrencyLimit {
  baseCurrency: number;
  currencyCode: string;
  currencyName: string;
  customerLimit: string;
}

/**
 * Customer state interface
 */
export interface ICustomersState {
  customers: ImmutableArray<ICustomerData>;
  repaymentDebitCards: ImmutableArray<IRepaymentDebitCardData>;
  directDebitMandates: ImmutableArray<IDirectDebitMandateData>;
  currencyLimit: ICurrencyLimitData;
}
