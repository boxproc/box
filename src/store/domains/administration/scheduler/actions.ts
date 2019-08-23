import { reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';
import {
  ActionTypeKeys,
  AddAdminSchedulerJobAction,
  DeleteAdminSchedulerJobAction,
  GetAdminSchedulerJobAction,
  SetAdminSchedulerJobIdAction,
  SetGeneratedCronExpressionAction,
  UpdateAdminSchedulerJobAction
} from './actionTypes';
import * as api from './api';
import { AdminSchedulerEditableItem, AdminSchedulerItem } from './types';
import { prepareValuesToSend } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk, } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSchedulerJobs = () => GetAdminSchedulerJobAction;
export type HandleGetAdminSchedulerJobs = VoidPromiseThunk;

export type AddAdminSchedulerJob = (values: Partial<AdminSchedulerItem>) =>
  AddAdminSchedulerJobAction;
export type HandleAddAdminSchedulerJob = (values: Partial<AdminSchedulerEditableItem>) =>
  Thunk<void>;

export type DeleteAdminSchedulerJob = (id: string | number) => DeleteAdminSchedulerJobAction;
export type HandleDeleteAdminSchedulerJob = (id: string | number) => Thunk<void>;

export type UpdateAdminSchedulerJob = (values: Partial<AdminSchedulerItem>) =>
  UpdateAdminSchedulerJobAction;
export type HandleUpdateAdminSchedulerJob = (values: Partial<AdminSchedulerEditableItem>) =>
  Thunk<void>;

export type SetAdminSchedulerJobId = (id: number) => SetAdminSchedulerJobIdAction;
export type HandleSetAdminSchedulerJobId = (id: number) => void;

export type SetGeneratedCronExpression = (expression: string) => SetGeneratedCronExpressionAction;
export type HandleSetGeneratedCronExpression = (expression: string) => Thunk<void>;

export const getAdminSchedulerJobs: GetAdminSchedulerJobs = () => ({
  type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS,
  payload: api.getAdminSchedulerJobs(),
});

export const addAdminSchedulerJob: AddAdminSchedulerJob = values => ({
  type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS,
  payload: api.addAdminSchedulerJob(values),
});

export const deleteAdminSchedulerJob: DeleteAdminSchedulerJob = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS,
  payload: api.deleteAdminSchedulerJob(id),
  meta: id,
});

export const updateAdminSchedulerJobs: UpdateAdminSchedulerJob = schedulerValues => ({
  type: ActionTypeKeys.UPDATE_ADMIN_SCHEDULER_JOBS,
  payload: api.updateAdminSchedulerJobs(schedulerValues),
});

export const setAdminSchedulerJobId: SetAdminSchedulerJobId = id => ({
  type: ActionTypeKeys.SET_ADMIN_SCHEDULER_JOBS_ID,
  payload: id,
});

export const setGeneratedCronExpression: SetGeneratedCronExpression = expression => ({
  type: ActionTypeKeys.SET_GENERATED_CRON_EXPRESSION,
  payload: expression,
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

export const handleAddAdminSchedulerJob: HandleAddAdminSchedulerJob = schedulerValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareValuesToSend(schedulerValues);

        await dispatch(closeModal(modalNames.ADD_ADMIN_SCHEDULER));
        await dispatch(addAdminSchedulerJob(preparedValues));
        await dispatch(handleGetAdminSchedulerJobs());
        await dispatch(resetForm(formNames.DEFINE_ADMIN_SCHEDULER_JOB));
      },
      dispatch
    );
  };

export const handleDeleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(closeModal(modalNames.EDIT_ADMIN_SCHEDULER));
        await dispatch(deleteAdminSchedulerJob(id));
        await dispatch(handleGetAdminSchedulerJobs());
      },
      dispatch
    );
  };

export const handleUpdateAdminSchedulerJobs: HandleUpdateAdminSchedulerJob = schedulerValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareValuesToSend(schedulerValues);

        await dispatch(closeModal(modalNames.EDIT_ADMIN_SCHEDULER));
        await dispatch(updateAdminSchedulerJobs(preparedValues));
        await dispatch(handleGetAdminSchedulerJobs());
      },
      dispatch
    );
  };

export const handleSetAdminSchedulerJobId: HandleSetAdminSchedulerJobId = id =>
  setAdminSchedulerJobId(id);

export const handleSetGeneratedCronExpression: HandleSetGeneratedCronExpression = expression =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(setGeneratedCronExpression(expression));
        await dispatch(closeModal(modalNames.GENERATE_CRON_EXPRESSION));
      },
      dispatch
    );
  };
