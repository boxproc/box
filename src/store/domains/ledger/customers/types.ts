
import { ImmutableArray } from 'seamless-immutable';

import { SelectValues } from 'types';
export interface LedgerCustomerId {
  id: number;
}

export interface LedgerCustomerItemPlain extends LedgerCustomerId {
  email: string;
}

export interface LedgerCustomerItem extends LedgerCustomerItemPlain {
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
}

export interface LedgerCustomerItems {
  customers: Array<LedgerCustomerItem>;
}

export interface LedgerCustomerItemPlainPrepared extends LedgerCustomerItemPlain {
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
}

export interface LedgerCustomerItemPrepared extends LedgerCustomerItemPlainPrepared {
  institutionId: string | number;
  status: string | number;
  identificationType?: string | number;
  addressCountryCode: string | number;
  nationalityCountryCode: string | number;
}

export interface LedgerCustomerItemDetailsPrepared extends LedgerCustomerItemPlainPrepared {
  institutionId: SelectValues;
  status: SelectValues;
  identificationType: SelectValues;
  addressCountryCode: SelectValues;
  nationalityCountryCode: SelectValues;
}

export interface LedgerCustomersFilter extends LedgerCustomerId {
  institutionId: SelectValues;
  firstName: string;
  lastName: string;
}

export interface LedgerCustomersFilterPrepared extends LedgerCustomerId {
  institution_id: string | number;
  first_name: string;
  last_name: string;
}

export interface CardId {
  card_id: number;
}

export interface CustomerId {
  customer_id: number;
}

export interface AccountId {
  account_id: number;
}

export interface TransactionId {
  transaction_id: number;
}

export interface StatementId {
  statement_id: number;
}

export interface RepaymentDebitCardsItem {
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

export interface RepaymentDebitCardsItems {
  repayment_debit_cards: Array<RepaymentDebitCardsItem>;
}

export interface RepaymentDebitCardsItemPlain {
  customerId: number;
  panAlias: string;
  panMasked: string;
  expiryDate: string;
  cvv2Encrypted: string;
  cardholderName: string;
  lastUpdateDatetime: string;
  repaymentInterfaceName: string;
}

export interface RepaymentDebitCardsItemPrepared extends RepaymentDebitCardsItemPlain {
  status: string | number;
  repaymentInterfaceId: string | number;
}

export interface RepaymentDebitCardsItemFormValues extends RepaymentDebitCardsItemPlain {
  status: SelectValues;
  repaymentInterfaceId: SelectValues;
}

export interface RepaymentDirectDebitsItem {
  customer_id: number;
  account: string;
  account_ext: string;
  accountholder_name: string;
  status: string | number;
  repayment_interface_id: number | string;
  interface_name: string;
  last_update_datetime: string;
  repay_provider_customer_id: string;
}

export interface RepaymentDirectDebitsItems {
  repayment_debit_cards: Array<RepaymentDirectDebitsItem>;
}

interface RepaymentDirectDebitsItemPlain {
  customerId: number;
  account: string;
  accountExt: string;
  accountholderName: string;
  lastUpdateDatetime: string;
  repaymentInterfaceName: string;
  repayProviderCustomerId: string;
}

export interface RepaymentDirectDebitsItemPrepared extends RepaymentDirectDebitsItemPlain {
  status: string | number;
  repaymentInterfaceId: string | number;
}

export interface RepaymentDirectDebitsItemFormValues extends RepaymentDirectDebitsItemPlain {
  status: SelectValues;
  repaymentInterfaceId: SelectValues;
}

export type LedgerId = CardId | AccountId | TransactionId | StatementId | CustomerId;

export interface LedgerCustomersState {
  customers: ImmutableArray<LedgerCustomerItem>;
  repaymentDebitCards: ImmutableArray<RepaymentDebitCardsItem>;
  repaymentDirectDebits: ImmutableArray<RepaymentDirectDebitsItem>;
}
