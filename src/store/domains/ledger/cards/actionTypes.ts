import { ApiResponse } from 'types';
import { LedgerCardItems } from './types';

export enum ActionTypeKeys {
    GET_LEDGER_CARDS= 'ledger/cards/GET_LEDGER_CARDS',
    GET_LEDGER_CARDS_FULFILLED = 'ledger/cards/GET_LEDGER_CARDS_FULFILLED',
    GET_LEDGER_CARDS_REJECTED = 'ledger/cards/GET_LEDGER_CARDS_REJECTED',

    FILTER_LEDGER_CARDS = 'ledger/cards/FILTER_LEDGER_CARDS',
    FILTER_LEDGER_CARDS_FULFILLED = 'ledger/cards/FILTER_LEDGER_CARDS_FULFILLED',
    FILTER_LEDGER_CARDS_REJECTED = 'ledger/cards/FILTER_LEDGER_CARDS_REJECTED',
}
export interface GetLedgerCardsAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.GET_LEDGER_CARDS;
  }

export interface GetLedgerCardsFulfilledAction {
    readonly payload: LedgerCardItems;
    readonly type: ActionTypeKeys.GET_LEDGER_CARDS_FULFILLED;
  }

export interface GetLedgerCardsRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.GET_LEDGER_CARDS_REJECTED;
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
    | GetLedgerCardsFulfilledAction
    | FilterLedgerCardsFulfilledAction;
