import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UiItemsActionTypes } from './actionTypes';
import { UiItemsState } from './types';

export const uiItemsInitialState: ImmutableObject<UiItemsState> = Immutable({
  uiItems: null,
});

const uiItemsReducer = (state = uiItemsInitialState, action: UiItemsActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.GET_UI_ITEMS_FULFILLED:
      return state
        .set('uiItems', action.payload.ui_items);

    default: return state;
  }
};

export default uiItemsReducer;
