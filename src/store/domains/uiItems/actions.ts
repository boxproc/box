import * as api from './api';

import { ActionTypeKeys, GetUiItemsAction } from './actionTypes';
import { selectIsUiItems } from './selectors';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetUiItems = () => GetUiItemsAction;
export type HandleGetUiItems = VoidPromiseThunk;

export const getUiItems: GetUiItems = () => ({
  type: ActionTypeKeys.GET_UI_ITEMS,
  payload: api.getUiItems(),
});

export const handleGetUiItems: HandleGetUiItems = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();

        if (!selectIsUiItems(state)) {
          await dispatch(getUiItems());
        }
      },
      dispatch
    );
  };
