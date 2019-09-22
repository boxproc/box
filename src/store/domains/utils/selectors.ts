import { StoreState } from 'store/StoreState';

export const selectActiveTableRowIndex = (state: StoreState) =>
  state.utils.activeTableRowIndex;

export const selectActiveItemId = (state: StoreState) =>
  state.utils.activeItemId;
