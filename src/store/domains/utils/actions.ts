import {
  ActionTypeKeys,
  SetActiveItemIdAction,
  SetActiveTableRowIndexAction,
  SetIsClearActiveIdsAction,
  StartAutoRefreshAction,
  StopAutoRefreshAction,
} from './actionTypes';

export type SetActiveTableRowIndex = (index: number) => SetActiveTableRowIndexAction;
export type HandleSetActiveTableRowIndex = (index: number) => void;

export type SetActiveItemId = (id: number | string) => SetActiveItemIdAction;
export type HandleSetActiveItemId = (id: number | string) => void;

export type SetIsClearActiveIds = (value: boolean) => SetIsClearActiveIdsAction;
export type HandleSetIsClearActiveIds = (value: boolean) => void;

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

export const setIsClearActiveIds: SetIsClearActiveIds = value => ({
  type: ActionTypeKeys.SET_IS_CLEAR_ACTIVE_iDS,
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

export const handleSetIsClearActiveIds: HandleSetIsClearActiveIds = value =>
  setIsClearActiveIds(value);
