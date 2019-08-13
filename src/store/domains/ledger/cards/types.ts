import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType } from 'types';

export interface LedgerCardItem {
    id: number;
    pan_alias: string;
    pan_masked: string;
    expiry_date: string;
    account_id: number;
    status: string;
}

export interface LedgerCardItems extends ResponseStatusType {
    cards: Array<LedgerCardItem>;
}

export interface LedgerCardItemPrepared {
    id: number;
    panAlias: string;
    panMasked: string;
    expiryDate: string;
    accountId: number;
    status: string;
}

export interface LedgerCardsFilterParams {
    pan_alias: string;
    id: number;
    account_id: number;
    customer_id: number;
}

export interface LedgerCardsFilterParamsPrepared {
    panAlias: string;
    id: number;
    accountId: number;
    customerId: number;
}

export interface LedgerCardsState {
    cards: ImmutableArray<LedgerCardItem>;
  }
