import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair, SelectValue } from 'types';

export interface InstitutionProductServiceInterfaces {
  interfaces: Array<IdNamePair>;
}

export interface InstitutionProductServiceEndpoints {
  endpoints: Array<IdNamePair>;
}

export interface ServicesItems {
  id: number;
  card_transactions_endpoint_id: string | number;
  card_management_interface_id: string | number;
  provider_3d_secure_interface_id: string | number;
  direct_debit_interface_id: string | number;
  card_repayment_interface_id: string | number;
}

export interface ServicesItemsPrepared {
  id: number;
  endpoints: SelectValue;
  interfaces: SelectValue;
  secureProviderInterfaces: SelectValue;
  directDebitRepaymentInterface: SelectValue;
  cardRepaymentInterface: SelectValue;
}

export interface ProductServicesState {
  interfaces: ImmutableArray<IdNamePair>;
  endpoints: ImmutableArray<IdNamePair>;
}
