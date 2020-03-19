import * as api from './api';

import { ActionTypeKeys, GetHelpLinkAction, GetUiItemsAction } from './actionTypes';
import { selectIsUiItems } from './selectors';

import { Thunk, VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetUiItems = () => GetUiItemsAction;
export type HandleGetUiItems = VoidPromiseThunk;

export type GetHelpLink = (data: string) => GetHelpLinkAction;
export type HandleGetHelpLink = (data: string) => Thunk<void>;

export const getUiItems: GetUiItems = () => ({
  type: ActionTypeKeys.GET_UI_ITEMS,
  payload: api.getUiItems(),
});

export const getHelpLink: GetHelpLink = data => ({
  type: ActionTypeKeys.GET_HELP_LINK,
  payload: api.getHelpLink(data),
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

export const handleGetHelpLink: HandleGetHelpLink = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getHelpLink(data));
      },
      dispatch
    );
  };
