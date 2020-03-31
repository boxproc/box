import { permissionTypesConst } from 'consts';
import { IStoreState } from 'store';

export const activeTableRowIndexSelector = (state: IStoreState) => state.utils.activeTableRowIndex;

export const activeItemIdSelector = (state: IStoreState) => state.utils.activeItemId;

export const isReadOnlySelector = (state: IStoreState) =>
    state.utils.activePagePermission === permissionTypesConst.READ_ONLY;

export const isAutoRefreshSelector = (state: IStoreState) => state.utils.isAutoRefresh;

export const isOpenFilterSelector = (state: IStoreState) => state.utils.isOpenFilter;

export const isAccessibleFilterSelector = (state: IStoreState) => state.utils.isAccessibleFiltering;
