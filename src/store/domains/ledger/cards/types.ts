import { ImmutableArray } from 'seamless-immutable';

export interface LedgerCardItem {
  id: number;
  pan_alias: string;
  pan_masked: string;
  expiry_date: string;
  account_id: number;
  card_status_id: number;
  card_status_name: string;
}

export interface LedgerCardItems {
  cards: Array<LedgerCardItem>;
}

export interface LedgerCardItemPrepared {
  id: number;
  panAlias: string;
  panMasked: string;
  expiryDate: string;
  accountId: number;
  cardStatusName: string;
}

export interface LedgerCardsFilter {
  pan_alias: string;
  id: number;
  account_id: number;
  customer_id: number;
}

export interface LedgerCardsFilterPrepared {
  panAlias: string;
  id: number;
  accountId: number;
  customerId: number;
}

export interface LedgerCardIds {
  cardId: number;
  cardStatusId: number | string;
}

export interface LedgerCardIdsPrepared {
  card_id: number;
  card_status_id: number | string;
}

export interface LedgerCardsState {
  cards: ImmutableArray<LedgerCardItem>;
}
