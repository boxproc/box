import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, FilterScheduledJobsAction } from './actionType';
import * as api from './api';
import { AuditScheduledJobsFilterPrepared } from './types';
import { preparedFilterToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterAuditScheduledJobs = (params: Partial<AuditScheduledJobsFilterPrepared>) =>
  FilterScheduledJobsAction;
export type HandleFilterAuditScheduledJobs = () => Thunk<void>;

export const filterAuditScheduledJobs: FilterAuditScheduledJobs = Filter => ({
  type: ActionTypeKeys.FILTER_AUDIT_SCHEDULED_JOBS,
  payload: api.filterAuditScheduledJobs(Filter),
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
