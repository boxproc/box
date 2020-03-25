import { HelpLinkResp, UiItems } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_UI_ITEMS = 'uiItems/GET_UI_ITEMS',
  GET_UI_ITEMS_FULFILLED = 'uiItems/GET_UI_ITEMS_FULFILLED',
  GET_UI_ITEMS_REJECTED = 'uiItems/GET_UI_ITEMS_REJECTED',

  GET_HELP_LINK = 'uiItems/GET_HELP_LINK',
  GET_HELP_LINK_FULFILLED = 'uiItems/GET_HELP_LINK_FULFILLED',
  GET_HELP_LINK_REJECTED = 'uiItems/GET_HELP_LINK_REJECTED',
}

export interface GetUiItemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_UI_ITEMS;
}

export interface GetUiItemsFulfilledAction {
  readonly payload: UiItems;
  readonly type: ActionTypeKeys.GET_UI_ITEMS_FULFILLED;
}

export interface GetUiItemsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_UI_ITEMS_REJECTED;
}

export interface GetHelpLinkAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_HELP_LINK;
}

export interface GetHelpLinkFulfilledAction {
  readonly payload: HelpLinkResp;
  readonly type: ActionTypeKeys.GET_HELP_LINK_FULFILLED;
}

export interface GetHelpLinkRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_HELP_LINK_REJECTED;
}

export type UiItemsActionTypes =
  | GetUiItemsFulfilledAction
  | GetHelpLinkFulfilledAction;
