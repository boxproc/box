import { permissionTypesConst } from 'consts';
import { StoreState } from 'store';

export const selectActiveTableRowIndex = (state: StoreState) => state.utils.activeTableRowIndex;

export const selectActiveItemId = (state: StoreState) => state.utils.activeItemId;

export const selectIsReadOnly = (state: StoreState) =>
    state.utils.activePagePermission === permissionTypesConst.READ_ONLY;

export const selectIsAutoRefresh = (state: StoreState) => state.utils.isAutoRefresh;

export const selectIsOpenFilter = (state: StoreState) => state.utils.isOpenFilter;

export const selectIsAccessibleFiltering = (state: StoreState) => state.utils.isAccessibleFiltering;
