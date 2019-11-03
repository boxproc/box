import { ImmutableArray } from 'seamless-immutable';

interface PlainInfo {
  id: number;
  description: string;
}

export interface DictionaryTransactionTypesItem extends PlainInfo {
  debit_credit_indicator: string;
}

export interface DictionaryTransactionTypes extends PlainInfo {
  debitCreditIndicator: string;
}

export interface DictionaryTransactionTypesData {
  transaction_types: Array<DictionaryTransactionTypesItem>;
}

export interface DictionaryTransactionTypesState {
  transactionTypes: ImmutableArray<DictionaryTransactionTypesItem>;
}
