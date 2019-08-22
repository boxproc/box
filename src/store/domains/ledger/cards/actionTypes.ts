import { ApiResponse } from 'types';
import { LedgerCardItems } from './types';

export enum ActionTypeKeys {
  FILTER_LEDGER_CARDS = 'ledger/cards/FILTER_LEDGER_CARDS',
  FILTER_LEDGER_CARDS_FULFILLED = 'ledger/cards/FILTER_LEDGER_CARDS_FULFILLED',
  FILTER_LEDGER_CARDS_REJECTED = 'ledger/cards/FILTER_LEDGER_CARDS_REJECTED',
}

export interface FilterLedgerCardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CARDS;
}

export interface FilterLedgerCardsFulfilledAction {
  readonly payload: LedgerCardItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CARDS_FULFILLED;
}

export interface FilterLedgerCardsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CARDS_REJECTED;
}

export type LedgerCardsActionTypes =
  | FilterLedgerCardsFulfilledAction;
