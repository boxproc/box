import {
  ActionTypeKeys,
  SetActiveItemIdAction,
  SetActivePagePermissionAction,
  SetActiveTableRowIndexAction,
  SetIsAccessibleFilteringAction,
  SetIsOpenFilterAction,
  StartAutoRefreshAction,
  StopAutoRefreshAction,
} from './actionTypes';

export type SetActiveTableRowIndex = (index: number) => SetActiveTableRowIndexAction;
export type HandleSetActiveTableRowIndex = (index: number) => void;

export type SetActiveItemId = (id: number | string) => SetActiveItemIdAction;
export type HandleSetActiveItemId = (id: number | string) => void;

export type SetActivePagePermission = (value: string) => SetActivePagePermissionAction;

export type SetIsOpenFilter = (value: boolean) => SetIsOpenFilterAction;

export type SetIsAccessibleFiltering = (value: boolean) => SetIsAccessibleFilteringAction;

export type StartAutoRefresh = () => StartAutoRefreshAction;
export type StopAutoRefresh = () => StopAutoRefreshAction;

export type ResetUtils = () => void;

export const setActiveTableRowIndex: SetActiveTableRowIndex = index => ({
  type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX,
  payload: index,
});

export const setActiveItemId: SetActiveItemId = id => ({
  type: ActionTypeKeys.SET_ACTIVE_ITEM_ID,
  payload: id,
});

export const setActivePagePermission: SetActivePagePermission = value => ({
  type: ActionTypeKeys.SET_ACTIVE_PAGE_PERMISSION,
  payload: value,
});

export const setIsOpenFilter: SetIsOpenFilter = value => ({
  type: ActionTypeKeys.SET_IS_OPEN_FILTER,
  payload: value,
});

export const setIsAccessibleFiltering: SetIsAccessibleFiltering = value => ({
  type: ActionTypeKeys.SET_IS_ACCESSIBLE_FILTERING,
  payload: value,
});

export const startAutoRefresh: StartAutoRefresh = () => ({
  type: ActionTypeKeys.START_AUTO_REFRESH,
});

export const stopAutoRefresh: StopAutoRefresh = () => ({
  type: ActionTypeKeys.STOP_AUTO_REFRESH,
});

export const resetUtils: ResetUtils = () => ({
  type: ActionTypeKeys.RESET_UTILS,
});

export const handleSetActiveTableRowIndex: HandleSetActiveTableRowIndex = index =>
  setActiveTableRowIndex(index);

export const handleSetActiveItemId: HandleSetActiveItemId = id => setActiveItemId(id);
