export enum ActionTypeKeys {
  SET_ACTIVE_TABLE_ROW_INDEX = 'utils/SET_ACTIVE_TABLE_ROW_INDEX',
  SET_ACTIVE_ITEM_ID = 'utils/SET_ACTIVE_ITEM_ID',
  SET_ACTIVE_PAGE_PERMISSION = 'utils/SET_ACTIVE_PAGE_PERMISSION',

  START_AUTO_REFRESH = 'utils/START_AUTO_REFRESH',
  STOP_AUTO_REFRESH = 'utils/STOP_AUTO_REFRESH',

  SET_IS_OPEN_FILTER = 'utils/SET_IS_OPEN_FILTER',

  SET_IS_ACCESSIBLE_FILTERING = 'utils/SET_IS_ACCESSIBLE_FILTERING',

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

export interface SetActivePagePermissionAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.SET_ACTIVE_PAGE_PERMISSION;
}

export interface SetIsOpenFilterAction {
  readonly payload: boolean;
  readonly type: ActionTypeKeys.SET_IS_OPEN_FILTER;
}

export interface SetIsAccessibleFilteringAction {
  readonly payload: boolean;
  readonly type: ActionTypeKeys.SET_IS_ACCESSIBLE_FILTERING;
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
  | SetActivePagePermissionAction
  | StartAutoRefreshAction
  | StopAutoRefreshAction
  | ResetUtilsAction
  | SetIsOpenFilterAction
  | SetIsAccessibleFilteringAction;
