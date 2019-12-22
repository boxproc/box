import { UiItems } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_UI_ITEMS = 'uiItems/GET_UI_ITEMS',
  GET_UI_ITEMS_FULFILLED = 'uiItems/GET_UI_ITEMS_FULFILLED',
  GET_UI_ITEMS_REJECTED = 'uiItems/GET_UI_ITEMS_REJECTED',

  UPDATE_UI_ITEMS = 'uiItems/UPDATE_UI_ITEMS',
  UPDATE_UI_ITEMS_FULFILLED = 'uiItems/UPDATE_UI_ITEMS_FULFILLED',
  UPDATE_UI_ITEMS_REJECTED = 'uiItems/UPDATE_UI_ITEMS_REJECTED',
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

export interface UpdateUiItemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_UI_ITEMS;
}

export interface UpdateUiItemsFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_UI_ITEMS_FULFILLED;
}

export interface UpdateUiItemsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_UI_ITEMS_REJECTED;
}

export type UiItemsActionTypes =
  | GetUiItemsFulfilledAction
  | UpdateUiItemsFulfilledAction;
