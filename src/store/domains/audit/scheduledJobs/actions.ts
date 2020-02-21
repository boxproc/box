import { getFormValues } from 'redux-form';

import { push } from 'connected-react-router';

import { basePath, formNamesConst, uiItemsConst } from 'consts';

import { setIsOpenFilter } from 'store/domains/utils';
import {
  ActionTypeKeys,
  FilterScheduledJobsAction,
  FilterScheduledJobsByIdAction,
} from './actionTypes';
import * as api from './api';
import { AuditScheduledJobsFilterPrepared, SchedulerId } from './types';
import { preparedFilterToSend } from './utils';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

export type FilterAuditScheduledJobs = (params: Partial<AuditScheduledJobsFilterPrepared>) =>
  FilterScheduledJobsAction;
export type HandleFilterAuditScheduledJobs = () => Thunk<void>;

export type ResetScheduledJobs = () => void;

export type FilterScheduledJobsById = (id: SchedulerId) => FilterScheduledJobsByIdAction;
export type HandleFilterScheduledJobsById = (id: SchedulerId) => Thunk<void>;

export const filterAuditScheduledJobs: FilterAuditScheduledJobs = filter => ({
  type: ActionTypeKeys.FILTER_AUDIT_SCHEDULED_JOBS,
  payload: api.filterAuditScheduledJobs(filter),
});

export const filterScheduledJobsById: FilterScheduledJobsById = data => ({
  type: ActionTypeKeys.FILTER_AUDIT_SCHEDULED_JOBS_BY_ID,
  payload: api.filterScheduledJobsById(data),
});

export const resetScheduledJobs: ResetScheduledJobs = () => ({
  type: ActionTypeKeys.RESET_SCHEDULED_JOBS,
});

export const handleFilterAuditScheduledJobs: HandleFilterAuditScheduledJobs = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterAuditScheduledJobs(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleFilterByIdAuditScheduledJobs: HandleFilterScheduledJobsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.AUDIT_SCHEDULED_JOBS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.AUDIT_SCHEDULED_JOBS}`));
        await dispatch(filterScheduledJobsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };
