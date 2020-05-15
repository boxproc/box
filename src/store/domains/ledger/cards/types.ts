import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

export interface ICardData {
  id: number;
  pan_alias: string;
  pan_masked: string;
  expiry_date: string;
  account_id: number;
  customer_id: number;
  card_status_id: number | string;
  card_status_name: string;
}

export interface ICardsData {
  cards: Array<ICardData>;
}

export interface ICard {
  id: number;
  panAlias: string;
  panMasked: string;
  expiryDate: string;
  accountId: number;
  customerId: number;
  status: string;
}

export interface ICardIds {
  cardId: number;
  cardStatusId: number | string;
}

export interface ICardIdsToSend {
  card_id: number;
  card_status_id: number | string;
}

/** Cards filter interfaces */

export interface ICardsFilter {
  panAlias: string;
  cardId: number;
  accountId: number;
  customerId: number;
  institutionId: ISelectValue;
}

export interface ICardsFilterToSend {
  id: number;
  pan_alias: string;
  account_id: number;
  customer_id: number;
  institution_id: number | string;
}

/** Cards state interface */
export interface ICardsState {
  cards: ImmutableArray<ICardData>;
}
