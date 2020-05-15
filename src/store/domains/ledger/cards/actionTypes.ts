import { IResponseStatus, TApiResponse } from 'types';
import { ICardIdsToSend, ICardsData } from './types';

export enum ActionTypeKeys {
  FILTER_CARDS = 'cards/FILTER_CARDS',
  FILTER_CARDS_FULFILLED = 'cards/FILTER_CARDS_FULFILLED',
  FILTER_CARDS_REJECTED = 'cards/FILTER_CARDS_REJECTED',

  ACTIVATE_CARD = 'accounts/ACTIVATE_CARD',
  ACTIVATE_CARD_FULFILLED = 'accounts/ACTIVATE_CARD_FULFILLED',
  ACTIVATE_CARD_REJECTED = 'accounts/ACTIVATE_CARD_REJECTED',

  CHANGE_CARD_STATUS = 'accounts/CHANGE_CARD_STATUS',
  CHANGE_CARD_STATUS_FULFILLED = 'accounts/CHANGE_CARD_STATUS_FULFILLED',
  CHANGE_CARD_STATUS_REJECTED = 'accounts/CHANGE_CARD_STATUS_REJECTED',

  FILTER_CARDS_BY_ID = 'cards/FILTER_CARDS_BY_ID',
  FILTER_CARDS_BY_ID_FULFILLED = 'cards/FILTER_CARDS_BY_ID_FULFILLED',
  FILTER_CARDS_BY_ID_REJECTED = 'cards/FILTER_CARDS_BY_ID_REJECTED',

  RESET_CARDS = 'cards/RESET_CARDS',
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
  readonly meta: { cardId: number };
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
  readonly meta: ICardIdsToSend;
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

export type TCardsAction =
  | IActivateCardFulfilledAction
  | IFilterCardsFulfilledAction
  | IChangeCardStatusFulfilledAction
  | IFilterCardsByIdFulfilledAction
  | IResetCarsAction;
