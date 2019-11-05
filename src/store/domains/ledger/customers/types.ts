
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
  addressCountryCode: SelectValues;
  nationalityCountryCode: SelectValues;
  dateCreated: string;
  dateClosed: string;
  identificationNumber?: number;
}

export interface LedgerCustomerItemPrepared extends LedgerCustomerItemPlainPrepared {
  institutionId: string | number;
  status: string | number;
  identificationType?: string | number;
}

export interface LedgerCustomerItemDetailsPrepared extends LedgerCustomerItemPlainPrepared {
  institutionId: SelectValues;
  status: SelectValues;
  identificationType: SelectValues;
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

export interface LedgerCustomersState {
  customers: ImmutableArray<LedgerCustomerItem>;
}
