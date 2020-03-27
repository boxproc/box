import { permissionTypesConst } from 'consts';
import { StoreState } from 'store';

export const activeTableRowIndexSelector = (state: StoreState) => state.utils.activeTableRowIndex;

export const activeItemIdSelector = (state: StoreState) => state.utils.activeItemId;

export const isReadOnlySelector = (state: StoreState) =>
    state.utils.activePagePermission === permissionTypesConst.READ_ONLY;

export const isAutoRefreshSelector = (state: StoreState) => state.utils.isAutoRefresh;

export const isOpenFilterSelector = (state: StoreState) => state.utils.isOpenFilter;

export const isAccessibleFilterSelector = (state: StoreState) => state.utils.isAccessibleFiltering;
