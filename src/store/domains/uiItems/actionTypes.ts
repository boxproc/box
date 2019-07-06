import { UiItems } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_UI_ITEMS = 'uiItems/GET_UI_ITEMS',
  GET_UI_ITEMS_FULFILLED = 'uiItems/GET_UI_ITEMS_FULFILLED',
  GET_UI_ITEMS_REJECTED = 'uiItems/GET_UI_ITEMS_REJECTED',
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
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_UI_ITEMS_REJECTED;
}

export type UiItemsActionTypes =
  | GetUiItemsFulfilledAction;
