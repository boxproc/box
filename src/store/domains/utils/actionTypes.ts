export enum ActionTypeKeys {
  SET_ACTIVE_TABLE_ROW_INDEX = 'utils/SET_ACTIVE_TABLE_ROW_INDEX',
  SET_ACTIVE_ITEM_ID = 'utils/SET_ACTIVE_ITEM_ID',

  START_AUTO_REFRESH = 'utils/START_AUTO_REFRESH',
  STOP_AUTO_REFRESH = 'utils/STOP_AUTO_REFRESH',

  RESET_UTILS = 'utils/RESET_UTILS',
}

export interface SetActiveTableRowIndexAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX;
}

export interface SetActiveItemIdAction {
  readonly payload: number | string;
  readonly type: ActionTypeKeys.SET_ACTIVE_ITEM_ID;
}
export interface StartAutoRefreshAction {
  readonly type: ActionTypeKeys.START_AUTO_REFRESH;
}

export interface StopAutoRefreshAction {
  readonly type: ActionTypeKeys.STOP_AUTO_REFRESH;
}

export interface ResetUtilsAction {
  readonly type: ActionTypeKeys.RESET_UTILS;
}

export type UtilsActionTypes =
  | SetActiveTableRowIndexAction
  | SetActiveItemIdAction
  | StartAutoRefreshAction
  | StopAutoRefreshAction
  | ResetUtilsAction;
