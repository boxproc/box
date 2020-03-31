import { getFormValues } from 'redux-form';

import { push } from 'connected-react-router';

import { basePath, formNamesConst, uiItemsConst } from 'consts';

import { setIsOpenFilter } from 'store';
import {
  ActionTypeKeys,
  IFilterScheduledJobsAction,
  IFilterScheduledJobsByIdAction,
} from './actionTypes';
import * as api from './api';
import { IScheduledJobsFilterToSend, ISchedulerId } from './types';
import { prepareFilterToSend } from './utils';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

export type TFilterScheduledJobs = (data: Partial<IScheduledJobsFilterToSend>) =>
  IFilterScheduledJobsAction;
export type THandleFilterScheduledJobs = () => Thunk<void>;

export type TResetScheduledJobs = () => void;

export type TFilterScheduledJobsById = (id: ISchedulerId) => IFilterScheduledJobsByIdAction;
export type THandleFilterScheduledJobsById = (id: ISchedulerId) => Thunk<void>;

export const filterScheduledJobs: TFilterScheduledJobs = filter => ({
  type: ActionTypeKeys.FILTER_SCHEDULED_JOBS,
  payload: api.filterScheduledJobs(filter),
});

export const filterScheduledJobsById: TFilterScheduledJobsById = data => ({
  type: ActionTypeKeys.FILTER_SCHEDULED_JOBS_BY_ID,
  payload: api.filterScheduledJobsById(data),
});

export const resetScheduledJobs: TResetScheduledJobs = () => ({
  type: ActionTypeKeys.RESET_SCHEDULED_JOBS,
});

export const handleFilterScheduledJobs: THandleFilterScheduledJobs = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterScheduledJobs(preparedData));
        }
      },
      dispatch
    );
  };

export const handleFilterByIdScheduledJobs: THandleFilterScheduledJobsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.SCHEDULED_JOBS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.SCHEDULED_JOBS}`));
        await dispatch(filterScheduledJobsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };
