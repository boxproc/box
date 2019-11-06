import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UtilsActionTypes } from './actionTypes';

import { UtilsState } from './types';

export const utilsInitialState: ImmutableObject<UtilsState> = Immutable({
  activeTableRowIndex: null,
  activeItemId: null,
  isAutoRefresh: false,
  isClearActiveIds: true,
  isOpenFilter: true,
});

const utilsReducer =
  (state = utilsInitialState, action: UtilsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX:
        return state.set('activeTableRowIndex', action.payload);

      case ActionTypeKeys.SET_ACTIVE_ITEM_ID:
        return state.set('activeItemId', action.payload);

      case ActionTypeKeys.SET_IS_CLEAR_ACTIVE_IDS:
        return state.set('isClearActiveIds', action.payload);

      case ActionTypeKeys.SET_IS_OPEN_FILTER:
        return state.set('isOpenFilter', action.payload);

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
