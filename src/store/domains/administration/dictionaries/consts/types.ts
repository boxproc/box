import { ImmutableArray } from 'seamless-immutable';

import { IdNamePair } from 'types';

export interface DictionaryCardStatusesData {
  card_statuses: Array<IdNamePair>;
}

export interface DictionaryEndpointTypesData {
  endpoint_types: Array<IdNamePair>;
}

export interface DictionaryInterfaceTypesData {
  interface_types: Array<IdNamePair>;
}

export interface DictionaryStatementCycleTypesData {
  statement_cycle_types: Array<IdNamePair>;
}

export interface DictionaryConstsState {
  cardStatuses: ImmutableArray<IdNamePair>;
  endpointTypes: ImmutableArray<IdNamePair>;
  interfaceTypes: ImmutableArray<IdNamePair>;
  statementCycleTypes: ImmutableArray<IdNamePair>;
}
