import * as api from './api';

import { cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  GetUiItemsAction,
} from './actionTypes';
import { selectIsUiItems } from './selectors';

import { apiClient } from 'services';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetUiItems = (sessionId: string) => GetUiItemsAction;
export type HandleGetUiItems = VoidPromiseThunk;

export const getUiItems: GetUiItems = sessionId => ({
  type: ActionTypeKeys.GET_UI_ITEMS,
  payload: api.getUiItems(sessionId),
});

export const handleGetUiItems: HandleGetUiItems = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

        apiClient.set('session_id', sessionId);

        if (!selectIsUiItems(state)) {
          await dispatch(getUiItems(sessionId));
        }
      },
      dispatch
    );
  };
