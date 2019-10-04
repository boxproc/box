import { ActionTypeKeys, SetActiveItemIdAction, SetActiveTableRowIndexAction } from './actionTypes';

export type SetActiveTableRowIndex = (index: number) => SetActiveTableRowIndexAction;
export type HandleSetActiveTableRowIndex = (index: number) => void;

export type SetActiveItemId = (id: number | string) => SetActiveItemIdAction;
export type HandleSetActiveItemId = (id: number | string) => void;

export type StartAutoRefresh = () => void;
export type StopAutoRefresh = () => void;

export const setActiveTableRowIndex: SetActiveTableRowIndex = index => ({
  type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX,
  payload: index,
});

export const setActiveItemId: SetActiveItemId = id => ({
  type: ActionTypeKeys.SET_ACTIVE_ITEM_ID,
  payload: id,
});

export const startAutoRefresh: StartAutoRefresh = () => ({
  type: ActionTypeKeys.START_AUTO_REFRESH,
});

export const stopAutoRefresh: StopAutoRefresh = () => ({
  type: ActionTypeKeys.STOP_AUTO_REFRESH,
});

export const handleSetActiveTableRowIndex: HandleSetActiveTableRowIndex = index =>
  setActiveTableRowIndex(index);

export const handleSetActiveItemId: HandleSetActiveItemId = id =>
  setActiveItemId(id);
