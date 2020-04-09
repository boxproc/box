
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
  address_post_code: string;
  address_country_code: string | number;
  nationality_country_code: string | number;
  date_created: string;
  date_closed: string;
  identification_type: string | number;
  identification_number: number;
  limit_at_customer_level: number; // 0 or 1
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
  addressPostCode: string;
  dateCreated: string;
  dateClosed: string;
  identificationNumber?: number;
  limitAtCustomerLevel: boolean;
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

export interface ICardId {
  card_id: number;
}

export interface ICustomerId {
  customer_id: number;
}

export interface IAccountId {
  account_id: number;
}

export interface ITransactionId {
  transaction_id: number;
}

export interface IStatementId {
  statement_id: number;
}

export type TLedgerId = ICardId | IAccountId | ITransactionId | IStatementId | ICustomerId;

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
 * Repayment direct debit interfaces
 */

export interface IRepaymentDirectDebitData {
  customer_id: number;
  account: number;
  account_ext: string;
  accountholder_name: string;
  status: string | number;
  repayment_interface_id: number | string;
  interface_name: string;
  last_update_datetime: string;
  repay_provider_customer_id: string;
}

export interface IRepaymentDirectDebitsData {
  repayment_debit_cards: Array<IRepaymentDirectDebitData>;
}

interface IRepaymentDirectDebitPlain {
  customerId: number;
  account: number;
  accountExt: string;
  accountholderName: string;
  lastUpdateDatetime: string;
  repaymentInterfaceName: string;
  repayProviderCustomerId: string;
}

export interface IRepaymentDirectDebit extends IRepaymentDirectDebitPlain {
  status: string | number;
  repaymentInterfaceId: string | number;
}

export interface IRepaymentDirectDebitFormValues extends IRepaymentDirectDebitPlain {
  status: ISelectValue;
  repaymentInterfaceId: ISelectValue;
}

/**
 * Customer currency limits interfaces
 */

export interface ICurrencyLimitData {
  customer_id: number;
  currency_numeric_code: number;
  currency_code: string;
  currency_name: string;
  limit: number;
}

export interface ICurrencyLimitsData {
  currency_limits: Array<ICurrencyLimitData>;
}

export interface ICurrencyLimit {
  customerId: number;
  currencyNumericCode: string;
  currencyCode: string;
  currencyName: string;
  limit: number;
}

/**
 * Customer state interface
 */
export interface ICustomersState {
  customers: ImmutableArray<ICustomerData>;
  repaymentDebitCards: ImmutableArray<IRepaymentDebitCardData>;
  repaymentDirectDebits: ImmutableArray<IRepaymentDirectDebitData>;
  currencyLimits: ImmutableArray<ICurrencyLimitData>;
}
