import { ImmutableArray } from 'seamless-immutable';

export interface DictionaryRepaymentType {
  type: string;
  description: string;
}

export interface DictionaryRepaymentTypes {
  repayment_types: Array<DictionaryRepaymentType>;
}

export interface DictionaryRepaymentTypesState {
  repaymentTypes: ImmutableArray<DictionaryRepaymentType>;
}
