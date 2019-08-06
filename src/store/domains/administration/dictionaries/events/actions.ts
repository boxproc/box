import * as api from './api';

import { cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  GetAdminEventsAction,
} from './actionTypes';

import { apiClient } from 'services';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminEvents = () => GetAdminEventsAction;
export type HandleGetAdminEvents = VoidPromiseThunk;

export const getAdminEvents: GetAdminEvents = () => ({
  type: ActionTypeKeys.GET_ADMIN_EVENTS,
  payload: api.getAdminEvents(),
});

export const handleGetAdminEvents: HandleGetAdminEvents = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        await dispatch(getAdminEvents());
      },
      dispatch
    );
  };
