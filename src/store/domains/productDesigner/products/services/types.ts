import { ImmutableArray } from 'seamless-immutable';
import { IIdNamePair, ISelectValue } from 'types';

export interface IProductServicesData {
  id: number;
  card_transactions_endpoint_id: string | number;
  card_management_interface_id: string | number;
  provider_3d_secure_interface_id: string | number;
  direct_debit_interface_id: string | number;
  card_repayment_interface_id: string | number;
}

export interface IProductServices {
  id: number;
  endpoints: ISelectValue;
  interfaces: ISelectValue;
  secureProviderInterfaces: ISelectValue;
  directDebitRepaymentInterface: ISelectValue;
  cardRepaymentInterface: ISelectValue;
}

export interface IProductServicesInterfaces {
  interfaces: Array<IIdNamePair>;
}

export interface IProductServicesEndpoints {
  endpoints: Array<IIdNamePair>;
}

export interface IProductServicesState {
  interfaces: ImmutableArray<IIdNamePair>;
  endpoints: ImmutableArray<IIdNamePair>;
}
