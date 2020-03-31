import { IHelpLinkData, IUiItemsData } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_UI_ITEMS = 'uiItems/GET_UI_ITEMS',
  GET_UI_ITEMS_FULFILLED = 'uiItems/GET_UI_ITEMS_FULFILLED',
  GET_UI_ITEMS_REJECTED = 'uiItems/GET_UI_ITEMS_REJECTED',

  GET_HELP_LINK = 'uiItems/GET_HELP_LINK',
  GET_HELP_LINK_FULFILLED = 'uiItems/GET_HELP_LINK_FULFILLED',
  GET_HELP_LINK_REJECTED = 'uiItems/GET_HELP_LINK_REJECTED',
}

export interface IGetUiItemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_UI_ITEMS;
}

export interface IGetUiItemsFulfilledAction {
  readonly payload: IUiItemsData;
  readonly type: ActionTypeKeys.GET_UI_ITEMS_FULFILLED;
}

export interface IGetUiItemsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_UI_ITEMS_REJECTED;
}

export interface IGetHelpLinkAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_HELP_LINK;
}

export interface IGetHelpLinkFulfilledAction {
  readonly payload: IHelpLinkData;
  readonly type: ActionTypeKeys.GET_HELP_LINK_FULFILLED;
}

export interface IGetHelpLinkRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_HELP_LINK_REJECTED;
}

export type TUiItemsAction =
  | IGetUiItemsFulfilledAction
  | IGetHelpLinkFulfilledAction;
