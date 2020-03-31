import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TUiItemsAction } from './actionTypes';
import { IUiItemsState } from './types';

export const uiItemsInitialState: ImmutableObject<IUiItemsState> = Immutable({
  uiItems: Immutable([]),
  helpLink: null,
});

const uiItemsReducer = (state = uiItemsInitialState, action: TUiItemsAction) => {
  switch (action.type) {
    case ActionTypeKeys.GET_UI_ITEMS_FULFILLED:
      return state.set('uiItems', action.payload.ui_items);

    case ActionTypeKeys.GET_HELP_LINK_FULFILLED:
      return state.set('helpLink', action.payload.url[0].help_page_url);

    default: return state;
  }
};

export default uiItemsReducer;
