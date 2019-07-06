import * as api from './api';

import { cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  GetUiItemsAction,
} from './actionTypes';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetUiItems = (sessionId: string) => GetUiItemsAction;

export type HandleGetUiItems = VoidPromiseThunk;

export const getUiItems: GetUiItems = sessionId => ({
  type: ActionTypeKeys.GET_UI_ITEMS,
  payload: api.getUiItems(sessionId),
});

export const handleGetUiItems: HandleGetUiItems = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);
        await dispatch(getUiItems(sessionId));
      },
      dispatch
    );
  };
