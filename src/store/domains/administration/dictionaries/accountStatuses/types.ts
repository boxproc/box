import { ImmutableArray } from 'seamless-immutable';

export interface DictionaryAccountStatus {
  status: string;
  name: string;
}

export interface DictionaryAccountStatuses {
  account_statuses: Array<DictionaryAccountStatus>;
}

export interface DictionaryAccountStatusesState {
  accountStatuses: ImmutableArray<DictionaryAccountStatus>;
}
