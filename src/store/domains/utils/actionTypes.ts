export enum ActionTypeKeys {
  SET_ACTIVE_TABLE_ROW_INDEX = 'utils/SET_ACTIVE_TABLE_ROW_INDEX',

  SET_ACTIVE_ITEM_ID = 'utils/SET_ACTIVE_ITEM_ID',
}

export interface SetActiveTableRowIndexAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX;
}

export interface SetActiveItemIdAction {
  readonly payload: number | string;
  readonly type: ActionTypeKeys.SET_ACTIVE_ITEM_ID;
}

export type UtilsActionTypes =
  | SetActiveTableRowIndexAction
  | SetActiveItemIdAction;
