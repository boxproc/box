import { ActionTypeKeys, SetActiveItemIdAction, SetActiveTableRowIndexAction } from './actionTypes';

export type SetActiveTableRowIndex = (index: number) => SetActiveTableRowIndexAction;
export type HandleSetActiveTableRowIndex = (index: number) => void;

export type SetActiveItemId = (id: number | string) => SetActiveItemIdAction;
export type HandleSetActiveItemId = (id: number | string) => void;

export const setActiveTableRowIndex: SetActiveTableRowIndex = index => ({
  type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX,
  payload: index,
});

export const setActiveItemId: SetActiveItemId = id => ({
  type: ActionTypeKeys.SET_ACTIVE_ITEM_ID,
  payload: id,
});

export const handleSetActiveTableRowIndex: HandleSetActiveTableRowIndex = index =>
  setActiveTableRowIndex(index);

export const handleSetActiveItemId: HandleSetActiveItemId = id =>
  setActiveItemId(id);
