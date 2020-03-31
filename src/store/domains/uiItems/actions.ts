import * as api from './api';

import { ActionTypeKeys, IGetHelpLinkAction, IGetUiItemsAction } from './actionTypes';
import { isLoadedUiItemsSelector } from './selectors';

import { Thunk, VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type TGetUiItems = () => IGetUiItemsAction;
export type THandleGetUiItems = VoidPromiseThunk;

export type TGetHelpLink = (data: string) => IGetHelpLinkAction;
export type THandleGetHelpLink = (data: string) => Thunk<void>;

export const getUiItems: TGetUiItems = () => ({
  type: ActionTypeKeys.GET_UI_ITEMS,
  payload: api.getUiItems(),
});

export const getHelpLink: TGetHelpLink = data => ({
  type: ActionTypeKeys.GET_HELP_LINK,
  payload: api.getHelpLink(data),
});

export const handleGetUiItems: THandleGetUiItems = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();

        if (!isLoadedUiItemsSelector(state)) {
          await dispatch(getUiItems());
        }
      },
      dispatch
    );
  };

export const handleGetHelpLink: THandleGetHelpLink = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getHelpLink(data));
      },
      dispatch
    );
  };
