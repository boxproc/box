import { ApiResponse, ResponseStatusType } from 'types';
import { LedgerCardItems } from './types';

export enum ActionTypeKeys {
  FILTER_LEDGER_CARDS = 'ledger/cards/FILTER_LEDGER_CARDS',
  FILTER_LEDGER_CARDS_FULFILLED = 'ledger/cards/FILTER_LEDGER_CARDS_FULFILLED',
  FILTER_LEDGER_CARDS_REJECTED = 'ledger/cards/FILTER_LEDGER_CARDS_REJECTED',

  ACTIVATE_LEDGER_CARD = 'ledger/accounts/ACTIVATE_LEDGER_CARD',
  ACTIVATE_LEDGER_CARD_FULFILLED = 'ledger/accounts/ACTIVATE_LEDGER_CARD_FULFILLED',
  ACTIVATE_LEDGER_CARD_REJECTED = 'ledger/accounts/ACTIVATE_LEDGER_CARD_REJECTED',
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

export interface ActivateLedgerCardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ACTIVATE_LEDGER_CARD;
}

export interface ActivateLedgerCardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ACTIVATE_LEDGER_CARD_FULFILLED;
}

export interface ActivateLedgerCardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ACTIVATE_LEDGER_CARD_REJECTED;
}

export type LedgerCardsActionTypes =
  | ActivateLedgerCardFulfilledAction
  | FilterLedgerCardsFulfilledAction;
