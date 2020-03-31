import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TUtilsAction } from './actionTypes';

import { IUtilsState } from './types';

export const utilsInitialState: ImmutableObject<IUtilsState> = Immutable({
  activeTableRowIndex: null,
  activeItemId: null,
  isAutoRefresh: false,
  isOpenFilter: true,
  isAccessibleFiltering: true,
  activePagePermission: null,
});

const utilsReducer =
  (state = utilsInitialState, action: TUtilsAction) => {
    switch (action.type) {
      case ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX:
        return state.set('activeTableRowIndex', action.payload);

      case ActionTypeKeys.SET_ACTIVE_ITEM_ID:
        return state.set('activeItemId', action.payload);

      case ActionTypeKeys.SET_ACTIVE_PAGE_PERMISSION:
        return state.set('activePagePermission', action.payload);

      case ActionTypeKeys.SET_IS_OPEN_FILTER:
        return state.set('isOpenFilter', action.payload);

      case ActionTypeKeys.SET_IS_ACCESSIBLE_FILTERING:
        return state.set('isAccessibleFiltering', action.payload);

      case ActionTypeKeys.START_AUTO_REFRESH:
        return state.set('isAutoRefresh', true);

      case ActionTypeKeys.STOP_AUTO_REFRESH:
        return state.set('isAutoRefresh', false);

      case ActionTypeKeys.RESET_UTILS:
        return state = utilsInitialState;

      default: return state;
    }
  };

export default utilsReducer;
