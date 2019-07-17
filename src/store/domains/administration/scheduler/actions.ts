import { cookiesNames, modalNames } from 'consts';
import * as api from './api';

import {
  ActionTypeKeys,
  DeleteAdminSchedulerJobAction,
  GetAdminSchedulerJobAction,
} from './actionTypes';

import { apiClient } from 'services';

import { closeModal } from 'store/domains/modals';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSchedulerJobs = () => GetAdminSchedulerJobAction;
export type HandleGetAdminSchedulerJobs = VoidPromiseThunk;

export type DeleteAdminSchedulerJob = (id: string|number) => DeleteAdminSchedulerJobAction;
export type HandleDeleteAdminSchedulerJob = (id: string|number) => Thunk<void>;

export const getAdminSchedulerJobs: GetAdminSchedulerJobs = () => ({
  type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS,
  payload: api.getAdminSchedulerJobs(),
});

export const deleteAdminSchedulerJob: DeleteAdminSchedulerJob = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS,
  payload: api.deleteAdminSchedulerJob(id),
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

export const handleDeleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminSchedulerJob(id));
        await dispatch(closeModal(modalNames.EDIT_SCHEDULER));
      },
      dispatch
    );
  };
