import { cookiesNames } from 'consts';
import * as api from './api';

import {
  ActionTypeKeys,
  GetAdminSchedulerJobAction,
} from './actionTypes';

import { apiClient } from 'services';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSchedulerJobs = () => GetAdminSchedulerJobAction;
export type HandleGetAdminSchedulerJobs = VoidPromiseThunk;

export const getAdminSchedulerJobs: GetAdminSchedulerJobs = () => ({
  type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS,
  payload: api.getAdminSchedulerJobs(),
});

export const handleGetAdminSchedulerJobs: HandleGetAdminSchedulerJobs = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);
        await dispatch(getAdminSchedulerJobs());
      },
      dispatch
    );
  };
