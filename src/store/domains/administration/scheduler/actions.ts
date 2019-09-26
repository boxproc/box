import { getFormValues, reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';

import { selectActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddAdminSchedulerJobAction,
  DeleteAdminSchedulerJobAction,
  FilterAdminSchedulerJobsAction,
  SendAdminSchedulerActionJobAction,
  UpdateAdminSchedulerJobAction
} from './actionTypes';
import * as api from './api';
import {
  AdminSchedulerEditableItem,
  AdminSchedulerFilterPrepared,
  AdminSchedulerItem,
  AdminSchedulerJobAction,
  AdminSchedulerJobActionPrepared,
} from './types';
import { preparedFilterToSend, prepareValuesToSend, prepareValuesToSendActions } from './utils';

import { Thunk, VoidPromiseThunk, } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterAdminSchedulerJobs = (params: AdminSchedulerFilterPrepared) =>
  FilterAdminSchedulerJobsAction;
export type HandleFilterAdminSchedulerJobs = VoidPromiseThunk;

export type AddAdminSchedulerJob = (values: Partial<AdminSchedulerItem>) =>
  AddAdminSchedulerJobAction;
export type HandleAddAdminSchedulerJob = (values: Partial<AdminSchedulerEditableItem>) =>
  Thunk<void>;

export type DeleteAdminSchedulerJob = (id: number) => DeleteAdminSchedulerJobAction;
export type HandleDeleteAdminSchedulerJob = () => Thunk<void>;

export type SendAdminSchedulerAction =
  (values: Partial<AdminSchedulerJobAction>) => SendAdminSchedulerActionJobAction;
export type HandleSendAdminSchedulerAction = (values: Partial<AdminSchedulerJobActionPrepared>) =>
  Thunk<void>;

export type UpdateAdminSchedulerJob = (values: Partial<AdminSchedulerItem>) =>
  UpdateAdminSchedulerJobAction;
export type HandleUpdateAdminSchedulerJob = (values: Partial<AdminSchedulerEditableItem>) =>
  Thunk<void>;

export const filterAdminSchedulerJobs: FilterAdminSchedulerJobs = (params) => ({
  type: ActionTypeKeys.FILTER_ADMIN_SCHEDULER_JOBS,
  payload: api.filterAdminSchedulerJobs(params),
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

export const sendAdminSchedulerAction: SendAdminSchedulerAction = values => ({
  type: ActionTypeKeys.SEND_ADMIN_SCHEDULER_ACTION_JOB,
  payload: api.sendAdminSchedulerAction(values),
});

export const updateAdminSchedulerJobs: UpdateAdminSchedulerJob = schedulerValues => ({
  type: ActionTypeKeys.UPDATE_ADMIN_SCHEDULER_JOBS,
  payload: api.updateAdminSchedulerJobs(schedulerValues),
});

export const handleFilterAdminSchedulerJobs: HandleFilterAdminSchedulerJobs = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        await dispatch(filterAdminSchedulerJobs(preparedValues));
      },
      dispatch
    );
  };

export const handleAddAdminSchedulerJob: HandleAddAdminSchedulerJob = schedulerValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareValuesToSend(schedulerValues);

        await dispatch(closeModal(modalNamesConst.ADD_ADMIN_SCHEDULER));
        await dispatch(addAdminSchedulerJob(preparedValues));
        await dispatch(handleFilterAdminSchedulerJobs());
        await dispatch(resetForm(formNamesConst.DEFINE_ADMIN_SCHEDULER_JOB));
      },
      dispatch
    );
  };

export const handleDeleteAdminSchedulerJob: HandleDeleteAdminSchedulerJob = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(closeModal(modalNamesConst.EDIT_ADMIN_SCHEDULER));
        await dispatch(deleteAdminSchedulerJob(id));
        await dispatch(handleFilterAdminSchedulerJobs());
      },
      dispatch
    );
  };

export const handleUpdateAdminSchedulerJobs: HandleUpdateAdminSchedulerJob = schedulerValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareValuesToSend(schedulerValues);

        await dispatch(closeModal(modalNamesConst.EDIT_ADMIN_SCHEDULER));
        await dispatch(updateAdminSchedulerJobs(preparedValues));
        await dispatch(handleFilterAdminSchedulerJobs());
      },
      dispatch
    );
  };

export const handleSendAdminSchedulerAction: HandleSendAdminSchedulerAction = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareValuesToSendActions(values);

        await dispatch(sendAdminSchedulerAction(preparedValues));
        await dispatch(handleFilterAdminSchedulerJobs());
      },
      dispatch
    );
  };
