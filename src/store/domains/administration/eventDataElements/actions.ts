import * as api from './api';

import { cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  GetAdminEventDataElementsAction,
} from './actionTypes';

import { apiClient } from 'services';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminEventDataElements = () => GetAdminEventDataElementsAction;
export type HandleGetAdminEventDataElements = VoidPromiseThunk;

export const getAdminEventDataElements: GetAdminEventDataElements = () => ({
  type: ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMENTS,
  payload: api.getAdminEventDataElements(),
});

export const handleGetAdminEventDataElements: HandleGetAdminEventDataElements = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        await dispatch(getAdminEventDataElements());
      },
      dispatch
    );
  };
