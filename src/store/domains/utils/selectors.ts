import { StoreState } from 'store/StoreState';

export const selectActiveTableRowIndex = (state: StoreState) => state.utils.activeTableRowIndex;

export const selectActiveItemId = (state: StoreState) => state.utils.activeItemId;

export const selectIsAutoRefresh = (state: StoreState) => state.utils.isAutoRefresh;

export const selectIsClearActiveIds = (state: StoreState) => state.utils.isClearActiveIds;
