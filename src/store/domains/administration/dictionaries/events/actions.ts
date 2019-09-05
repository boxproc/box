import * as api from './api';

import {
  ActionTypeKeys,
  GetAdminEventsAction,
} from './actionTypes';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

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
        await dispatch(getAdminEvents());
      },
      dispatch
    );
  };
