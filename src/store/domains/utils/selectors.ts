import { permissionTypesCodes } from 'consts';
import { StoreState } from 'store/StoreState';

export const selectActiveTableRowIndex = (state: StoreState) => state.utils.activeTableRowIndex;

export const selectActiveItemId = (state: StoreState) => state.utils.activeItemId;

export const selectIsReadOnly = (state: StoreState) =>
    state.utils.activePagePermission === permissionTypesCodes.READ_ONLY;

export const selectIsAutoRefresh = (state: StoreState) => state.utils.isAutoRefresh;

export const selectIsClearActiveIds = (state: StoreState) => state.utils.isClearActiveIds;

export const selectIsOpenFilter = (state: StoreState) => state.utils.isOpenFilter;

export const selectIsAccessibleFiltering = (state: StoreState) => state.utils.isAccessibleFiltering;

export const selectIsRelogin = (state: StoreState) => state.utils.isRelogin;
