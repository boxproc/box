
import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType, SelectValues } from 'types';

export interface LedgerCustomerId {
  id: number;
}

export interface LedgerCustomerItemPlain extends LedgerCustomerId {
  status: string;
  email: string;
}

export interface LedgerCustomerItem extends LedgerCustomerItemPlain {
  institution_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  mobile_phone_number: string;
  address_line_1: string;
  address_line_2: string;
  address_line_3: string;
  address_line_4: string;
  address_town: string;
  address_post_code: string;
  address_country_code: string;
  nationality_country_code: string;
  date_created: string;
  date_closed: string;
}

export interface LedgerCustomerItems extends ResponseStatusType {
  customers: Array<LedgerCustomerItem>;
}

export interface LedgerCustomerItemPrepared extends LedgerCustomerItemPlain {
  institutionId: string;
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
  addressCountryCode: string;
  nationalityCountryCode: string;
  dateCreated: string;
  dateClosed: string;
}

export interface LedgerCustomersFilterParams extends LedgerCustomerId {
  institutionId: SelectValues;
  firstName: string;
  lastName: string;
}

export interface LedgerCustomersFilterParamsPrepared extends LedgerCustomerId {
  institution_id: string | number;
  first_name: string;
  last_name: string;
}

export interface LedgerCustomersState {
  customers: ImmutableArray<LedgerCustomerItem>;
  currentCustomerId: number;
}
