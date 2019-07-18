import { reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';
import * as api from './api';

import {
  ActionTypeKeys,
  AddAdminSchedulerJobAction,
  DeleteAdminSchedulerJobAction,
  GetAdminSchedulerJobAction,
} from './actionTypes';

import { apiClient } from 'services';

import { closeModal } from 'store/domains/modals';

import { Thunk, VoidPromiseThunk, } from 'types';
import { AdminSchedulerItem,
   AdminSchedulerItemResp } from './types';

import { prepareAdminSysItemValuesWithLockedFlag } from './utils';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSchedulerJobs = () => GetAdminSchedulerJobAction;
export type HandleGetAdminSchedulerJobs = VoidPromiseThunk;

export type AddAdminSchedulerJob = (propValues: AdminSchedulerItemResp) =>
AddAdminSchedulerJobAction;
export type HandleAddAdminSchedulerJob = (propValues: AdminSchedulerItem) => Thunk<void>;

export type DeleteAdminSchedulerJob = (id: string|number) => DeleteAdminSchedulerJobAction;
export type HandleDeleteAdminSchedulerJob = (id: string|number) => Thunk<void>;

export const getAdminSchedulerJobs: GetAdminSchedulerJobs = () => ({
  type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS,
  payload: api.getAdminSchedulerJobs(),
});

export const addAdminSchedulerJob: AddAdminSchedulerJob = propValues => ({
  type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS,
  payload: api.addAdminSchedulerJob(propValues),
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

export const handleAddAdminSchedulerJob: HandleAddAdminSchedulerJob = propValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedAdminSchedulerJobValues =
          prepareAdminSysItemValuesWithLockedFlag(propValues);

        await dispatch(addAdminSchedulerJob(preparedAdminSchedulerJobValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_SCHEDULER));
        await dispatch(resetForm(formNames.ADD_ADMIN_SCHEDULER_JOB));
      },
      dispatch
    );
  };

export const handleDeleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminSchedulerJob(id));
        await dispatch(closeModal(modalNames.EDIT_ADMIN_SCHEDULER));
      },
      dispatch
    );
  };
