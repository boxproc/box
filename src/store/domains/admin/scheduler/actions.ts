import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal, isAccessibleFilterSelector, startAutoRefresh } from 'store';
import {
  ActionTypeKeys,
  IAddSchedulerJobAction,
  IDeleteSchedulerJobAction,
  IExecSchedulerJobAction,
  IFilterSchedulerJobsAction,
  IGetSchedulerNamesByInstIdAction,
  IUpdateSchedulerJobAction,
} from './actionTypes';
import * as api from './api';
import {
  ISchedulerJobData,
  ISchedulerJobEditable,
  ISchedulerJobExecReq,
  ISchedulerJobExecReqToSend,
  ISchedulerJobsFilterToSend,
} from './types';
import { prepareDataToExec, prepareDataToSend, prepareFilterToSend } from './utils';

import { Thunk, VoidPromiseThunk, } from 'types';
import { errorDecoratorUtil } from 'utils';

/**
 * Filter scheduler jobs action
 */

export type TFilterSchedulerJobs = (data: ISchedulerJobsFilterToSend) => IFilterSchedulerJobsAction;
export type THandleFilterSchedulerJobs = VoidPromiseThunk;

export const filterSchedulerJobs: TFilterSchedulerJobs = (data) => ({
  type: ActionTypeKeys.FILTER_SCHEDULER_JOBS,
  payload: api.filterSchedulerJobs(data),
});

export const handleFilterSchedulerJobs: THandleFilterSchedulerJobs = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        await dispatch(filterSchedulerJobs(preparedData));
      },
      dispatch
    );
  };

/**
 * Add scheduler job action
 */

export type TAddSchedulerJob = (data: Partial<ISchedulerJobData>) => IAddSchedulerJobAction;
export type THandleAddSchedulerJob = (data: Partial<ISchedulerJobEditable>) => Thunk<void>;

export const addSchedulerJob: TAddSchedulerJob = data => ({
  type: ActionTypeKeys.ADD_SCHEDULER_JOB,
  payload: api.addSchedulerJob(data),
});

export const handleAddSchedulerJob: THandleAddSchedulerJob = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const isAccessibleFilter = isAccessibleFilterSelector(state);

        await dispatch(addSchedulerJob(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_SCHEDULER));

        if (isAccessibleFilter) {
          await dispatch(handleFilterSchedulerJobs());
        }
      },
      dispatch
    );
  };

/**
 * Delete scheduler job action
 */

export type TDeleteSchedulerJob = (id: number) => IDeleteSchedulerJobAction;
export type THandleDeleteSchedulerJob = (id: number) => Thunk<void>;

export const deleteSchedulerJob: TDeleteSchedulerJob = id => ({
  type: ActionTypeKeys.DELETE_SCHEDULER_JOB,
  payload: api.deleteSchedulerJob(id),
  meta: { id },
});

export const handleDeleteSchedulerJob: THandleDeleteSchedulerJob = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteSchedulerJob(id));
        dispatch(closeModal(modalNamesConst.EDIT_SCHEDULER));
      },
      dispatch
    );
  };

/**
 * Execute scheduler job action
 */

export type TExecSchedulerJobAction = (data: Partial<ISchedulerJobExecReqToSend>) =>
  IExecSchedulerJobAction;
export type THandleExecSchedulerJob = (
  data: ISchedulerJobExecReq,
  params?: { withAutoRefresh?: boolean }
) => Thunk<void>;

export const execSchedulerJob: TExecSchedulerJobAction = data => ({
  type: ActionTypeKeys.EXEC_SCHEDULER_JOB,
  payload: api.execSchedulerJob(data),
});

export const handleExecSchedulerJob: THandleExecSchedulerJob = (data, params) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToExec(data);

        await dispatch(execSchedulerJob(preparedData));
        await dispatch(handleFilterSchedulerJobs());

        if (params && params.withAutoRefresh) {
          dispatch(startAutoRefresh());
        }
      },
      dispatch
    );
  };

/**
 * Update scheduler job action
 */

export type TUpdateSchedulerJob = (data: Partial<ISchedulerJobData>) => IUpdateSchedulerJobAction;
export type THandleUpdateSchedulerJob = (data: Partial<ISchedulerJobEditable>) => Thunk<void>;

export const updateSchedulerJobs: TUpdateSchedulerJob = data => ({
  type: ActionTypeKeys.UPDATE_SCHEDULER_JOB,
  payload: api.updateSchedulerJobs(data),
});

export const handleUpdateSchedulerJobs: THandleUpdateSchedulerJob = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(updateSchedulerJobs(preparedData));
        await dispatch(handleFilterSchedulerJobs());
      },
      dispatch
    );
  };

/**
 * Get scheduler jobs names action
 */

export type THandleGetSchedulerNamesByInstId = (id: string | number) => Thunk<void>;
export type TGetSchedulerNamesByInstitutionId = (id: string | number) =>
  IGetSchedulerNamesByInstIdAction;

export const getSchedulerNamesByInstitutionId: TGetSchedulerNamesByInstitutionId = id => ({
  type: ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INST_ID,
  payload: api.getSchedulerNamesByInstitutionId(id),
});

export const handleGetSchedulerNamesByInstId: THandleGetSchedulerNamesByInstId = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getSchedulerNamesByInstitutionId(id));
      },
      dispatch
    );
  };

/**
 * Reset scheduler job action
 */

export type TResetScheduler = () => void;

export const resetScheduler: TResetScheduler = () => ({
  type: ActionTypeKeys.RESET_SCHEDULER,
});
