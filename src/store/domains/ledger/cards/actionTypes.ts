import { IResponseStatus, TApiResponse } from 'types';
import { ICardsData } from './types';

export enum ActionTypeKeys {
  FILTER_CARDS = 'ledger/cards/FILTER_CARDS',
  FILTER_CARDS_FULFILLED = 'ledger/cards/FILTER_CARDS_FULFILLED',
  FILTER_CARDS_REJECTED = 'ledger/cards/FILTER_CARDS_REJECTED',

  ACTIVATE_CARD = 'ledger/accounts/ACTIVATE_CARD',
  ACTIVATE_CARD_FULFILLED = 'ledger/accounts/ACTIVATE_CARD_FULFILLED',
  ACTIVATE_CARD_REJECTED = 'ledger/accounts/ACTIVATE_CARD_REJECTED',

  CHANGE_CARD_STATUS = 'ledger/accounts/CHANGE_CARD_STATUS',
  CHANGE_CARD_STATUS_FULFILLED = 'ledger/accounts/CHANGE_CARD_STATUS_FULFILLED',
  CHANGE_CARD_STATUS_REJECTED = 'ledger/accounts/CHANGE_CARD_STATUS_REJECTED',

  FILTER_CARDS_BY_ID = 'ledger/cards/FILTER_CARDS_BY_ID',
  FILTER_CARDS_BY_ID_FULFILLED = 'ledger/cards/FILTER_CARDS_BY_ID_FULFILLED',
  FILTER_CARDS_BY_ID_REJECTED = 'ledger/cards/FILTER_CARDS_BY_ID_REJECTED',

  RESET_CARDS = 'ledger/accounts/RESET_CARDS',
}

/** Filter cards action interfaces */

export interface IFilterCardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_CARDS;
}

export interface IFilterCardsFulfilledAction {
  readonly payload: ICardsData;
  readonly type: ActionTypeKeys.FILTER_CARDS_FULFILLED;
}

export interface IFilterCardsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_CARDS_REJECTED;
}

/** Activate card action interfaces */

export interface IActivateCardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ACTIVATE_CARD;
}

export interface IActivateCardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ACTIVATE_CARD_FULFILLED;
}

export interface IActivateCardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ACTIVATE_CARD_REJECTED;
}

/** Change card status action interfaces */

export interface IChangeCardStatusAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.CHANGE_CARD_STATUS;
}

export interface IChangeCardStatusFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.CHANGE_CARD_STATUS_FULFILLED;
}

export interface IChangeCardStatusRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.CHANGE_CARD_STATUS_REJECTED;
}

/** Filter cards bi ID action interfaces */

export interface IFilterCardsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_CARDS_BY_ID;
}

export interface IFilterCardsByIdFulfilledAction {
  readonly payload: ICardsData;
  readonly type: ActionTypeKeys.FILTER_CARDS_BY_ID_FULFILLED;
}

export interface IFilterCardsByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_CARDS_BY_ID_REJECTED;
}

/** Reset cards action interfaces */

export interface IResetCarsAction {
  readonly type: ActionTypeKeys.RESET_CARDS;
}

export type TCardsActionTypes =
  | IActivateCardFulfilledAction
  | IFilterCardsFulfilledAction
  | IChangeCardStatusFulfilledAction
  | IFilterCardsByIdFulfilledAction
  | IResetCarsAction;
