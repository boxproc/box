import { IResponseStatus, TApiResponse } from 'types';
import { LedgerCardItems } from './types';

export enum ActionTypeKeys {
  FILTER_LEDGER_CARDS = 'ledger/cards/FILTER_LEDGER_CARDS',
  FILTER_LEDGER_CARDS_FULFILLED = 'ledger/cards/FILTER_LEDGER_CARDS_FULFILLED',
  FILTER_LEDGER_CARDS_REJECTED = 'ledger/cards/FILTER_LEDGER_CARDS_REJECTED',

  ACTIVATE_LEDGER_CARD = 'ledger/accounts/ACTIVATE_LEDGER_CARD',
  ACTIVATE_LEDGER_CARD_FULFILLED = 'ledger/accounts/ACTIVATE_LEDGER_CARD_FULFILLED',
  ACTIVATE_LEDGER_CARD_REJECTED = 'ledger/accounts/ACTIVATE_LEDGER_CARD_REJECTED',

  CHANGE_LEDGER_CARD_STATUS = 'ledger/accounts/CHANGE_LEDGER_CARD_STATUS',
  CHANGE_LEDGER_CARD_STATUS_FULFILLED = 'ledger/accounts/CHANGE_LEDGER_CARD_STATUS_FULFILLED',
  CHANGE_LEDGER_CARD_STATUS_REJECTED = 'ledger/accounts/CHANGE_LEDGER_CARD_STATUS_REJECTED',

  FILTER_LEDGER_CARDS_BY_ID = 'ledger/cards/FILTER_LEDGER_CARDS_BY_ID',
  FILTER_LEDGER_CARDS_BY_ID_FULFILLED = 'ledger/cards/FILTER_LEDGER_CARDS_BY_ID_FULFILLED',
  FILTER_LEDGER_CARDS_BY_ID_REJECTED = 'ledger/cards/FILTER_LEDGER_CARDS_BY_ID_REJECTED',

  RESET_CARDS = 'ledger/accounts/RESET_CARDS',
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
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CARDS_REJECTED;
}

export interface ActivateLedgerCardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ACTIVATE_LEDGER_CARD;
}

export interface ActivateLedgerCardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ACTIVATE_LEDGER_CARD_FULFILLED;
}

export interface ActivateLedgerCardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ACTIVATE_LEDGER_CARD_REJECTED;
}

export interface ChangeLedgerCardStatusAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.CHANGE_LEDGER_CARD_STATUS;
}

export interface ChangeLedgerCardStatusFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.CHANGE_LEDGER_CARD_STATUS_FULFILLED;
}

export interface ChangeLedgerCardStatusRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.CHANGE_LEDGER_CARD_STATUS_REJECTED;
}

export interface FilterLedgerCardsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CARDS_BY_ID;
}

export interface FilterLedgerCardsByIdFulfilledAction {
  readonly payload: LedgerCardItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CARDS_BY_ID_FULFILLED;
}

export interface FilterLedgerCardsByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_CARDS_BY_ID_REJECTED;
}

export interface ResetCarsAction {
  readonly type: ActionTypeKeys.RESET_CARDS;
}

export type LedgerCardsActionTypes =
  | ActivateLedgerCardFulfilledAction
  | FilterLedgerCardsFulfilledAction
  | ChangeLedgerCardStatusFulfilledAction
  | FilterLedgerCardsByIdFulfilledAction
  | ResetCarsAction;
