import { StoreState } from 'store/StoreState';

export const selectActiveTableRowIndex = (state: StoreState) =>
  state.utils.activeTableRowIndex;
