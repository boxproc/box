import { reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';
import * as api from './api';

import {
  ActionTypeKeys,
  AddAdminSchedulerJobAction,
  DeleteAdminSchedulerJobAction,
  GetAdminSchedulerJobAction,
} from './actionTypes';

import { closeModal } from 'store/domains/modals';

import { prepareAdminSchedulerJobValues } from './utils';

import { AdminSchedulerEditableItem, AdminSchedulerEditableItemPrepared } from './types';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk, } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSchedulerJobs = () => GetAdminSchedulerJobAction;
export type HandleGetAdminSchedulerJobs = VoidPromiseThunk;

export type AddAdminSchedulerJob = (values: AdminSchedulerEditableItemPrepared) =>
  AddAdminSchedulerJobAction;
export type HandleAddAdminSchedulerJob = (values: AdminSchedulerEditableItem) =>
  Thunk<void>;

export type DeleteAdminSchedulerJob = (id: string | number) => DeleteAdminSchedulerJobAction;
export type HandleDeleteAdminSchedulerJob = (id: string | number) => Thunk<void>;

export const getAdminSchedulerJobs: GetAdminSchedulerJobs = () => ({
  type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS,
  payload: api.getAdminSchedulerJobs(),
});

export const addAdminSchedulerJob: AddAdminSchedulerJob = values => ({
  type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS,
  payload: api.addAdminSchedulerJob(values),
  meta: values,
});

export const deleteAdminSchedulerJob: DeleteAdminSchedulerJob = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS,
  payload: api.deleteAdminSchedulerJob(id),
  meta: id,
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

export const handleAddAdminSchedulerJob: HandleAddAdminSchedulerJob = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminSchedulerJobValues(values);

        await dispatch(addAdminSchedulerJob(preparedValues));
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
